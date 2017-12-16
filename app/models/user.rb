class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable

  def self.find_for_oauth(auth)
    user = User.find(auth.uid)

    unless user
      user = User.create(
          uid:      auth.uid,
          # provider: auth.provider,
          # email:    User.dummy_email(auth),
          # password: Devise.friendly_token[0, 20]
      )
    end

    user
  end
end
