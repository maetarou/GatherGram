Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root 'gather_gram#tmp'
  get 'index', to: 'gather_gram#index'

  get 'users/auth/instagram/callback', to: 'users/omniauth_callbacks#instagram'
  get 'sessions/destroy'
  
  resources :tops, only: :index
  resources :rankings, only: :index
end
