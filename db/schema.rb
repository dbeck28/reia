# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171214032951) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "investments", force: :cascade do |t|
    t.integer "mortgage_type", default: 30
    t.float "interest_rate"
    t.float "mortgage_payment"
    t.integer "price", null: false
    t.integer "down_payment"
    t.integer "mortgage_balance"
    t.float "apr"
    t.integer "months"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "report_months", force: :cascade do |t|
    t.integer "month"
    t.float "month_beginning_bal"
    t.float "interest_payment"
    t.float "principal_payment"
    t.float "month_end_bal"
    t.float "extra_principal_payment"
    t.integer "investment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
