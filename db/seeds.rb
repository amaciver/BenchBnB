# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Bench.destroy_all

  Bench.create!(
    description: "Bench 1",
    seating: 2,
    lat: 37.756260,
    long: -122.432459,
    image_url: "https://img.clipartfest.com/c09c1173cce5652dfeca5d3e71739335_wooden-bench-png-clipart-clipart-bench_4000-2312.png"
  )

  Bench.create!(
    description: "Bench 2",
    seating: 4,
    lat: 37.762953,
    long: -122.411258,
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNEPCSUm92hcG79MEyjBz75HZxdYWldZDRjg1q-_pP_XLs9ER1Q"
  )

  Bench.create!(
    description: "Bench 3",
    seating: 6,
    lat: 37.767093,
    long: -122.398308,
    image_url: "http://heren12.com/wp-content/uploads/2016/10/Baxton-Studio-Tamblin-Beige-Linen-Fabric-Upholstered-Grid-Tufting-50-inch-Bench-Upholstered-with-smooth-sofa-and-dark-hard-wood-foot.jpg"
  )

  Bench.create!(
    description: "Bench 4",
    seating: 9,
    lat: 37.777146,
    long: -122.412001,
    image_url: "http://www.winnipeg.ca/publicworks/parksOpenSpace/ParkAreas/Images/Park_Bench.jpg"
  )


end
