FactoryBot.define do
  factory :city do
    reference_id { 1234 }
    display { FFaker::Address.city }
    state { FFaker::AddressUS.state }
    country { FFaker::Address.country }
    lat { FFaker::Address.latitude.to_s }
    long { FFaker::Address.longitude.to_s }
  end
end
