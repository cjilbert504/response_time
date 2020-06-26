# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
PoliceDepartment.create([
    {state: "Alabama", city: "Montgomery", name: "Montgomery Police Department", address: "320 N Ripley St", phone_number: "334-241-2651"},
    {state: "Alaska", city: "Juneau", name: "Juneau Police Department", address: "6255 Alaway Ave", phone_number: "907-586-0600"},
    {state: "Arizona", city: "Phoenix", name: "Phoenix Police Department", address: "620 W Washington St", phone_number: "602-262-6151"},
    {state: "California", city: "Sacramento", name: "Sacramento Police Department", address: "5303 Franklin Blvd", phone_number: "916-264-5471"},
    {state: "Colorado", city: "Denver", name: "Denver Police Department", address: "1331 Cherokee St", phone_number: "720-913-1311"},
    {state: "Connecticut", city: "Hartford", name: "Hartford Police Department", address: "253 High St", phone_number: "860-757-4000"},
    {state: "Delaware", city: "Dover", name: "Dover Police Department", address: "400 S Queen St", phone_number: "302-736-7111"},
    {state: "Florida", city: "Tallahassee", name: "Tallahassee Police Department", address: "234 E 7th Ave", phone_number: "850-891-4200"},
    {state: "Georgia", city: "Atlanta", name: "Atlanta Police Department", address: "215 Lakewood Way SW", phone_number: "404-546-6900"},
    {state: "Hawaii", city: "Honolulu", name: "Honolulu Police Department", address: "215 801 S Beretania St", phone_number: "808-529-3111"},
    {state: "Louisiana", city: "New Orleans", name: "New Orleans Police Department", address: "715 S Broad St Ste 501", phone_number: "504-826-2727"},
    {state: "Louisiana", city: "Baton Rouge", name: "Baton Rouge Police Department", address: "704 Mayflower St", phone_number: "225-389-3802"}
])