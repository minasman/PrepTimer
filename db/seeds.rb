product_list = {
    "american_cheese" => {"name" => "American Cheese", "description" => "Yellow American Cheese", "secondary_shelf_life" => 7200, "area" => "Prep Table"},
    "shredded_lettuce" => {"name" => "Shredded Lettuce", "description" => "Shredded Lettuce", "secondary_shelf_life" => 7200, "area" => "Prep Table"},
    "leaf_lettuce" => {"name" => "Leaf Lettuce", "description" => "Leaf Lettuce", "secondary_shelf_life" => 7200, "area" => "Prep Table"},
    "pickles" => {"name" => "Pickles", "description" => "Sliced Dill Pickles", "secondary_shelf_life" => 86400, "area" => "Prep Table"},
    "slivered_onions" => {"name" => "Slivered Onions", "description" => "Slivered Onions", "secondary_shelf_life" => 14400, "area" => "Prep Table"},
    "dehydrated_onions" => {"name" => "Dehydrated Onions", "description" => "Dehydrated Onions", "secondary_shelf_life" => 7200, "area" => "Prep Table"},
    "roma_tomatoes" => {"name" => "Roma Tomatoes", "description" => "Sliced Roma Tomatoes", "secondary_shelf_life" => 14400, "area" => "Prep Table"},
    "sliced_bacon" => {"name" => "Applewood Bacon", "description" => "Sliced Applewood Smoked Bacon", "secondary_shelf_life" => 14400, "area" => "Prep Table"}
}

product_list.each do |name, product_hash|
    p = Product.create(product_hash)
    p.save
end