require 'vcr'
require 'webmock/rspec'

VCR.configure do |config|
  config.cassette_library_dir = 'spec/vcr_cassettes'
  config.hook_into :webmock
  # config.ignore_localhost = true
  config.configure_rspec_metadata!

  # Filter sensitive data
  config.filter_sensitive_data('<FILTERED_OPEN_WEATHER_API_KEY>') do
    ENV['OPEN_WEATHER_API_KEY']
  end

  # Allow requests to external services when necessary
  config.allow_http_connections_when_no_cassette = false
end
