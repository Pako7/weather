class CreateWeathers < ActiveRecord::Migration[7.2]
  def change
    create_table :weathers do |t|
      t.references :city, null: false, foreign_key: true
      t.float :temperature
      t.float :temperature_min
      t.float :temperature_max
      t.string :climatic_condition
      t.date :date

      t.timestamps
    end
  end
end
