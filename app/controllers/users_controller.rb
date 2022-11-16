class UsersController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: :create
    

    def index
        render json: User.all, status: :ok
    end

    def show
        user = User.find(session[:user_id])
        render json: user, status: :ok
    end


    def create
        user = User.create!(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        end
    end

    private

    def user_params
        params.permit(:firstName, :lastName, :username, :password, :password_confirmation)
    end

end
