# == Schema Information
#
# Table name: beers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  style       :string           not null
#  abv         :float            not null
#  ibus        :integer          not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  brewery_id  :integer          not null
#

class Beer < ApplicationRecord

  validates :name, :style, :abv, :ibus, :description, presence: true
  validates :name, uniqueness: true

  has_one_attached :photo

  belongs_to :brewery,
    foreign_key: :brewery_id,
    class_name: :Brewery

  has_many :reviews,
  foreign_key: :beer_id,
  class_name: :Review

end
