Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  root 'tops#index'

  get 'index', to: 'gathergram#index'

  get 'users/auth/instagram/callback', to: 'users/omniauth_callbacks#instagram'
  get '/user', to: 'users#show'
  get 'user/get_gather', to: 'users#get_gather'
  get 'user/gather_history', to: 'users#gather_history'
  get 'sessions/destroy'

  get 'privacy_policy', to: 'static_pages#privacy_policy'

  resources :tops, only: :index
  resources :rankings, only: :index
end
