Rails.application.routes.draw do
  devise_for :users

  root 'gathers#index'

  resources :gathers
end
