class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render :show
    else 
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.includes(:reviews).find(params[:id])
    render :show
  end

  def index 
    @users = User.all.includes(:reviews)
    render :index
  end

  private

  def user_params 
    params.require(:user).permit(:username, :email, :password)
  end

end
