class Friend < ApplicationRecord
validates :home_number, uniqueness: true, allow_blank: true
validates :mobile_number, uniqueness: true, allow_blank: true

belongs_to :user
end