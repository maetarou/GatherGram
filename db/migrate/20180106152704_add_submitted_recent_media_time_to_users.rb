class AddSubmittedRecentMediaTimeToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :submitted_recent_media_time, :integer, default:0
  end
end
