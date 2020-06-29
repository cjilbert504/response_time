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
        review = police_department.reviews.last
        render json: police_department.save ? police_department : {message: review.errors.messages[:invalid]}
    end

    private 

    def review_params
        params.require(:review).permit(:comment, :commentor, :police_department)
    end
end
