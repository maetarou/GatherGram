Rails.application.routes.draw do
  root 'gather_gram#connect'

  get 'index', to: 'gather_gram#index'

  # instagram routes
  get 'auth/instagram/connect', to: 'gather_gram#connect'
  get 'auth/instagram/callback', to: 'gather_gram#callback'

end
