class Api::ReviewsController < ApplicationController

  def create 
    @review = Review.new(review_params)
    @review.reviewer_id = current_user.id
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 418
    end
  end


  def index
    if params[:user]
      @reviews = Review.where(reviewer_id: params[:user])
    else
      @reviews = Review.all
    end

    render :index
  end

  def show 
    @review = Review.find(params[:id])
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:beer_id, :rating, :body, :photo)
  end
  
end
