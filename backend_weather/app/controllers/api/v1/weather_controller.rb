module Api
  module V1
    class WeatherController < ApplicationController
      def index
        # The range of time is from 2 hours ago to 12 hours from now
        # Cause the openweathermap API returns the weather for the next 5 days in 3 hours intervals
        # and we want to show the weather of the current time or nearest to it
        cities = City.includes(:weathers).where(weathers: { datetime: 2.hours.ago..Time.zone.now + 12.hours })
        render json: cities.to_json(include: :weathers)
      end

      def show
        city = City.includes(:weathers).find(params[:id])
        render json: city.to_json(include: :weathers)
      end
    end
  end
end
