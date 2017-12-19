class RankingsController < ApplicationController
  def index
    render json: { data: [] }
  end
end
