class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :uid, :string, null: false
    add_column :users, :gather, :integer, null: false, default: 0
  end
end
