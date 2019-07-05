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

  def edit

  end

  def update

  end

  def destroy

  end


  private

  def beer_params
    params.require(:beer).permit(:name, :style, :abv, :ibus, :description)
  end

  
end
