class RemoveColumnsFromFriends < ActiveRecord::Migration[7.0]
  def change
    remove_column :friends, :home_number
    remove_column :friends, :mobile_number 
  end
end
