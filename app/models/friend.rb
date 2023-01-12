class Friend < ApplicationRecord
validates :home_number, uniqueness: true
validates :mobile_number, uniqueness: true

belongs_to :user
end