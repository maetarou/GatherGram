class GathergramController < ApplicationController
  include GnaviApi
  def index
    client = Instagram.client(access_token: session[:access_token])

    contents = Array.new
     # 本来なら位置情報を基に適切なメディアを取ってくる(SubmittedMediaModelに書く)
      SubmittedMedia.all.each do |media|
        content = {}
        content[:media] = media
        content[:gnavi] = GnaviApi.get_store(media[:name], media[:latitude].to_s, media[:longitude].to_s)
        contents.push(content)
    end
    response = {}
    response[:contents] = contents
    response[:is_production] = Rails.env.production?
    render json: response
  end
end