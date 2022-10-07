class SessionsController < ApplicationController

    def new
    end

    def create
        user = User.find_by(email: params[:session][:email])
        if user && user.authenticate(params[:session][:password])
            session[:user_id] = user.id
            flash.now[:notice] = "You have successfully signed up!"
            redirect_to root_path
        else
            render 'new', status: :unprocessable_entity
            flash[:alert] = "There was a problem with your log in credentials"
        end
    end
    
    def destroy
        session[:user_id] = nil
        flash[:alert] = "You have logged out"
        redirect_to root_path   
    end
end