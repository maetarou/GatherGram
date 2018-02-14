class UsersController < ApplicationController
  def show
    render json: User.first
  end

  def get_gather
    client = Instagram.client(access_token: session[:access_token])
    render json: current_user.get_gather(client.user_recent_media)
  end

  def gather_history
    res = SubmittedMedia.where(user_id: current_user[:uid]).order('id DESC').limit(10)
    render json: res
  end
end
