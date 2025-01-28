# Weather App

## Overview

This is a Ruby on Rails application that displays weather information based on cities. The app uses Ruby on Rails as a backend API and React.js for the frontend interface.

## Features

- Users can see the current forecast of cities
- Users can see the next 5 forecast by specific city

## Getting Started

### Prerequisites
Ensure you have the following installed:
- Docker
- Docker Compose

### Installation
- Clone the repository:
   ```bash
   git clone git@github.com:Pako7/weather.git
   ```
- Change to the project directory:
   ```bash
   cd weather
   ```


## Setup

- Generate the next folder and file:
```envs/secrets.env```

```bash
mkdir envs
```

```bash
vi envs/secrets.env
```

- Put your credentiales inside:

```bash
POSTGRES_DB=weather_development
POSTGRES_USER=postgres
POSTGRES_PASSWORD=password
POSTGRES_HOST=postgres_db
POSTGRES_PORT=5432

OPEN_WEATHER_API_KEY=your_api_key_here # change with your api key

REACT_APP_API_BASE_URL='http://localhost:3000/api/v1/'
```

### Docker
This application includes a Docker setup for only development.

- Build the Docker image:
   ```bash
   docker-compose build
   ```

### Generate database
- Run database commands:
   ```bash
   docker-compose run backend_weather bundle exec rake db:create
   docker-compose run backend_weather bundle exec rake db:migrate
   ```

## Tasks to fill database

- Populate cities
```bash
docker-compose run backend_weather bundle exec rake populate_cities:run
```

- Populate weather by cities
```bash
docker-compose run backend_weather bundle exec rake populate_weathers:run
```

# Run app

- Start application and services:
   ```bash
   docker-compose up
   ```

- Or stop the services:
   ```bash
   docker-compose down
   ```

- Access at [http://localhost:3001](http://localhost:3001).

## Test

```bash
docker-compose run backend_weather bundle exec rspec spec
```

## Linting
```bash
docker-compose run backend_weather bundle exec rubocop -a
```

## IA Tools

#### Copilot
I use it for completions on suggestions of some lines of code, for example:

- `weather/backend_weather/spec/factories/cities.rb` for fake data of cities
- in this file `weather/frontend_weather/src/utils/dateFormat.js` I had a bug with the date and I requested to Copilot a recommendation about to fix it

#### ChatGpt
I use more this to find information about errors or examples
- `weather/backend_weather/spec/services/save_weather_service_spec.rb` to have an initial structure for the spec file
- In this file `weather/frontend_weather/src/utils/weatherUtils.js` I wrote a suggestion for weather app using reactjs and It recommended to use icons from 'lucide-react'