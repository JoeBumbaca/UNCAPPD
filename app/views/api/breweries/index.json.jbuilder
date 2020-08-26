@breweries.each do |brew|
  json.set! brew.id do
    json.extract! brew, :id, :name, :country, :state, :city, :description
    json.photoUrl url_for(brew.photo)
  end
end