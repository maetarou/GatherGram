class GatherGramController < ApplicationController
  include GnaviApi
  CALLBACK_URL = 'http://localhost:3000/auth/instagram/callback'
  def index
    client = Instagram.client(access_token: '6675270868.a15464f.1a7d6cdef6c24e4ba7fd5087bf8345e5')

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

  def ranking
    response = {}
    response[:top_users] = User.order('gather DESC').limit(10)
    if user_signed_in?
      users_gather = User.first[:gather]
      response[:user_rank] = User.where(User.arel_table[:gather].gt(users_gather)).count + 1
    end
    render json: response
  end
end
