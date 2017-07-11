class User < ApplicationRecord
  has_many :gathers_users_relation, dependent: :destroy
  has_many :gathers, through: :gathers_users_relation

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
