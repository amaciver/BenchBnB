class Api::SessionsController < ApplicationController

  def create
    username, password = params[:user][:username], params[:user][:password]
    @user = User.find_by_credentials(username, password)
    if @user
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ["user not found"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show.json.jbuilder'
    else
      render json: {}, status: 404
    end
  end



end
