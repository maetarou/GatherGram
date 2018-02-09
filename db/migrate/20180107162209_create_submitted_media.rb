class CreateSubmittedMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :submitted_media do |t|
      t.string :media_id
      t.integer :user_id, limit: 8
      t.string :username
      t.string :image_link
      t.string :caption
      t.string :link
      t.integer :place_id, limit: 8
      t.string :name
      t.float :latitude
      t.float :longitude
      t.integer :got_gather

      t.timestamps
    end
    add_index :submitted_media, :user_id
  end
end
