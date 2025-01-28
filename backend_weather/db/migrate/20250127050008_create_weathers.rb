class CreateWeathers < ActiveRecord::Migration[7.2]
  def change
    create_table :weathers do |t|
      t.references :city, null: false, foreign_key: true
      t.float :temp
      t.float :temp_min
      t.float :temp_max
      t.string :unit
      t.string :climatic_condition
      t.datetime :datetime
      t.string :datetime_text

      t.timestamps
    end
  end
end
