json.extract! beer, :id, :name, :style, :abv, :ibus, :description
  if beer.photo.attached?
    json.photoUrl url_for(beer.photo)
  else 
    json.photoUrl ""
  end
