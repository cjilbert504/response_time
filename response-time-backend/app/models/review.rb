class Review < ApplicationRecord
  belongs_to :police_department
  validates :commentor, :comment, :police_department_id, presence: true
end
