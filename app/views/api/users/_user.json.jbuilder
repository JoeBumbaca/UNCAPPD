
  json.extract! user, :id, :username, :review_ids


  # json.reviews do
  #     user.reviews.each do |review|
  #       json.set! review.id do 
  #         json.extract! review, :id, :beer_id, :reviewer_id, :rating, :body
  #       end 
  #     end
  # end