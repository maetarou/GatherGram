class GatherGramController < ApplicationController
  CALLBACK_URL = 'http://localhost:3000/auth/instagram/callback'
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
          contents.push(content)
        end
      end
    end
    contents.push(current_user)
    render json: contents
  end
  def tmp
    # 確認用(消す)
  end
end