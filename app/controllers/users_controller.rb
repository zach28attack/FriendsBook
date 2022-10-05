class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
    end

    def new
        @user = User.new
        
    
    end

    def index
        @users = User.all
    end

    def create
        @user = User.new(user_params)
        if @user.save
            flash[:notice] = "You have successfully created an account"
        else
            render 'new'
        end
        
    end

    def update
        
    end

    def destroy
        
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password_digest, :number) 
        
    end

end