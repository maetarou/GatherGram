class SessionsController < ApplicationController
  def destroy
    sign_out :user
    session[:access_token] = nil
    redirect_to root_path
  end
end
