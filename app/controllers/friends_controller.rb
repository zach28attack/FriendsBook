class FriendsController < ApplicationController

    def new
        @friend = Friend.new
            
    end

    def show
            
    end

    def index
        @friends = Friend.all 
    end

    def edit
        @friend = Friend.find(params[:id])
        
    end

    def create
        @friend = Friend.new(friend_params)
        if @friend.save
            flash[:notice] = "You have successfully created a new friend contact"
            redirect_to friends_path
        else
            render 'new', status: :unproccessable_entity
        end
            
    end

    def update
        @friend = Friend.find(params[:id])
        if @friend.update(friend_params)
            flash[:notice] = "You have successfully updated a friend's contact information"
            redirect_to friends_path
        else
            render 'new', status: :unproccessable_entity
        end
    end

    def destroy
            
    end

    private
    def friend_params
        params.require(:friend).permit(:name, :home_number, :mobile_number, :address, :email, :birthday)
        
    end
end