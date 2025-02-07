require 'rails_helper'
require 'vcr'

RSpec.describe Api::V1::CitiesController, type: :request do
  describe 'GET /api/v1/cities' do
    it 'returns weather data for cities matching the search query' do
      VCR.use_cassette('cities_by_q_and_from') do
        get '/api/v1/cities', params: { q: 'mon', from: 'ciudad-de-mexico' }

        # Assert the response status code
        expect(response).to have_http_status(:ok)

        # Assert the response body
        json_response = JSON.parse(response.body)
      end
    end
  end
end