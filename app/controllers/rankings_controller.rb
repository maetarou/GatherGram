class RankingsController < ApplicationController
  def index
    response = {}
    response[:top_users] = User.order('gather DESC').limit(10)
    if user_signed_in?
      users_gather = current_user[:gather]
      response[:user_rank] = User.where(User.arel_table[:gather].gt(users_gather)).count + 1
    end
    render json: response
  end
end
