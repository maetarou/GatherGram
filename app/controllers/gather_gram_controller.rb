class GatherGramController < ApplicationController
  CALLBACK_URL = "http://localhost:3000/auth/instagram/callback"
  def index
    @client = Instagram.client(:access_token => session[:access_token])
  end

  def connect
    redirect_to Instagram.authorize_url(:redirect_uri => CALLBACK_URL)
  end

  def callback
    response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
    session[:access_token] = response.access_token
    redirect_to root_path
  end
end