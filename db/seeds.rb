# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do

  Beer.destroy_all
  User.destroy_all
  Review.destroy_all

  lagunitas = Beer.create(name: "Lagunitas IPA", style: "IPA", abv: 6.2, ibus: 51, description: "A well-rounded, highly drinkable IPA. A bit of Caramel Malt barley provides the richness that mellows out the twang of the hops.")
  fw805 = Beer.create(name: "Firestone Walker 805", style: "Blonde Ale", abv: 4.7, ibus: 20, description: "A light, refreshing blonde ale created for the laid back California lifestyle. Subtle malt sweetness is balanced by a touch of hops
    creating a versatile beer with a clean finish. ")
   celebration = Beer.create(name: "Sierra Nevada Celebration", style: "Fresh Hop Ale", abv: 6.8, ibus: 65, description: "Famous for its citrus and pine aromas, Celebration is bold and intense, featuring Cascade, Centennial and Chinook hops.")
   kirin = Beer.create(name: "Kirin Ichiban", style: "Lager" , abv: 4.9, ibus: 18, description: "Its nose and flavour are super malty and the first sip finished with a lot of corn.")
   bmoon = Beer.create(name: "Blue Moon", style: "Belgian Wit-bier", abv: 5.4, ibus: 9, description: "A refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.")
   phasechange= Beer.create(name: "Lagunitas Phase Change", style: "Wet Hopped Juicy Ale", abv: 7.4, ibus: 60, description: "An unfiltered, wet-hop ale packed full of lupulin-drenched Simcoe, Citra & Mosaic hops.")
   guinness= Beer.create(name: "Guinness Draught", style: "Irish Dry Stout", abv: 4.2, ibus: 45, description: "Unmistakeably GUINNESS, from the first velvet sip to the last, lingering drop. And every deep-dark satisfying mouthful in between.")
   racer5= Beer.create(name: "Bear Republic Racer 5", style: "IPA", abv: 7.5, ibus: 75, description: "This hoppy IPA is a full bodied beer brewed with malted barley, wheat, and crystal malts. The malt base is designed to highlight the unique floral qualities of Columbus and Cascade hops from the Pacific Northwest.")
   bigfoot = Beer.create(name: "Sierra Nevada Bigfoot Ale", style: "Barleywine", abv: 9.6, ibus: 90, description: "A dense, fruity bouquet, an intense flavor palate and a deep reddish-brown color. Its big maltiness is superbly balanced by a wonderfully bittersweet hoppiness.")
   lupulin = Beer.create(name: "Dr. Lulupin", style: "Triple IPA", abv: 11.3, ibus: 133, description: "Somewhat of an anomaly, Doctor Lupulin is brewed with loads of hops but is not too bitter. A high ABV brew that is easy drinking without excessive alcohol heat. Is that mango having a pleasant conversation with dank? Yep.")
   coors = Beer.create(name: "Coors Light", style: "Light American Lager", abv: 4.2, ibus: 10, description: "Refreshing, lager. Perfect when the beer is ice cold and you are in front of the BBQ!")
   stella = Beer.create(name: "Stella Artois", style: "Lager", abv: 5.0, ibus: 24, description: "It is the optimum premium lager, with its full flavour and clean crisp taste.")
   denogg= Beer.create(name: "Drakes Denogginizer", style: "Imperial IPA", abv: 9.75, ibus: 90, description: "Denogginizer is a massive Double IPA that’s sublimely hopped with an over-the-top dosing of dank, sticky, West Coast hops. With just enough malt backbone to keep the big, bold, resinous hop monster in check.")
   oatis = Beer.create(name: "Ninkasi Oatis", style: "Oatmeal Stout", abv: 7.0, ibus: 50, description: "A rich complex Oatmeal Stout with just enough hops to balance the copious quantities of dark roasted malts, and the addition of oatmeal for a creamy smooth drinkability.")
   duet = Beer.create(name: "Alpine Duet", style: "IPA", abv: 7.0, ibus: 45, description: "A West Coast IPA. Single IPA made with Simcoe and Amarillo hops in harmony.")
   spacedust= Beer.create(name: "Elysian Space Dust", style: "IPA", abv: 8.2, ibus: 62, description: "The hopping is pure starglow energy, with Chinook to bitter and late and dry additions of Citra and Amarillo. Space Dust is out of this world!")
   steamwhistle = Beer.create(name: "Steam Whistle", style: "Pilsner", abv: 5.0, ibus: 22, description: "Pouring a medium gold with a fine head, the nose is fragrant with fresh hop aromas; the medium weight palate offers average carbonation with light grainy malt and floral character finishing with a refreshing bitterness.")
   freshsqueezed= Beer.create(name: "Deschutes Fresh Squeezed", style: "IPA", abv: 6.4, ibus: 60, description: "Bond Street Series- this mouthwatering lay delicious IPA gets its flavor from a heavy helping of citra and mosaic hops. Don't worry, no fruit was harmed in the making of this beer.")
   blindpig= Beer.create(name: "Russian River Blind Pig", style: "IPA", abv: 6.1, ibus: 70, description: "Full-bodied, very hoppy, with citrus, pine, fruity notes and a nice dry, bitter finish!")
   rasputin= Beer.create(name: "North Coast Old Rasputin", style: "Russian Imperial Stout", abv: 9.0, ibus: 75, description: "It’s a rich, intense brew with big complex flavors and a warming finish.")

  joe = User.create(username: "JoeBumbaca", password: "hunter123", email: "joebumbaca@gmail.com")
  nico = User.create(username: "nico2017", password: "password", email: "cute1@gmail.com")
  demo = User.create(username: "ipaLover42", password: "hunter12", email: "ipaLover42@getdrunk.tonight")
  michelle = User.create(username: "MichelleB", password: "password123", email: "bellewilber@gmail.com")
  dave = User.create(username: "AnyGivenSunde", password: "beeeeeer", email: "dave@dave.dave")
  danny = User.create(username: "SesinedFries", password: "morebeer", email: "copiers@benicia.com")
    

    Beer.all.each_with_index do |beer, idx|
        file = EzDownload.open("https://uncapped-seed.s3-us-west-1.amazonaws.com/beer/0#{idx+1}-beer.jpg")
        beer.photo.attach(io: file, filename: "0#{idx+1}-beer.jpg")
        beer.save!
    end


 end