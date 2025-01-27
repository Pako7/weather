```bash
cd weather
docker-compose up

docker-compose run backend_weather bundle exec rake db:create
docker-compose run backend_weather bundle exec rake db:migrate


```

