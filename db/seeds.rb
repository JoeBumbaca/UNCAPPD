# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do


  Review.destroy_all
  Beer.destroy_all
  User.destroy_all

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

  joe = User.create(username: "JoeyBoom", password: "hunter123", email: "jboom@gmail.com")
  nico = User.create(username: "nico2017", password: "password", email: "cute1@gmail.com")
  michelle = User.create(username: "MichelleB", password: "password123", email: "mamaB@gmail.com")
  dave = User.create(username: "AnyGivenSunde", password: "beeeeeer", email: "dave@dave.dave")
  danny = User.create(username: "SesinedFries", password: "morebeer", email: "copiers@benicia.com")
  demo = User.create(username: "ipaLover42", password: "hunter12", email: "ipaLover42@gethops.dank")


  one = Review.create(beer_id: fw805.id, reviewer_id: nico.id, rating: 3, body: "Had this while hanging out with some friends.  Easy drinking Ale, goes down smooth.  Subtle hops balance the malt.  Finishes with a touch of honey.")
  two = Review.create(beer_id: celebration.id, reviewer_id: joe.id, rating: 5, body: "I look forward to this beer every year!  One of the best fresh hop beers I have ever had!  One sip and you will be smitten.  Be careful, this one goes down easy.")
  three = Review.create(beer_id: blindpig.id, reviewer_id: michelle.id, rating: 5, body: "Everyone is on that Pliny hype, but this is Russian River's best IPA by far.  Too bad they only let you take a 6 pack.")
  four = Review.create(beer_id: freshsqueezed.id, reviewer_id: dave.id, rating: 4, body: "Deschutes really hit it out of the park with this one.  Hops are definitely in your face, but not astringent.  Love the logo!")
  five = Review.create(beer_id: bmoon.id, reviewer_id: nico.id, rating: 2, body: "This is ok for what it is.  I'd prefer a real Witbier, but slap a slice of orange on the glass and it tastes ok.")
  six = Review.create(beer_id: steamwhistle.id, reviewer_id: michelle.id, rating: 3, body: "Do one thing and do it well!  Generally not a fan of lagers, but this one is alright!  Clean, crisp, and no off flavors.  Plus the brewery is super cool!  Win-win!")
  seven = Review.create(beer_id: kirin.id, reviewer_id: joe.id, rating: 2, body: "Having this at a really good Ramen spot!  Exactly what I needed with this meal, though the beer itself is nothing really special.  But it does help cleanse the pallet in between these bites of amazing food!")
  eight = Review.create(beer_id: spacedust.id, reviewer_id: danny.id, rating: 3, body: "This is ground control to Major Tom . . . This beer is pretty good.   The high alcohol percentage leaves it a little hot for my taste, but not nearly as bad as I thought it would be.")
  nine = Review.create(beer_id: phasechange.id, reviewer_id: joe.id, rating: 5, body: "Lagunitas really comes through with this one.  I get a ton of citrus on the hops, its juicy without losing those signature hop flavors we have come to love on the West Coast.  Beer speaks, people mumble. . . especially after a few of these.")
  ten = Review.create(beer_id: racer5.id, reviewer_id: nico.id, rating: 4, body: "Came back to this after a few years.  I forgot how gentle and floral the hops were.  Why doesn't this beer get more recognition?  Definitely my new standard for IPA!")
  eleven = Review.create(beer_id: duet.id, reviewer_id: dave.id, rating: 4, body: "Alpine is a great brewery and Duet is one of their best in my opinion.  Hops are a little too forward this time around, but maybe it's just me.  I'll have to give it another try and see if they changed the recipe.")
  twelve = Review.create(beer_id: rasputin.id, reviewer_id: michelle.id, rating: 5, body: "Much like it's namesake, this beer with predict your doom if you kill it.  Take it slow and savor the complexity.  Next time I'll have this in November in front of a crackling fire.  Or maybe camping, something about the smoke would pair really well with this one.")
  thirteen = Review.create(beer_id: denogg.id, reviewer_id: nico.id, rating: 4, body: "This is a heavy hitter from Drakes.  Doesn't taste anything like the 9.75% is says it has.  Split this one with a friend, get Denogginized together.")
  fourteen = Review.create(beer_id: lagunitas.id, reviewer_id: danny.id, rating: 4, body: "Still a super solid IPA.  While there have been many changes to the brewery and it's lineup, their IPA has reamained consistent and delicious.  Stays in my top 5 of all time.")
  fifteen = Review.create(beer_id: lupulin.id, reviewer_id: nico.id, rating: 4, body: "Help me Dr!  In truth, you might actually need a doctor after drinking this one.  Why do triple IPAs exist, nobody knows.  They definitely balanced this one right though.  Perfect hop balance for the insane amount of malt required to reach  a beer of this magnitude.  Well done!")
  sixteen = Review.create(beer_id: guinness.id, reviewer_id: joe.id, rating: 3, body: "This beer is definitely not as heavy as people say that it is.  Got the perfect pour from my local barkeep, and this one is settling in nicely.  Not my favorite, or my go to.  But somtimes the velvety mouthfeel of the nitrogen is just what you need.")
  seventeen = Review.create(beer_id: stella.id, reviewer_id: michelle.id, rating: 3, body: "Stellllaaaa!!!  Sorry, I had to.  Simple, solid, ordinary.  Absolutely nothing wrong with this clean, crisp, lager.  I just can't find anything that makes it stand out either.  On to the next one.")
  eighteen = Review.create(beer_id: bigfoot.id, reviewer_id: joe.id, rating: 3, body: "I'll catch you on the flips side.  Sierra does a great job with this barelywine style ale.  Great balance of malt and hop.  I'll have to have this one again soon.  Or maybe grab one to go and age it??")
  nineteen = Review.create(beer_id: coors.id, reviewer_id: dave.id, rating: 2, body: "What is there to say about the American Light Lager?  Not much, enjoy it with friends, on a hot day.  Make sure the mountains are blue!  Crushing the can might be the most enjoyable part of drinking this beer.")
  twenty = Review.create(beer_id: oatis.id, reviewer_id: joe.id, rating: 2, body: "You know what this beer needs. . . vanilla.  Nice mouthfeel, creamy texture, but not my cup of tea.  The malt was a little to roasted for my liking.  Needs a touch of sweetness to balance out the biterness this malt imparts.")
  twentyone = Review.create(beer_id: celebration.id, reviewer_id: michelle.id, rating: 3, body: "Not nearly as good as my friends told me that it was.  Still, solid, and you really can taste that the hops are fresh.  I'm more of a pale ale fan, take that over this any day.")

    

    Beer.all.each_with_index do |beer, idx|
        file = EzDownload.open("https://uncapped-seed.s3-us-west-1.amazonaws.com/beer/0#{idx+1}-beer.jpg")
        beer.photo.attach(io: file, filename: "0#{idx+1}-beer.jpg")
        beer.save!
    end


    Review.all.each_with_index do |review, idx|
      revfile = EzDownload.open("https://uncapped-seed.s3-us-west-1.amazonaws.com/reviews/0#{idx+1}-reviews.jpeg")
      review.photo.attach(io: revfile, filename: "0#{idx+1}-reviews.jpeg")
      review.save!
    end

 end

 