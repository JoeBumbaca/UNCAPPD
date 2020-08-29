class CreateFriendships < ActiveRecord::Migration[5.2]
  def change
    create_table :friendships do |t|
      t.integer :friend_one_id, null: false
      t.integer :friend_two_id, null: false
      t.timestamps
    end
  end
end
