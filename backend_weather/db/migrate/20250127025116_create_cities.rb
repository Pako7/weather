class CreateCities < ActiveRecord::Migration[7.2]
  def change
    create_table :cities do |t|
      t.integer :reference_id
      t.string :display
      t.string :state
      t.string :country
      t.string :lat
      t.string :long

      t.timestamps
    end
  end
end
