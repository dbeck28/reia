class CreateReportMonths < ActiveRecord::Migration[5.1]
  def change
    create_table :report_months do |t|
      t.integer :month
      t.float :month_beginning_bal
      t.float :interest_payment
      t.float :principal_payment
      t.float :month_end_bal
      t.float :extra_principal_payment
      t.integer :investment_id

      t.timestamps
    end
  end
end
