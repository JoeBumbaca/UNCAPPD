json.extract! beer, :id, :name, :style, :abv, :ibus, :description, :brewery_id
json.beer_rating beer.beer_rating
json.brewery beer.brewery.name
  if beer.photo.attached?
    json.photoUrl url_for(beer.photo)
  else 
    json.photoUrl ""
  end
