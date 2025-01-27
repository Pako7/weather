class City < ApplicationRecord
  has_many :weathers

  validates :reference_id, presence: true
  validates :display, presence: true
  validates :state, presence: true
  validates :country, presence: true
  validates :lat, presence: true
  validates :long, presence: true
end
