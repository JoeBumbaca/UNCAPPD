class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :beer_id, null: false
      t.integer :reviewer_id, null: false
      t.integer :rating, null: false
      t.text :body, null: false
    end

    add_index :reviews, :beer_id
    add_index :reviews, :reviewer_id
  end
end
