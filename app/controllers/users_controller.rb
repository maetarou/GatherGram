class UsersController < ApplicationController
  def show
    render json: User.first
  end

  def get_gather
    client = Instagram.client(access_token: session[:access_token])
    render json: User.first.get_gather(client.user_recent_media)
  end

  def gather_history
    res = SubmittedMedia.where(user_id: User.first[:uid]).order('id DESC').limit(10)
    render json: res
  end
end
