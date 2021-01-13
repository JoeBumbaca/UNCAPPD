@breweries.each do |brew|
  json.set! brew.id do
    json.extract! brew, :id, :name, :country, :state, :city, :description
    json.photoUrl url_for(brew.photo)
    json.num_reviews brew.num_reviews
    json.rev_average brew.review_average
  end
end