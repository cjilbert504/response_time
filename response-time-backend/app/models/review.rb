class Review < ApplicationRecord
  belongs_to :police_department
  validates :commentor, :comment, :police_department_id, presence: true
  validate do
    review_valid?
  end

  private

  def review_valid?
    if self.commentor == "" || self.comment == ""
      self.errors.add(:invalid, "One or more fields was left blank!")
    end
  end

end

        
