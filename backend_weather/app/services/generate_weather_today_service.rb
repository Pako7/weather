class GenerateWeatherTodayService
  attr_reader :city, :date
  def initialize(city:, date:)
    @city = city
    @date = date
  end

  def self.call
    url = "https://api.openweathermap.org/data/2.5/weather?lat=#{city.lat}&lon=#{city.long}&appid=#{ENV['OPEN_WEATHER_API_KEY']}"
    response = FaradayService.get(url)

    Weather.create!(
      city:,
      date:,
      temperature: response['main']['temp'],
      temperature_min: response['main']['temp_min'],
      temperature_max: response['main']['temp_max'],
      climatic_condition: response['weather'][0]['description']
    )
  end
end