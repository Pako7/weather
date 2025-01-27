# frozen_string_literal: true

module Api
  module V1
    class WeatherController < ApplicationController
      def index
        date = Time.zone.today
        City.includes(:weathers).all.each do |city|
          city.weathers.where(date:).first || GenerateWeatherTodayService.new(city:, date:).call
        end

        weathers = Weather.includes(:city).where(date:)
        render json: weathers.to_json(include: :city)
      end
    end
  end
end
