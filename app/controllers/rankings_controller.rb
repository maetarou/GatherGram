class RankingsController < ApplicationController
  def index
    users = User.order('gather DESC').limit(10)
    render json: users
  end
end
