class Chat < ApplicationRecord
    has_many :messages
    has_many :users, through: :messages

    def send_message(user, string)
        Message.create(user_id: user.id, sender_id: self.user.id, content: string, chat_id: self.id)
    end
    
    
end
