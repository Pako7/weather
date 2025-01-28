namespace :populate_cities do
  desc "Populate cities from API"
  task run: :environment do
    puts "Populating cities..."
    puts "Initial: #{City.count}"
    url = "https://search.reservamos.mx/api/v2/places"

    cities = FaradayService.get(url)

    cities.each do |city|
      next unless city["result_type"] == "city"

      City.find_or_create_by(
        reference_id: city["id"],
        display: city["display"],
        state: city["state"],
        country: city["country"],
        lat: city["lat"],
        long: city["long"]
      )
    end
    puts "Final: #{City.count}"
    puts "Cities populated successfully!"
  end
end
