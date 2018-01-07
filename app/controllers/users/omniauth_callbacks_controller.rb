class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  CALLBACK_URL = 'http://localhost:3000/users/auth/instagram/callback'
  def instagram
    user = User.find_for_oauth(request.env['omniauth.auth'])
    if user.persisted?
      flash[:notice] = I18n.t('devise.omniauth_callbacks.success')
      session[:access_token] = request.env['omniauth.auth']['credentials']['token']
      sign_in(user, scope: :user)
      redirect_to '/index'
    else
      session['devise_data'] = request.env['omniauth.auth']
      redirect_to root_path
    end
  end
end
