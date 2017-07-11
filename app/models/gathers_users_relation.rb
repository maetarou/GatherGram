class GathersUsersRelation < ApplicationRecord
  belongs_to :user
  belongs_to :gather
end
