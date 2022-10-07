class UsersController < ApplicationController
    before_action :require_user, only: [:edit, :update, :destroy]
    before_action :set_user, only: [:show, :edit, :update, :destroy]

    def show
        
    end

    def edit
        
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
        
        
        if @user.update(user_params)
            flash[:notice] = "Update submitted successfully"
            redirect_to user_path(@user)
        else
            render 'edit', status: :unprocessable_entity
        end
        
    end

    def destroy
        
        @user.destroy
        flash[:alert] = "Account has been deleted"
        
    end

    private
    def user_params
        params.require(:user).permit(:name, :email, :password) 
        
    end

    def set_user
        @user = User.find(params[:id])
    end

end