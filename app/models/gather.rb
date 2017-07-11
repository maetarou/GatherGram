class Gather < ApplicationRecord
  has_many :gathers_users_relation, dependent: :destroy
  has_many :users, through: :gathers_users_relation

  validates :name, presence: true, length: { maximum: 10 }
  validates :description, presence: true, length: { maximum: 140 }
end
