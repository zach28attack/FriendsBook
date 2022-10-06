class RemoveColumnFromFriends < ActiveRecord::Migration[7.0]
  def change
    remove_column :friends, :birthday
  end
end
