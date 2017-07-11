class User < ApplicationRecord
  has_many :gathers_users_relation, dependent: :destroy
  has_many :gathers :through => :gathers_users_relation

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
