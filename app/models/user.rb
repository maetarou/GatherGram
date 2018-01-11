class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :rememberable, :trackable, :omniauthable

  def self.find_for_oauth(auth)
    user = User.where(uid: auth.uid).first

    unless user
      user = User.create(uid: auth[:uid], name: auth[:extra][:raw_info][:username])
    end
    user
  end

  def get_gather(medias)
    if medias.present?
      recent_media_time = medias.first[:created_time].to_i
      shaped_medias = shape_medias(medias)

      got_gather_sum = calculate_gather(shaped_medias)

      self.gather += got_gather_sum
      self.submitted_recent_media_time = recent_media_time
      self.save

      res = {}
      res[:submitted_media_count] = shaped_medias.count
      res[:got_gather] = got_gather_sum
      res
    end
  end

  private
  # 登録されている or placeがない投稿を削除
  def shape_medias(medias)
    medias.delete_if{|media| media[:created_time].to_i <= self.submitted_recent_media_time }
    medias.delete_if{|media| media[:location].nil? }
    medias
  end

  # gather求め, SubmittedMediaに保存
  def calculate_gather(medias)
    got_gather_sum = 0
    medias.each do |media|
      got_gather = 0
      place_count = SubmittedMedia.where(place_id: media[:location][:id]).count
      if place_count < 6
        got_gather = 50 - (place_count * 10)
        got_gather_sum += got_gather
      end
      SubmittedMedia.create(media_id: media[:id], user_id: self.uid, place_id: media[:location][:id] , got_gather: got_gather)
    end
    got_gather_sum
  end
end
