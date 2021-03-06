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

ActiveRecord::Schema.define(version: 20180114025844) do

  create_table "submitted_media", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.string "media_id", limit: 100
    t.bigint "user_id"
    t.string "username"
    t.string "image_link"
    t.string "caption"
    t.string "link"
    t.bigint "place_id"
    t.string "name"
    t.float "latitude", limit: 24
    t.float "longitude", limit: 24
    t.integer "got_gather"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["media_id"], name: "index_submitted_media_on_media_id"
    t.index ["user_id"], name: "index_submitted_media_on_user_id"
  end

  create_table "users", force: :cascade, options: "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4" do |t|
    t.bigint "uid", null: false
    t.integer "gather", default: 0, null: false
    t.datetime "remember_created_at"
    t.string "remember_token"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "submitted_recent_media_time", default: 0
    t.string "name"
    t.string "profile_image"
    t.index ["uid"], name: "index_users_on_uid"
  end

end
