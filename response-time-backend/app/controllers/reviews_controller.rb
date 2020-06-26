class ReviewsController < ApplicationController

    def index 
        reviews = Review.all 
        render json: reviews 
    end

    def show 
        review = Review.find_by(id: paras[:id])
        render json: review
    end

    def create
        police_department = PoliceDepartment.find_by(id: params[:police_department_id])
        police_department.reviews.build(commentor: params[:commentor], comment: params[:comment])
        police_department.save
        render json: police_department
    end
end
