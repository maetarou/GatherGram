class GathergramController < ApplicationController
  include GnaviApi
  def index
    client = Instagram.client(access_token: session[:access_token])

    mediasHash = {}
    mediasHash[:myMedia] = client.user_recent_media
    mediasHash[:kusatarouMedia] = client.user_recent_media(6736563468)

    contents = Array.new
    mediasHash.each do |key, medias|
      medias.each do |media|
        if media[:location].present?
          content = {}
          content[:imageLink] = media[:images][:low_resolution][:url]
          content[:location] = media[:location]
          content[:caption] = media.try(:caption).try(:text)
          content[:link] = media[:link]
          content[:username] = media[:user][:username]
          content[:gnavi] = GnaviApi.get_store(media[:location][:name], media[:location][:latitude].to_s, media[:location][:longitude].to_s)
          contents.push(content)
        end
      end
    end
    response = {}
    response[:contents] = contents
    response[:is_production] = Rails.env.production?
    render json: response
  end
end