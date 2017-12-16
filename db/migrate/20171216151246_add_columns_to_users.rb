class AddColumnsToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :uid, :string
    add_column :users, :gather, :string
    add_column :users, :int, :string
  end
end
