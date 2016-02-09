class AddContacts < ActiveRecord::Migration
  def change
    create_table "contacts", force: true do |t|
      t.string "firstname"
      t.string "lastname"
      t.string "email"
    end
  end
end
