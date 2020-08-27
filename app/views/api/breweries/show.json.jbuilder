json.brewery do
  json.extract! @brewery, :id, :name, :country, :state, :city, :description
  json.photoUrl url_for(@brewery.photo)
end
json.beers do
  @brewery.beers.each do |beer|
    json.set! beer.id do
      json.partial! 'api/beers/beer', beer: beer
    end
  end
end