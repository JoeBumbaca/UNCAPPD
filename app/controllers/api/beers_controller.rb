class Api::BeersController < ApplicationController

  def new

  end

  def create

  end

  def show

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
