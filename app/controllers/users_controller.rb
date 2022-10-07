class UsersController < ApplicationController

    def show
        @user = User.find(params[:id])
    end

    def edit
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
            redirect_to root_path
        else
            render 'new', status: :unprocessable_entity
        end
        
    end

    def update
        @user = User.find(params[:id])
        
        if @user.update(user_params)
            flash[:notice] = "Update submitted successfully"
            redirect_to user_path(@user)
        else
            render 'edit', status: :unprocessable_entity
        end
        
    end

    def destroy
        
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password) 
        
    end

end