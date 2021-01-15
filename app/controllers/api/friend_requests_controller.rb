class Api::FriendRequestsController < ApplicationController

  def create
    @friend_request = FriendRequest.new(request_params)
    if @friend_request.save
      render json: @friend_request
    else
      render json: ['Something went wrong'], status: 400
    end
  end

  def destroy
    @friend_request = FriendRequest.find(params[:id])
    @friend_request.destroy
    render json: @friend_request
  end

  def request_params
    params.require(:friend_request).permit(:requester_id, :requestee_id)
  end

end
