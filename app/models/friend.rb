class Friend < ApplicationRecord
belongs_to :user
validates :home_number, uniqueness: true
validates :mobile_number, uniqueness: true
end