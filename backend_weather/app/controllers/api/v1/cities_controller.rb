module Api
  module V1
    class CitiesController < ApplicationController
      def index
        q = params[:q]
        from = params[:from]
        url = "https://search.reservamos.mx/api/v2/places"
        cities = FaradayService.get(url, { q: q, from: from })
        cities_id = cities.map { |city| city['id'] }
        render json: Weather.where(city_id: cities_id)
      end
    end
  end
end
