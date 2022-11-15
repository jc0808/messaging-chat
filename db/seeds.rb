# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(firstName: "Mark", lastName: "Morales", username: "mark", password: "mark1")
user2 = User.create(firstName: "Lucy", lastName: "Wright", username: "lucy", password: "lucy1")

chat1 = Chat.create(name:"Chat1", user_id: user1.id)

Message.create(user_id: user2.id, content: "Hi Lucy!", chat_id: chat1.id, sender_id: user1.id )
Message.create(user_id: user1.id, content: "Hi Mark!", chat_id: chat1.id, sender_id: user2.id )
