class Gather < ApplicationRecord
  has_many :gathers_users_relation, dependent: :destroy
  has_many :users :through => :gathers_users_relation
end
