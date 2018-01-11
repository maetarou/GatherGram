Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root 'tops#index'
  get 'index', to: 'gather_gram#index'
  get 'ranking', to: 'gather_gram#ranking'
  get 'gather_history', to: 'gather_gram#gather_history'

  get 'users/auth/instagram/callback', to: 'users/omniauth_callbacks#instagram'
  get 'sessions/destroy'
  
  resources :tops, only: :index
  resources :rankings, only: :index

  get '/user', to: 'users#show'
end
