class Api::ItemsController < ApplicationController
  before_action :set_department, only: [:show, :index, :create]
  before_action :set_items, only: [:show, :update, :destroy]
    
  def index
    render json: @department.items.all
  end

  def show
    render json: @department.item
  end

  def create
    item = @department.items.new(item_params)
    if item.save
      render json: item
    else
      render json: item.errors
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors
    end
  end

  def destroy
    @item.destroy
    render json: {message: "Item deleted"}
  end

  private
  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end

  def item_params
    params.require(:item).permit(:name, :description, :price)
  end
end