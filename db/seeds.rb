5.times do
    d = Department.create(
      name: Faker::Commerce.department
    )

10.times do
    i = d.items.create(
    name: Faker::Commerce.product_name,
    description: Faker::FamousLastWords.last_words,
    price: Faker::Commerce.price.to_f,
    )
    end
  end
  
puts "successfully seeded"
