# == Schema Information
#
# Table name: reviews
#
#  id          :bigint           not null, primary key
#  beer_id     :integer          not null
#  reviewer_id :integer          not null
#  rating      :integer          not null
#  body        :text             not null
#

class Review < ApplicationRecord

  validates :beer_id, :reviewer_id, :rating, :body, presence: true

  # has_one_attached :photo



belongs_to :reviewer,
foreign_key: :reviewer_id,
class_name: :User

belongs_to :beer,
  foreign_key: :beer_id,
  class_name: :Beer

end