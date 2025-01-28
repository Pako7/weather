class SaveWeatherService
  attr_reader :city, :date
  def initialize(city:, date:)
    @city = city
    @date = date
  end

  def call
    response = get_data
    data = response['list']
    data.each do |weather_data|
      Weather.find_or_create_by!(city:, datetime_text: weather_data['dt_txt']) do |weather|
        weather.datetime = weather_data['dt_txt'].in_time_zone
        weather.temp = weather_data['main']['temp']
        weather.temp_min = weather_data['main']['temp_min']
        weather.temp_max = weather_data['main']['temp_max']
        weather.climatic_condition = weather_data['weather'][0]['description']
        weather.unit = :metric
      end
    end
  end

  def get_data
    url = "https://api.openweathermap.org/data/2.5/forecast?lat=#{city.lat}&lon=#{city.long}&appid=#{ENV['OPEN_WEATHER_API_KEY']}&units=metric&lang=es"
    FaradayService.get(url)
  end
end