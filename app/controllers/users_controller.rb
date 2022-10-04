class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
    end

    def new
        
    
    end

    def index
        @users = User.all
    end

    def create
        
    end

    def update
        
    end

    def destroy
        
    end

end