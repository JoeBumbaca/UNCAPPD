# == Schema Information
#
# Table name: breweries
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  country     :string           not null
#  state       :string           not null
#  city        :string           not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Brewery < ApplicationRecord

  validates :name, :country, :state, :city, :description, presence: true

  has_one_attached :photo

  has_many :beers,
    foreign_key: :brewery_id,
    class_name: :Beer

  def num_reviews
    Review.where(beer_id: self.beers).length
  end

  def review_average
    reviews = Review.where(beer_id: self.beers)
    if reviews.length == 0
      return 'N/A'
    end
    total = 0;
    reviews.each do |review|
      total += review.rating 
    end

    (total / (reviews.length * 1.0)).round(2)
  end
  
end
