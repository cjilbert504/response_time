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
        police_department = PoliceDepartment.find_by(id: params[:review][:police_department_id])
        police_department.reviews.build(review_params)
        police_department.save
        render json: police_department
    end

    private 

    def review_params
        params.require(:review).permit(:comment, :commentor, :police_department)
    end
end
