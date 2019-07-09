class Api::ReviewsController < ApplicationController

  def create 
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.full_messages, status 418
    end
  end


  def index 
    @reviews = Review.all
    render :index
  end

  def show 
    @review = Review.find(params[:id])
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:beer_id, :reviewer_id, :rating, :body)
  end
  
end
