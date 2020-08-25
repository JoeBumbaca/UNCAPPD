@breweries.each do |brew|
  json.set! brew.id do
    json.extract! brew, :id, :name, :country, :state, :city, :description
  end
end