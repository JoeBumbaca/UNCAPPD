json.extract! review, :id, :beer_id, :reviewer_id, :rating, :body

json.beer do
  json.set! review.beer.id do
    json.partial! 'api/beers/beer', beer: review.beer
  end
end

json.user do 
  json.set! review.reviewer.id do
    json.partial! 'api/users/user', user: review.reviewer
  end
end

# json.photoUrl url_for(review.photo)