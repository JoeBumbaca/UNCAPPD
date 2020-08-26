# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  
  
  Brewery.destroy_all
  Beer.destroy_all
  Review.destroy_all
  User.destroy_all
  
  lag = Brewery.create(name: 'Lagunitas', country: 'USA', state: 'CA', city: 'Petaluma', description: 'Beer, we have learned, has always been a good lubricant for social intercourse! The Lagunitas Brewing Co. was not so much an act of ordinary ‘foundling’ as it was willed into being by the unspoken desire of supportive beer-lovers in Northern California after which they continued to nurture their creation and urged us forward to fulfill the unifying needs of that same beer-loving diaspora from coast to coast and beyond. It is good to have friends!')
  
  fw = Brewery.create(name: 'Firestone Walker', country: 'USA', state: 'CA', city: 'Paso Robles', description: 'Firestone Walker’s main brewery in Paso Robles produces a diverse portfolio ranging from iconic pale ales to vintage barrel-aged beers. The Barrelworks facility in Buellton makes eccentric wild ales, while the Propagator pilot brewhouse in Venice specializes in R&D beers and limited local offerings.')
  
  sierra = Brewery.create(name: 'Sierra Nevada', country: 'USA', state: 'CA', city: 'Chico', description: 'In 1980, Ken Grossman built a small brewery in the city of Chico, California. To this day, premium ingredients and time-honored brewing techniques make Sierra Nevada ales and lagers truly exceptional beers.')
  kirinBrew = Brewery.create(name: 'Kirin', country: 'Japan', state: 'Kanagawa', city: 'Yokohama', description: 'Home of the fabulous Kirin Ichiban beer!')
  blueM = Brewery.create(name: 'Blue Moon', country: 'USA', state: 'CO', city: 'Denver', description: 'We craft our beers with flavorful ingredients and wheat for an inviting taste and a smooth finish that are perfect for enjoying the moment with friends. Blue Moon® Belgian White Belgian-style wheat ale was the first beer we ever made at The SandLot Brewery® in Denver, Colorado, and it continues to be our most popular beer.')
  guin = Brewery.create(name: 'Guiness', country: 'Ireland', state: 'Leinster', city: "St. James' Gate", description: 'The Guinness® brand enjoys a global reputation as a uniquely authentic beer and the best-selling stout in the world. Famous for its dark color, creamy head and unique surge and settle, this distinctive beer originated at the St. James’s Gate brewery in Dublin, Ireland. Over 10 million glasses of Guinness beer are enjoyed every single day around the world, and 1.8 billion pints are sold every year.')
  bRepub = Brewery.create(name: 'Bear Republic', country: 'USA', state: 'CA', city: 'Rohnert Park', description: 'Bear Republic beers are brewed and aged following our time tested and proven methods. We hand select only the choicest ingredients for each batch. The specialty grains and hops used by Bear Republic have been chosen for their unique characteristics.')
  revision = Brewery.create(name: 'Revision', country: 'USA', state: 'NV', city: 'Sparks', description: 'Revision Brewing Company was formed in August of 2015 when Jeremy Warren, Founder and Brewmaster of Knee Deep Brewing Company chose to pursue a new avenue of creativity and excellence in craft beer. Revision Brewing Company opened in March 2017 in Sparks, Nevada.')
  coorsBrew = Brewery.create(name: 'Coors', country: 'USA', state: 'CO', city: 'Golden', description: 'Coors Brewing Company was established by German beer brewer Adolph Coors. In late 1870s, Adolph migrated to America with a goal to establish fine, excellent beer brewery. In his search for excellent quality of water for his beers, Adolph ended up in Rocky Mountains of Golden, Colorado.')
  stellaBrew = Brewery.create(name: 'Stella Artois', country: 'Belgium', state: 'Vlaanderen', city: 'Leuven', description: 'Stella!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  drake = Brewery.create(name: "Drake's", country: 'USA', state: 'CA', city: 'San Leandro', description: 'Drake’s Brewing Company is an urban craft brewery operating in San Leandro, California since 1989. Drake’s brewers have set the standard for West Coast Style ales with their unflinching dedication to brewing clean, high-quality, innovative, and often unapologetically hoppy beers.')
  ninkasi = Brewery.create(name: "Ninkasi", country: 'USA', state: 'OR', city: 'Eugene', description: 'Today, Ninkasi Brewing Company is dedicated to brewing the highest quality craft beers in support of culture, community, and the uniqueness of each individual and their passions—while evoking as much enjoyment as possible along the way! ')
  alpine = Brewery.create(name: 'Alpine', country: 'USA', state: 'CA', city: 'Alpine', description: 'Alpine Beer Company was established in 1999 and continues to emphasize quality and diversity. We strive to provide you with enjoyable beers and rib tickling barbecue. You can enhance your drinking and dining experience at our expanded Pub, located 1347 Tavern Rd, Alpine, CA 91901. Drink Alpine or go to bed!')
  steamWhist = Brewery.create(name: 'Steam Whistle', country: 'Canada', state: 'Ontario', city: 'Toronto', description: 'Brewing the best lager in the coolest train depot!')
  deschutes = Brewery.create(name: 'Deschutes', country: 'USA', state: 'OR', city: 'Bend', description: 'Deschutes Brewery was founded in 1988 as a brew pub in Bend, Oregon. Family and employee-owned, the brewery is known for brewing a diverse line-up of award winning beers including the popular Black Butte Porter, Mirror Pond Pale Ale, and Fresh Squeezed IPA. From the beginning, the focus has been on crafting the best beer and food using only the finest ingredients.')
  russianRiver = Brewery.create(name: 'Russian River', country: 'USA', state: 'CA', city: 'Santa Rosa', description: 'The history of Russian River Brewing Company would be incomplete without a little background on the people who own it, operate it, and are passionate about their brewery and craft beer in general!')
  northCoast = Brewery.create(name: 'North Coast', country: 'USA', state: 'CA', city: 'Fort Bragg', description: 'A pioneer in the Craft Beer movement, North Coast Brewing Company opened in 1988 as a local brewpub in the historic town of Fort Bragg, located on California’s Mendocino Coast. Under the leadership of Brewmaster Mark Ruedrich, the brewery has developed a strong reputation for quality having won more than 70 awards in national and international competitions.')
  elysian = Brewery.create(name: 'Elysian', country: 'USA', state: 'WA', city: 'Seattle', description: 'Known for variety, Elysian has brewed over 350 craft beers since it opened on Capitol Hill in 1996.')
  

  lagunitas = Beer.create(name: "IPA", style: "IPA", abv: 6.2, ibus: 51, description: "A well-rounded, highly drinkable IPA. A bit of Caramel Malt barley provides the richness that mellows out the twang of the hops.", brewery_id: lag.id)
  fw805 = Beer.create(name: "Firestone Walker 805", style: "Blonde Ale", abv: 4.7, ibus: 20, description: "A light, refreshing blonde ale created for the laid back California lifestyle. Subtle malt sweetness is balanced by a touch of hops creating a versatile beer with a clean finish.", brewery_id: fw.id)
  celebration = Beer.create(name: "Sierra Nevada Celebration", style: "Fresh Hop Ale", abv: 6.8, ibus: 65, description: "Famous for its citrus and pine aromas, Celebration is bold and intense, featuring Cascade, Centennial and Chinook hops.", brewery_id: sierra.id)
  kirin = Beer.create(name: "Kirin Ichiban", style: "Lager" , abv: 4.9, ibus: 18, description: "Its nose and flavour are super malty and the first sip finished with a lot of corn.", brewery_id: kirinBrew.id)
  bmoon = Beer.create(name: "Blue Moon", style: "Belgian Wit-bier", abv: 5.4, ibus: 9, description: "A refreshing, medium-bodied, unfiltered Belgian-style wheat ale spiced with fresh coriander and orange peel for a uniquely complex taste and an uncommonly smooth finish.", brewery_id: blueM.id)
  phasechange= Beer.create(name: "Phase Change", style: "Wet Hopped Juicy Ale", abv: 7.4, ibus: 60, description: "An unfiltered, wet-hop ale packed full of lupulin-drenched Simcoe, Citra & Mosaic hops.", brewery_id: lag.id)
  guinness= Beer.create(name: "Guinness Draught", style: "Irish Dry Stout", abv: 4.2, ibus: 45, description: "Unmistakeably GUINNESS, from the first velvet sip to the last, lingering drop. And every deep-dark satisfying mouthful in between.", brewery_id: guin.id)
  racer5= Beer.create(name: "Racer 5", style: "IPA", abv: 7.5, ibus: 75, description: "This hoppy IPA is a full bodied beer brewed with malted barley, wheat, and crystal malts. The malt base is designed to highlight the unique floral qualities of Columbus and Cascade hops from the Pacific Northwest.", brewery_id: bRepub.id)
  bigfoot = Beer.create(name: "Sierra Nevada Bigfoot Ale", style: "Barleywine", abv: 9.6, ibus: 90, description: "A dense, fruity bouquet, an intense flavor palate and a deep reddish-brown color. Its big maltiness is superbly balanced by a wonderfully bittersweet hoppiness.", brewery_id: sierra.id)
  lupulin = Beer.create(name: "Dr. Lulupin", style: "Triple IPA", abv: 11.3, ibus: 133, description: "Somewhat of an anomaly, Doctor Lupulin is brewed with loads of hops but is not too bitter. A high ABV brew that is easy drinking without excessive alcohol heat. Is that mango having a pleasant conversation with dank? Yep.", brewery_id: revision.id)
  coors = Beer.create(name: "Coors Light", style: "Light American Lager", abv: 4.2, ibus: 10, description: "Refreshing, lager. Perfect when the beer is ice cold and you are in front of the BBQ!", brewery_id: coorsBrew.id)
  stella = Beer.create(name: "Stella Artois", style: "Lager", abv: 5.0, ibus: 24, description: "It is the optimum premium lager, with its full flavour and clean crisp taste.", brewery_id: stellaBrew.id)
  denogg= Beer.create(name: "Denogginizer", style: "Imperial IPA", abv: 9.75, ibus: 90, description: "Denogginizer is a massive Double IPA that’s sublimely hopped with an over-the-top dosing of dank, sticky, West Coast hops. With just enough malt backbone to keep the big, bold, resinous hop monster in check.", brewery_id: drake.id)
  oatis = Beer.create(name: "Oatis", style: "Oatmeal Stout", abv: 7.0, ibus: 50, description: "A rich complex Oatmeal Stout with just enough hops to balance the copious quantities of dark roasted malts, and the addition of oatmeal for a creamy smooth drinkability.", brewery_id: ninkasi.id)
  duet = Beer.create(name: "Duet", style: "IPA", abv: 7.0, ibus: 45, description: "A West Coast IPA. Single IPA made with Simcoe and Amarillo hops in harmony.", brewery_id: alpine.id)
  spacedust= Beer.create(name: "Space Dust", style: "IPA", abv: 8.2, ibus: 62, description: "The hopping is pure starglow energy, with Chinook to bitter and late and dry additions of Citra and Amarillo. Space Dust is out of this world!", brewery_id: elysian.id )
  steamwhistle = Beer.create(name: "Steam Whistle", style: "Pilsner", abv: 5.0, ibus: 22, description: "Pouring a medium gold with a fine head, the nose is fragrant with fresh hop aromas; the medium weight palate offers average carbonation with light grainy malt and floral character finishing with a refreshing bitterness.", brewery_id: steamWhist.id)
  freshsqueezed= Beer.create(name: "Fresh Squeezed", style: "IPA", abv: 6.4, ibus: 60, description: "Bond Street Series- this mouthwatering lay delicious IPA gets its flavor from a heavy helping of citra and mosaic hops. Don't worry, no fruit was harmed in the making of this beer.", brewery_id: deschutes.id)
  blindpig= Beer.create(name: "Blind Pig", style: "IPA", abv: 6.1, ibus: 70, description: "Full-bodied, very hoppy, with citrus, pine, fruity notes and a nice dry, bitter finish!", brewery_id: russianRiver.id)
  rasputin= Beer.create(name: "North Coast Old Rasputin", style: "Russian Imperial Stout", abv: 9.0, ibus: 75, description: "It’s a rich, intense brew with big complex flavors and a warming finish.", brewery_id: northCoast.id)

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

    Brewery.all.each_with_index do |brewery, idx|
      file = EzDownload.open("https://uncapped-seed.s3-us-west-1.amazonaws.com/breweries/0#{idx+1}-brewery.jpg")
      brewery.photo.attach(io: file, filename: "0#{idx+1}-brewery.jpg")
    end

    Beer.all.each_with_index do |beer, idx|
        file = EzDownload.open("https://uncapped-seed.s3-us-west-1.amazonaws.com/beer/0#{idx+1}-beer.jpg")
        beer.photo.attach(io: file, filename: "0#{idx+1}-beer.jpg")
    end


    Review.all.each_with_index do |review, idx|
      revfile = EzDownload.open("https://uncapped-seed.s3-us-west-1.amazonaws.com/reviews/0#{idx+1}-reviews.jpeg")
      review.photo.attach(io: revfile, filename: "0#{idx+1}-reviews.jpeg")
    end

 end

 