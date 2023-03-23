class User < ApplicationRecord
    validates :name, presence: true, length: {minimum:3, maximum: 20}
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: {minimum:5, maximum: 20}
    
    has_secure_password
    has_many :friend
end