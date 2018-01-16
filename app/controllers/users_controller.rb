class UsersController < ApplicationController
  def show
    render json: User.first
  end

  def get_gather
    client = Instagram.client(access_token: '6675270868.a15464f.1a7d6cdef6c24e4ba7fd5087bf8345e5')
    render json: User.first.get_gather(client.user_recent_media)
  end

  def gather_history
    res = SubmittedMedia.where(user_id: current_user[:uid]).order('id DESC').limit(10)
    render json: res
  end
end
