class FriendsController < ApplicationController
    before_action :set_friend, only: [:edit, :update, :destroy]
    

    def new
        @friend = Friend.new
            
    end

    def show
            
    end

    def index
        @user = current_user
        @friends = @user.friend.all
    end

    def edit
        
    end

    def create
        @friend = Friend.new(friend_params)
        @friend.user = current_user
        if @friend.save
            flash[:notice] = "You have successfully created a new friend contact"
            redirect_to friends_path
        else
            render 'new', status: :unproccessable_entity
        end
            
    end

    def update
        
        if @friend.update(friend_params)
            flash[:notice] = "You have successfully updated a friend's contact information"
            redirect_to friends_path
        else
            render 'new', status: :unproccessable_entity
        end
    end

    def destroy
        
        @friend.destroy
        flash[:alert] = "Contact information successfully deleted"
        redirect_to friends_path
        
    end

    private
    def friend_params
        params.require(:friend).permit(:name, :home_number, :mobile_number, :address, :email)
        
    end

    def set_friend
        @friend = Friend.find(params[:id])
    end

end