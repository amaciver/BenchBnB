class AddColumnsBenches < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :seating, :integer
    add_column :benches, :image_url, :text
  end
end
