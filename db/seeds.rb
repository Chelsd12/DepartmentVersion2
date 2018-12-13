5.times do
    d = Department.create(
      name: Faker::Commerce.department,
      description: Faker::Friends.quote
    )

10.times do
    i = d.items.create(
    name: Faker::Commerce.product_name,
    description: Faker::FamousLastWords.last_words,
    price: Faker::Commerce.price.to_f,
    image: Faker::Avatar.image("my-own-slug", "50x50", "jpg")
    )
    end
  end
  
puts "successfully seeded"