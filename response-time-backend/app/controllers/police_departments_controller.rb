class PoliceDepartmentsController < ApplicationController

    def index 
        police_departments = PoliceDepartment.all 
        render json: police_departments
    end

    def show
        police_department = PoliceDepartment.find_by(id: params[:id])
        render json: police_department
    end

end
