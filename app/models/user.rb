class User < ApplicationRecord
    has_many :messages
    has_many :chats

    has_secure_password
end
