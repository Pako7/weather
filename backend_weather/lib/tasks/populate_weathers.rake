namespace :populate_weathers do
  desc "Populate weathers from API"
  task run: :environment do
    puts "Populating weathers..."
    puts "Initial: #{Weather.count}"

    date = Time.zone.today
    City.includes(:weathers).all.each do |city|
      SaveWeatherService.new(city:, date:).call
    end
    puts "Final: #{Weather.count}"
    puts "Weathers populated successfully!"
  end
end
