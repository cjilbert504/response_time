class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :commentor, :comment
  has_one :police_department
end
