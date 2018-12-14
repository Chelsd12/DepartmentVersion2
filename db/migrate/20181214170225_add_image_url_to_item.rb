class AddImageUrlToItem < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :image_url, :text
  end
end
