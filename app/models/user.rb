class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :rememberable, :trackable, :omniauthable

  def self.find_for_oauth(auth)
    user = User.where(uid: auth.uid).first

    unless user
      user = User.create(uid: auth.uid)
    end
    user
  end

  def get_gather(medias)
    if medias.present?
      recent_media_time = medias.first[:created_time].to_i
      self.submitted_recent_media_time = 0
      p self.submitted_recent_media_time
      p "Here is inside of get_gather function!!!"
      medias.delete_if{ |media|
        media[:created_time].to_i <= self.submitted_recent_media_time
        media[:location].nil?
      }
      p medias.count
      medias.each do |media|
        #TODO: got_gather求める,
      end

      self.submitted_recent_media_time = recent_media_time
      self.save
    end
  end
end
