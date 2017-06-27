class CreateGathersUsersRelations < ActiveRecord::Migration[5.1]
  def change
    create_table :gathers_users_relations do |t|
      t.references :gather, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
