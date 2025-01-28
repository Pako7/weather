require 'rails_helper'

RSpec.describe SaveWeatherService do
  let!(:city) { create(:city, display: 'Mexico City', lat: '19.4326', long: '-99.133208') }
  let(:date) { Time.zone.today }

  subject { described_class.new(city:, date:) }

  describe '#call' do
    it 'saves weather data for the specified city and date' do
      VCR.use_cassette('weather_api_forecast_5_3_lat_long') do
        expect {
          subject.call
        }.to change(Weather, :count).by_at_least(1)

        # Verify that the data is saved correctly
        saved_weather = Weather.last
        expect(saved_weather.city).to eq(city)
        expect(saved_weather.unit).to eq('metric')
        expect(saved_weather.temp).not_to be_nil
        expect(saved_weather.climatic_condition).not_to be_nil
        expect(city.weathers.count).to eq(40)
      end
    end
  end
end
