class CreateFriends < ActiveRecord::Migration[7.0]
  def change
    create_table :friends do |t|
      t.string :name
      t.integer :home_number
      t.integer :mobile_number
      t.string :address
      t.string :email
      t.string :birthday


      t.timestamps
    end
  end
end
