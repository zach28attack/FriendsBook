class AddColumnsToFriends < ActiveRecord::Migration[7.0]
  def change
    add_column :friends, :home_number, :string
    add_column :friends, :mobile_number, :string
    
  end
end
