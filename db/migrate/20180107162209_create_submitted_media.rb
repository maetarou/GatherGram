class CreateSubmittedMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :submitted_media do |t|
      t.string :media_id
      t.integer :user_id, limit: 8
      t.integer :place_id, limit: 8
      t.integer :got_gather

      t.timestamps
    end
  end
end
