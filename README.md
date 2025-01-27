```bash
cd weather
docker-compose up

docker-compose build --no-cache

docker-compose run backend_weather bundle exec rake db:create
docker-compose run backend_weather bundle exec rake db:migrate
docker-compose run backend_weather bundle exec rake populate_cities:run

docker-compose run backend_weather bundle exec rails c

```
### For debug
```bash
docker attach weather-backend_weather-1
```

create a task to populate cities using a url example and faraday_service.rb

create a task to populate cities using a url example and faraday_service.rb, iterate over results and insert in model City data where result_type is equal to city only if city is not persisted

city.update!(
          display: city['display'],
          state: city['state'],
          country: city['country'],
          lat: city['lat'],
          long: city['long']
        )
