class ChatsController < ApplicationController

    def index 
        render json: Chat.all, status: :ok
    end

    def show
        chat = Chat.find(params[:id])
        render json: chat, status: :ok
    end
end
