json.extract! product, :id, :name, :description, :secondary_shelf_life, :area
json.url product_url(product, format: :json)
