class MessagesController < ApplicationController

    def index
        render json: Message.all, status: :ok
    end

    def show
        message = Message.find(params[:id])
        render json: message, status: :ok
    end

    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end

    def destroy
        message = Message.find(params[:id]).destroy
        head :no_content
    end

    def update
        message = Message.find(params[:id])
        message.update!(message_params)
        render json: message, status: :accepted
    end


    private
    
    def message_params
        params.permit(:user_id, :chat_id, :sender_id, :content)
    end


end
