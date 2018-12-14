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

5.times do
    i.reviews.create(
      title: Faker::HarryPotter.spell,
      body: Faker::Hobbit.quote,
      rating: Faker::Number.between(1, 5),
      author: Faker::Twitter.screen_name
    )
      end
    end
  end
  
puts "successfully seeded"