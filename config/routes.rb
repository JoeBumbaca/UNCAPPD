Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index]
    resources :breweries, only: [:index, :show]
    resources :beers
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:create, :index, :show]
    resources :friend_requests, only: [:create, :destroy]
    resources :friendships, only: [:create, :destroy]
  end

  root to:"static_pages#root"
  
end
