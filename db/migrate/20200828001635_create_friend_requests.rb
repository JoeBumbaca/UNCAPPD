class CreateFriendRequests < ActiveRecord::Migration[5.2]
  def change
    create_table :friend_requests do |t|
      t.integer :requester_id, null: false
      t.integer :requestee_id, null: false
      t.timestamps
    end
  end
end
