class CreateInvestments < ActiveRecord::Migration[5.1]
  def change
    create_table :investments do |t|
      t.integer :mortgage_type, :default => 30
      t.float :interest_rate
      t.float :mortgage_payment
      t.integer :price, :null => false
      t.integer :down_payment
      t.integer :mortgage_balance
      t.float :apr
      t.integer :months

      t.timestamps
    end
  end
end
