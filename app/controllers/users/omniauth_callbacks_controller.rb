class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  CALLBACK_URL = 'http://localhost:3000/users/auth/instagram/callback'
  def instagram
    @user = User.find_for_oauth(request.env['omniauth.auth'])
    if @user.persisted?
      flash[:notice] = I18n.t('devise.omniauth_callbacks.success')
      access_token = request.env['omniauth.auth']['credentials']['token']
      session[:access_token] = access_token
      sign_in(@user, scope: :user)
      client = Instagram.client(access_token: access_token)
      @user.get_gather(client.user_recent_media)
      redirect_to '/index'
    else
      session['devise_data'] = request.env['omniauth.auth']
      redirect_to root_path
    end
  end
end
