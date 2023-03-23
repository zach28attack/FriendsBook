class Friend < ApplicationRecord
validates :name, uniqueness: true, presence: true, length: {minimum:3, maximum:20}
belongs_to :user
end