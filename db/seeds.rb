require 'faker'

Contact.delete_all

10.times do
  Contact.create!(
    firstname: Faker::Name.first_name,
    lastname: Faker::Name.last_name,
    email: Faker::Internet.safe_email
    )
end
