class Api::BeersController < ApplicationController

  # before_action :require_login

  def create
    @beer = Beer.new(beer_params)
    if @beer.save
      render :show
    else 
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def show
    @beer = Beer.find(params[:id])
  end

  def index
    @beers = Beer.all
    render :index
  end

  def update
    @beer = Beer.find(params[:id])
    if @beer.update_attributes(beer_params)
      render :show
    else 
      render json: @beer.errors.full_messages, status: 422
    end
  end

  def destroy
    @beer = Beer.find(params[:id])
    @beer.destroy
    render :index
  end


  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv, :ibus, :description)
  end

  
end
