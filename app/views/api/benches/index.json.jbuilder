@benches.each do |bench|
  json.set! bench.id do
    json.extract! bench, :id, :description, :seating, :lat, :long, :image_url
  end
end
