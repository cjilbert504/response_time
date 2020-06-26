class PoliceDepartmentSerializer < ActiveModel::Serializer
  attributes :id, :state, :city, :name, :address, :phone_number
  has_many :reviews
end
