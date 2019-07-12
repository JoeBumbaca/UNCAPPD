json.extract! beer, :id, :name, :style, :abv, :ibus, :description

  json.photoUrl url_for(beer.photo)
