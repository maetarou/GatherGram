Rails.application.routes.draw do
  devise_for :users
  resources :gathers
end
