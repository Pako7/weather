FROM ruby:3.2.2
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client
WORKDIR /backend_weather
COPY Gemfile* ./
RUN bundle install
COPY . .
CMD ["rails", "server", "-b", "0.0.0.0"]
