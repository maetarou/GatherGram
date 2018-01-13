Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root 'tops#index'
  get 'index', to: 'gather_gram#index'
  get 'ranking', to: 'gather_gram#ranking'

  get 'users/auth/instagram/callback', to: 'users/omniauth_callbacks#instagram'
  get '/user', to: 'users#show'
  get 'user/get_gather', to: 'users#get_gather'
  get 'user/gather_history', to: 'users#gather_history'
  get 'sessions/destroy'

  resources :tops, only: :index
  resources :rankings, only: :index
end
