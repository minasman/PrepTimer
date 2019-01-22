class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.integer :secondary_shelf_life
      t.string :area
      t.timestamps
    end
  end
end
