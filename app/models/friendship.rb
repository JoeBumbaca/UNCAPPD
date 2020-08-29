# == Schema Information
#
# Table name: friendships
#
#  id            :bigint           not null, primary key
#  friend_one_id :integer          not null
#  friend_two_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#
class Friendship < ApplicationRecord
  validates :friend_one_id, :friend_two_id, presence: true
end
