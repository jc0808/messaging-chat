class MessageSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :content, :sender_id, :created_at
end
