export interface Review {
  id: string;
  guest: string;
  reply?: Reply;
  message: string;
  date: string;
}

export type Reply = Pick<Review, 'message' | 'date' | 'id'>;

export const reviews: Review[] = [
  {
    id: '0',
    date: 'January 2023',
    guest: 'Guest',
    message:
      'This spot was lovely, clean, and central to lots Lancaster has to offer. A short jaunt to a lovely park for walking or running. This host really stood out in terms of communication - every question was answered before we even knew we had it, the policies and procedures were all clearly outlined and the unit provided everything we needed for our stay. Thank you for a great visit!!',
  },
  {
    id: '2',
    date: 'January 2023',
    guest: 'Guest',
    message:
      'Our stay was just what we needed. Pictures are accurate. Area is quiet and peaceful. I would love to stay again in needed.',
    reply: {
      id: '4-reply',
      message: 'Wonderful, you are welcome any time!',
      date: 'January 2023',
    },
  },
  {
    id: '5',
    date: 'January 2023',
    guest: 'Guest',
    message:
      'The house was so nice and clean exactly how pictured. The hosts responded super quick and were very helpful. Great stay! Would recommend.',
    reply: {
      id: '7-reply',
      message: 'Thank you for recommending us! Appreciate that.',
      date: 'January 2023',
    },
  },
  {
    id: '8',
    date: 'January 2023',
    guest: 'Guest',
    message:
      'What a wonderful stay! The place was clean and well kept and [Host] was very great at communication!',
    reply: {
      id: '10-reply',
      message: 'Nice to know you had a wonderful stay, [Guest]!',
      date: 'January 2023',
    },
  },
  {
    id: '11',
    date: 'January 2023',
    guest: 'Guest',
    message:
      "Overall it was a fine stay. The neighbors were quite noisy with their music, and we found the floors not completely clean. The beds were comfortable, nice towels, and enough lighting. Found it difficult to use the bathroom sink, and the windows didn't seem fully sealed (we could hear the traffic).",
    reply: {
      id: '13-reply',
      message: 'Appreciate this [Guest]! We are pleased to have you.',
      date: 'January 2023',
    },
  },
  {
    id: '14',
    date: 'January 2023',
    guest: 'Guest',
    message:
      'This is a peaceful area. A wonderful park nearby. Walking distance to the downtown of Lancaster.  Nice place.  I  feel like I was home. A 3 bedrooms apartment  just for me.  The price was affordable. I  will recommend this place to anyone.  Thanks',
    reply: {
      id: '16-reply',
      message: 'Wow, thank you [Guest]. Visit us again soon!',
      date: 'January 2023',
    },
  },
  {
    id: '17',
    date: 'December 2022',
    guest: 'Guest',
    message:
      "This place may be good for adults not for children.The door to the basement is sliding. It was really easy to slide and located in the living room.My 2-year-old fell from stairs where there was no handrail that she could reach. She had to go through elbow surgery. This trip became a nightmare for our family. You cannot turn on the heater more than 72 degrees. I felt colder and the comforters were very thin.I didn't feel the neighborhood was safe, not well-maintained.I could smell pee in the shower. I felt like the house was partly clean. The table in the kitchen was not cleaned. I do not recommend this place.",
  },
  {
    id: '19',
    date: 'December 2022',
    guest: 'Guest',
    message: 'Very beautiful place. My family enjoyed every minute.',
    reply: {
      id: '21-reply',
      message: 'We would love to have you again soon!',
      date: 'December 2022',
    },
  },
  {
    id: '22',
    date: 'December 2022',
    guest: 'Guest',
    message:
      'Great place to stay! A little expensive but the house is as pictured and the host is very intentional with their rules. I appreciated the clear communication.',
  },
  {
    id: '24',
    date: 'December 2022',
    guest: 'Guest',
    message: 'Great stay, accommodating host.',
  },
  {
    id: '26',
    date: 'November 2022',
    guest: 'Guest',
    message:
      '[Host] was very accommodating & understanding. he was a great host. The place was spacious, clean & beautiful. my family & I enjoyed our stay. will most definitely stay here again. I highly recommend it.',
  },
  {
    id: '28',
    date: 'November 2022',
    guest: 'Guest',
    message: 'Cozy and clean. Would stay again.',
  },
  {
    id: '30',
    date: 'November 2022',
    guest: 'Guest',
    message:
      'Very easy to communicate with host and they accommodated our extra requests like early check in (for an additional fee). Nice extra touches with the complimentary snacks and coffee.',
  },
  {
    id: '32',
    date: 'November 2022',
    guest: 'Guest',
    message: 'It was great!',
  },
  {
    id: '34',
    date: 'November 2022',
    guest: 'Guest',
    message:
      'This place was convenient to downtown and sight and sound theater, clean and as expected based on pictures, but was in row housing, which didn’t matter to our group, but may for you. There is a $200 deposit with MANY rules that you have to sign an additional contract for. Also, we did have to pay to check in only an hour earlier and the code was provided was incorrect. [Host] did correct this error relatively quickly. There was limited parking, however, this was warned about in the listing. Overall decent stay!',
  },
  {
    id: '36',
    date: 'October 2022',
    guest: 'Guest',
    message:
      'This townhome was very comfortable and convenient.  It had a nice living room area with plenty of seating, a full sized dining room table and a fully equipped kitchen.  There are 2 bedrooms on the second floor plus the bathroom and the upstairs has 2 beds.  There were 4 of us and we were all very comfortable.   We felt safe (it was 4 women) and, as [Host] mentioned, when we checked in we parked right in front of the unit but after our night out we had to park at the end of the block, but it was a very short walk.   The communication from the host is fantastic, including specific instructions on check in and check out.  We would definitely stay with this host again!',
  },
  {
    id: '38',
    date: 'October 2022',
    guest: 'Guest',
    message: 'Place is comfy and clean!',
  },
  {
    id: '40',
    date: 'October 2022',
    guest: 'Guest',
    message:
      'This was a lovely place to stay. We enjoyed our time in Lancaster very much!!',
  },
  {
    id: '42',
    date: 'September 2022',
    guest: 'Guest',
    message: 'Very nice stay, clean and walking proximity to the main center',
  },
  {
    id: '44',
    date: 'September 2022',
    guest: 'Guest',
    message: 'Nice place to stayLots of good accommodations',
  },
  {
    id: '46',
    date: 'September 2022',
    guest: 'Guest',
    message: 'Comfortable place for a small group!',
  },
  {
    id: '48',
    date: 'September 2022',
    guest: 'Guest',
    message: 'Great stay',
  },
  {
    id: '50',
    date: 'September 2022',
    guest: 'Guest',
    message:
      'Place is gorgeous, clean, and has plenty of beds. We loved that there were towels set out for everyone, and also toiletries in the bathroom. Excellent price as well. We walked into town, and at the end of the night ubered home. Feel like we found a gem in Lancaster!',
  },
  {
    id: '52',
    date: 'September 2022',
    guest: 'Guest',
    message:
      'Cozy place, easy access. Street parking only but didn’t cause an issue for us. Overall, it was an easy stay for 1 night!',
  },
  {
    id: '54',
    date: 'September 2022',
    guest: 'Guest',
    message:
      'Good: communication from the host was immediate, descriptive, and kind. The decor and furnishings were astonishingly beautiful.Bad: the place had a wet, musty scent every floor so I had trouble breathing. The neighborhood was unbelievably loud, playing music until midnight. Very loud drivers passing by, and heavy party.',
  },
  {
    id: '56',
    date: 'September 2022',
    guest: 'Guest',
    message:
      'Cute little place. Enough space to accommodate all 9 of us. Only one bathroom but luckily it wasn’t ever an issue for us. The biggest downside to this rental are the neighbors. They play very loud music. They didn’t stop til 2am when we stayed. The floor on the first floor was pretty dirty. I was walking in bare feet and my feet were black. I also cleaned up spilled water with a paper towel and afterwards turned it over and the paper towel was black with dirt.They had all the amenities (conditioner, shampoo, towels, coffee, creamer, sheets) which were a great touch and the couch was extremely comfy.It was a good price that was able to accommodate all of us.',
  },
  {
    id: '58',
    date: 'August 2022',
    guest: 'Guest',
    message:
      'Beautiful home 🏡 my kids enojes it. It feels like home and it’s clean. Has everything you need in a home.',
  },
  {
    id: '60',
    date: 'August 2022',
    guest: 'Guest',
    message:
      'Fun neighborhood, gorgeous place, amazing experience! Thank you so much!',
  },
  {
    id: '62',
    date: 'August 2022',
    guest: 'Guest',
    message:
      "[Host]'s place was the last leg of our road trip. We were able to find parking on the street, and the inside of the home is lovely. There were extra air mattresses, and it was close to the Sight and Sound Theater which was our final attraction for the last leg of our trip.",
  },
  {
    id: '64',
    date: 'August 2022',
    guest: 'Guest',
    message: 'This was a great place to relax for the night! Loved the vibes',
  },
  {
    id: '66',
    date: 'August 2022',
    guest: 'Guest',
    message: 'Excellent',
  },
  {
    id: '68',
    date: 'August 2022',
    guest: 'Guest',
    message:
      "I've been struggling with the right words to say for this review. First off the inside of the row house was beautifully redone. The courtyard out back was gorgeous and would have been nice to enjoy it in the evenings expect the neighborhood is very loud. Most people in the neighborhood were hanging out either on their front stoops or in the back alley with music playing very loud. We were told by one of the neighbors that the handicap parking is only for the residents of that street, even though we had a window tag.",
  },
  {
    id: '70',
    date: 'August 2022',
    guest: 'Guest',
    message: 'Nice value and lots of room for guests!',
  },
  {
    id: '72',
    date: 'July 2022',
    guest: 'Guest',
    message:
      'Very clean inside and great place overall! Kitchen could use some better cooking ware, other than that great stay!',
  },
  {
    id: '74',
    date: 'July 2022',
    guest: 'Guest',
    message: 'Convenient location! Adorable garden!',
  },
  {
    id: '76',
    date: 'July 2022',
    guest: 'Guest',
    message: 'It was a great stay! Very nice house!',
  },
  {
    id: '78',
    date: 'July 2022',
    guest: 'Guest',
    message:
      'This was a great place to stay with plenty of space for multiple guests! [Host] was great in his communication leading up to and throughout our stay. The hosts did a great job in making this home comfortable and had obviously done work to update the homes features. I loved the bathroom sink!! It is less than 10 minutes from downtown Lancaster which was perfect. I would recommend this to anyone looking for an affordable place to stay in Lancaster!',
  },
  {
    id: '80',
    date: 'July 2022',
    guest: 'Guest',
    message:
      'Great spacious place with a nice private backyard. Great location within walking distance of downtown. Highly recommend!',
  },
  {
    id: '82',
    date: 'July 2022',
    guest: 'Guest',
    message:
      'This rental is super charming and had everything you could possibly need from hair dryer to extra blankets, shaving cream/razors, coffee k cups, creamer and sugar. The unit was extremely clean…I was amazed how spotless it was. We only stayed for 1 night but we felt right at home inside the unit. Communication from the owner was great and he responded promptly within minutes when I couldn’t work the ac unit. Prior to my check in, I received loads of information and answers to any question that I may have. Only downfall to this rental is the location. It is a very dumpy neighborhood and we felt very uncomfortable parking a block or two away and walking up to the rental with our luggage. There were lots of neighbors outside staring at us and we felt very out of place. While I can not attest to the actual safety and crime of the neighborhood, I can say that we did not feel safe being outside. This would be a 5 star rental, but I had to take off a star for the neighborhood.',
  },
  {
    id: '84',
    date: 'July 2022',
    guest: 'Guest',
    message:
      'This apartment is great for small families. The two bedrooms on the second level sate great for two couples. The upstairs bedroom is good for children or singles. (If they don’t mind walking to the top and sleeping alone) The neighborhood was pretty quiet during our one night stay. It’s an urban area and houses are adjoining. The owner added little touches to the apartment that made it very quaint and pleasurable during our stay. There were magazines, games, light snacks, and toiletries in the bathroom. We had one issue with the AC which we communicated with the owner. The owner seems very reasonable and will respond quickly to any issues any other renters would have as he did in our case.',
  },
  {
    id: '86',
    date: 'June 2022',
    guest: 'Guest',
    message: 'Very nice and fit what we needed',
  },
  {
    id: '88',
    date: 'June 2022',
    guest: 'Guest',
    message:
      'Very nice house. Plenty of room for everyone. We would love to stay again! Thank you!',
    reply: {
      id: '90-reply',
      message:
        'Awesome feedback. Thank you. It will help our future guests to decide. :)',
      date: 'June 2022',
    },
  },
  {
    id: '91',
    date: 'June 2022',
    guest: 'Guest',
    message:
      'The location was great and the interior is really cute. Nice backyard and plenty of room for 9of us(5 teens, 3 adults, 1 child). However, the housekeeper that they hired did not do their job. It might not be the host but they need to manage their housekeeper well to maintain their place up to their description of the place.',
    reply: {
      id: '93-reply',
      message:
        'I am very very sorry [Guest]. What can we do to make this right?',
      date: 'June 2022',
    },
  },
  {
    id: '94',
    date: 'June 2022',
    guest: 'Guest',
    message:
      'Ever looking for a house rental this is a choice… includes quiet neighborhood, clean house, laundry,  plenty of supplies for kitchen and etc . 10/10 RECOMMENDED',
  },
  {
    id: '96',
    date: 'June 2022',
    guest: 'Guest',
    message:
      'This place is very clean and cute - a great place to stay! Hosts very communicative and accommodating. Will be back!',
    reply: {
      id: '98-reply',
      message:
        'You guys are always welcome to come back anytime. :) Thank you!',
      date: 'June 2022',
    },
  },
  {
    id: '99',
    date: 'June 2022',
    guest: 'Guest',
    message:
      'Great host, the place was clean and cute, kids wanted stay longer, definitely recommended !',
    reply: {
      id: '101-reply',
      message:
        'Thank you so much for the feedback! :) We hope we can host you again.',
      date: 'June 2022',
    },
  },
  {
    id: '102',
    date: 'June 2022',
    guest: 'Guest',
    message:
      "Great time and value. Was here for a week for a visit with 3 others and it just worked. Items provided help with cleaning, cooking and other various tasks. All in all I really don't have any complaints. Thoroughly enjoyed it.",
  },
  {
    id: '104',
    date: 'May 2022',
    guest: 'Guest',
    message: 'The house is very clean and the neighbor is quite good value',
    reply: {
      id: '106-reply',
      message: 'Thank you! Hope you can visit us again.',
      date: 'May 2022',
    },
  },
  {
    id: '107',
    date: 'May 2022',
    guest: 'Guest',
    message:
      'Super clean house everything that was needed was provided and the check in and check out super simple definitely would stay at this property again if in the area.',
    reply: {
      id: '109-reply',
      message: 'Thank you! My pleasure hosting you guys!',
      date: 'May 2022',
    },
  },
  {
    id: '110',
    date: 'May 2022',
    guest: 'Guest',
    message:
      'this place is great, clean, comfortable and cozy!! I will definitely come back!!',
    reply: {
      id: '112-reply',
      message: "Can't wait to have you again. :) Thank you so much!",
      date: 'May 2022',
    },
  },
  {
    id: '113',
    date: 'May 2022',
    guest: 'Guest',
    message: 'Great location and house! Clean and nice!',
    reply: {
      id: '115-reply',
      message:
        'Thank you so much for staying with us. Wish you can visit us again soon.',
      date: 'May 2022',
    },
  },
  {
    id: '116',
    date: 'May 2022',
    guest: 'Guest',
    message:
      'Lovely home in beautiful Lancaster. Fantastic accommodations right near amazing restaurants and shops. We would definitely stay here again.',
  },
  {
    id: '118',
    date: 'May 2022',
    guest: 'Guest',
    message: 'Great place! Fun inner city base.',
  },
  {
    id: '120',
    date: 'April 2022',
    guest: 'Guest',
    message: 'Great value.',
  },
  {
    id: '122',
    date: 'April 2022',
    guest: 'Guest',
    message:
      'We visited this quaint neighborhood in the city of Lancaster just for the day with close family friends of ours. It was cozy, clean and family friendly. I would definitely stay here again!',
  },
  {
    id: '124',
    date: 'April 2022',
    guest: 'Guest',
    message: 'It was clean and comfortable my family had a great time',
  },
  {
    id: '126',
    date: 'April 2022',
    guest: 'Guest',
    message:
      'Nice place to stay, my guests really enjoyed it. Quiet, pretty decent area with very comfortable furniture. We would recommend it for anyone!',
  },
  {
    id: '128',
    date: 'April 2022',
    guest: 'Guest',
    message:
      'Our trip was just for one night which prevented us from exploring Lancaster city. Our children really enjoyed the accommodations.',
  },
  {
    id: '130',
    date: 'April 2022',
    guest: 'Guest',
    message:
      'The house was very clean and décor nice. But I  recommend you get a specific agreement that there will be beds for your amount of guests. [Host] went to great lengths to explain to me, that the amount of guests he advertises for, is not  the amount of sleeping space he provides. I will give him credit, he did give a small discount.',
  },
  {
    id: '132',
    date: 'March 2022',
    guest: 'Guest',
    message: 'Great place to stay at. Me and my family had a lot of fun',
    reply: {
      id: '134-reply',
      message:
        'We are happy to know you had a great time at our place. You are welcome to comeback anytime.',
      date: 'April 2022',
    },
  },
  {
    id: '135',
    date: 'March 2022',
    guest: 'Guest',
    message:
      'Clean and neat place to stay. Didn’t have any problems parking. Only a short drive to downtown Lancaster. Comfortable beds and pillows.',
    reply: {
      id: '137-reply',
      message:
        'Thank you so much for staying with us! You are welcome to comeback anytime!',
      date: 'April 2022',
    },
  },
  {
    id: '138',
    date: 'March 2022',
    guest: 'Guest',
    message:
      'Cute place in the heart of Lancaster. We would  love to come back in the summer and enjoy the patio.',
    reply: {
      id: '140-reply',
      message:
        'Thank you so much for staying with us! You are welcome to comeback anytime!',
      date: 'April 2022',
    },
  },
  {
    id: '141',
    date: 'March 2022',
    guest: 'Guest',
    message:
      'We had a great stay at [Host]’s place. It was clean and comfortable, and had everything we needed. Hosts were quick with communication and very helpful. Would definitely recommend!',
    reply: {
      id: '143-reply',
      message:
        'Thank you so much for staying with us! You are welcome to comeback anytime!',
      date: 'April 2022',
    },
  },
  {
    id: '144',
    date: 'February 2022',
    guest: 'Guest',
    message: 'Great place to stay, my family had a great time',
    reply: {
      id: '146-reply',
      message:
        'Thank you for staying with u!You are welcome to come back anytime!',
      date: 'March 2022',
    },
  },
  {
    id: '147',
    date: 'February 2022',
    guest: 'Guest',
    message:
      '[Host]’s house was great! Very clean, comfy beds & nice extras such as bath toiletries & such. The only downfall was location. While it is in the city, you are not able to walk to restaurants, coffee shops & such. The area is not “kid friendly” when it comes to safety & walking around at night. Other than that it was a great stay! Thanks again!',
    reply: {
      id: '149-reply',
      message:
        "Thank you for staying with us [Guest], sorry about the safety issues,  if it makes it better, we haven't had any reported cases with guests though.  We look forward to hosting you again soon! Stay Safe!",
      date: 'March 2022',
    },
  },
  {
    id: '150',
    date: 'February 2022',
    guest: 'Guest',
    message:
      'The Airbnb was amazing. From good communication, excellent location, and cute aesthetics this place had it all. We came in only for a weekend, but the place was perfect for what we needed!',
    reply: {
      id: '152-reply',
      message:
        'Thank you for staying with us! Looking forward to hosting you again soon! Stay Safe!',
      date: 'March 2022',
    },
  },
  {
    id: '153',
    date: 'February 2022',
    guest: 'Guest',
    message:
      'Very nice place, located not far from plenty of places. Owner of property is nice, responds in timely manner if you have any questions.',
    reply: {
      id: '155-reply',
      message:
        'We appreciate you staying with us! Let us know when you are in the area, we would love to love to have you back! Stay Safe!',
      date: 'March 2022',
    },
  },
  {
    id: '156',
    date: 'February 2022',
    guest: 'Guest',
    message:
      'Great spot tucked in very close to Lancaster attractions. The place was just as described - and very clean and cozy. Hosts were great with communication and very friendly. Would definitely recommend!',
    reply: {
      id: '158-reply',
      message:
        'Thank you for staying with us! Looking forward to hosting you again soon! Stay Safe!',
      date: 'February 2022',
    },
  },
  {
    id: '159',
    date: 'February 2022',
    guest: 'Guest',
    message: 'The process was easy.  The stay was amazing.',
    reply: {
      id: '161-reply',
      message: 'Looking forward to hosting you again soon! Stay Safe!',
      date: 'February 2022',
    },
  },
  {
    id: '162',
    date: 'February 2022',
    guest: 'Guest',
    message:
      '[Host] is a thorough and detail oriented host and it showed in the quality furnishing of the home, and his kind and professional communication. Great layout, good Lancaster City location, all the needed appliances and supplies. Great outdoor space in the backyard. Parking wasn’t bad either!',
    reply: {
      id: '164-reply',
      message:
        'Thank you for staying with us! Looking forward to hosting you again soon! Stay Safe!',
      date: 'February 2022',
    },
  },
  {
    id: '165',
    date: 'January 2022',
    guest: 'Guest',
    message:
      "It's a comfortable, well-appointed spot on a fairly quiet street. A nice place to spend a couple of days. We were disappointed that we arrived 15 minutes early and couldn't get inside yet. I was told there was a $20 fee for every hour you wish to enter prior to check-in.  It was 12 degrees outside. We sat in the car for 15 minutes waiting for the door code to work as the clock struck 4pm.",
    reply: {
      id: '167-reply',
      message:
        "I am so sorry [Guest], our doors are synched to the check-in time. And the charge for an early check-in is because we need to pay for the cleaners to expedite the cleaning. We'd love to have you again, come back anytime!",
      date: 'February 2022',
    },
  },
  {
    id: '168',
    date: 'January 2022',
    guest: 'Guest',
    message:
      'The [Name] House is just such an amazing spot to stay! We were able to comfortably sleep 5 and with plenty of room to spare! Definitely coming back next time around!',
    reply: {
      id: '170-reply',
      message:
        'Thank you for staying with us! You are welcome to comeback anytime.',
      date: 'February 2022',
    },
  },
  {
    id: '171',
    date: 'January 2022',
    guest: 'Guest',
    message:
      'The location, the space provided, the parking the bedroom kitchen living room and laundry room were beyond our expectations! Absolutely beautiful all around! Stayed with my husband, our daughter & her family. Beautiful peaceful and homey. We look forward to renting from [Host] again.',
  },
  {
    id: '173',
    date: 'January 2022',
    guest: 'Guest',
    message:
      'Our stay was great, they were always very quick with responding and had very thorough check in/check out details. We had a lovely time and were very comfortable there. Would definitely stay again!',
  },
  {
    id: '175',
    date: 'December 2021',
    guest: 'Guest',
    message:
      'thats a really lovely and cozy place it made our trip unforgettable everything was perfect and even better then described! would defiantly come again!',
  },
  {
    id: '177',
    date: 'December 2021',
    guest: 'Guest',
    message:
      '[Host] always exceeds my expectations,  expect a very ckean and comfortable space for you and yiur family....',
  },
  {
    id: '179',
    date: 'December 2021',
    guest: 'Guest',
    message:
      'Inside was very nice & hosts were great. However, not in the best neighborhood by any means.',
  },
  {
    id: '181',
    date: 'December 2021',
    guest: 'Guest',
    message:
      'My family and I had a great experience the house is very smart and clean. everything organized . We really enjoyed that lovely home. Thank you so much for your hospitality communication and caring God bless you all merry Christmas',
  },
  {
    id: '183',
    date: 'December 2021',
    guest: 'Guest',
    message:
      'Everything was awesome, the house was exactly what we needed and [Host] was a cool and supportive host and very easy to work with! Hope we can stay again!',
    reply: {
      id: '185-reply',
      message: 'Thank you so much for your feedback. We enjoyed hosting you.',
      date: 'December 2021',
    },
  },
  {
    id: '186',
    date: 'December 2021',
    guest: 'Guest',
    message:
      'if youare stayingin Lancaster, pickthis place! excellent experience!',
  },
  {
    id: '188',
    date: 'December 2021',
    guest: 'Guest',
    message: 'Great place and location! The hosts had great communication.',
  },
  {
    id: '190',
    date: 'December 2021',
    guest: 'Guest',
    message: 'Great host communication.  Nice home and convenient location.',
  },
  {
    id: '192',
    date: 'November 2021',
    guest: 'Guest',
    message:
      'This was our families first time at an Air BNB. There was a lot of worry doing so over Thanksgiving where a traditional feast was expected by all. The property worked out perfect for the family all the rooms were great to relax in. The kitchen big enough and stocked well so we could make dinner and have our daughter who lives in PA over to enjoy on the large table. We 💯 recommend this property to anyone needing a nice place to stay. I saw other reviews with concern over the neighborhood and parking we did not have any issues with either.',
  },
  {
    id: '194',
    date: 'November 2021',
    guest: 'Guest',
    message: 'Enjoyed our stay!',
  },
  {
    id: '196',
    date: 'November 2021',
    guest: 'Guest',
    message:
      'Perfect place to stay for our group. The only thing is there is only one bathroom in House otherwise everything was perfect',
  },
  {
    id: '198',
    date: 'November 2021',
    guest: 'Guest',
    message:
      'We had a wonderful stay ! It was perfect for my family as we went to the Sight & Sound Theatre , it was about 15 mins away . Communication was great , their home was very clean & accommodating. Would definitely stay agian !',
  },
  {
    id: '200',
    date: 'November 2021',
    guest: 'Guest',
    message:
      'We stayed one night and it was great ! place was clean and tidy! 👌👍',
  },
  {
    id: '202',
    date: 'November 2021',
    guest: 'Guest',
    message: 'Great place to stay in Lancaster! Everything was clean and neat.',
  },
  {
    id: '204',
    date: 'October 2021',
    guest: 'Guest',
    message:
      'Host is great! Check in and check out are super easy and communication with him was a breeze. Home was wonderful and location was great. Parking can be a bit tricky after business hours but usually something is available within a minute or two walk.',
  },
  {
    id: '206',
    date: 'October 2021',
    guest: 'Guest',
    message:
      'Such a cute place! Something that would make it a little better would be to freshen it up. Some pillows and towels and the floor could’ve used another wash/wipe down. We had everything we needed though with toiletries and plenty of other amenities. Check in was smooth. There’s a book for guests which brings a little more life to the place 😊 [Host] provided all the information we needed for our stay. I absolutely love the uniqueness of every home in that area. The Central Lancaster Market was lovely and nice that it was close by.',
  },
  {
    id: '208',
    date: 'October 2021',
    guest: 'Guest',
    message:
      "I travel alot and I tend to rent with Airbnb hosts. I have to the Kingsley family had the best communication I've experienced with Airbnb hosts. They're home was warm,cozy and inviting and I would refer them to anyone looking to stay at a five star residence with five star service! Thank you again and God Bless!!!",
  },
  {
    id: '210',
    date: 'October 2021',
    guest: 'Guest',
    message: 'The house Was nice.',
  },
  {
    id: '212',
    date: 'October 2021',
    guest: 'Guest',
    message: 'Great place, great neighbors.  Everything it says it is 👊',
  },
  {
    id: '214',
    date: 'October 2021',
    guest: 'Guest',
    message:
      'The house itself is very nice and is as pictured. [Host] is incredibly attentive to messages and tries to help as he can. As others have mentioned, charged extra for flexibility of getting into the house early, and then forgot to adjust the lock to let us in at predetermined time. Neighborhood does get a bit loud with cars throughout the night but nothing too bad. Also, the house doesn’t haven’t central air and the window units were taken out a bit too soon (tough decision but still not an enjoyable sleep in an 80 degree house.) Clean up kind of asked for a lot but nothing ridiculous. Overall it was a fine stay that could’ve been improved with some better attention to detail and understanding from host.',
    reply: {
      id: '216-reply',
      message:
        'Hi [Guest], thank you for the great review. We noted of your suggestions, this is much appreciated. Till your next visit!',
      date: 'October 2021',
    },
  },
  {
    id: '217',
    date: 'October 2021',
    guest: 'Guest',
    message:
      'Beautiful Airbnb and great communication by [Host].Pros: Beautiful and clean Airbnb, fast responses by the hosts, close to hotspots in Lancaster. Cons: not a great neighborhood, loud music that can be heard in block behind. House rules are a little stricter than usual, but manageable. Overall had a good stay.',
    reply: {
      id: '219-reply',
      message:
        'Thank you for taking the time to leave us with a great compliment. We appreciate you. Looking forward for your next stay!',
      date: 'October 2021',
    },
  },
  {
    id: '220',
    date: 'October 2021',
    guest: 'Guest',
    message:
      'I love the Airbnb everything was lovely I would recommend [Host] to anyone.. Me and my family felt like we was home away from home.. Great host',
    reply: {
      id: '222-reply',
      message:
        'Thank you so much for the wonderful review, [Guest]. We are happy that you are comfortable and at home with your stay with us. Looking forward to more visits!',
      date: 'October 2021',
    },
  },
  {
    id: '223',
    date: 'September 2021',
    guest: 'Guest',
    message:
      'Perfect family get away. In the middle of everything! Had a great weekend. 3 generations all had fun!',
    reply: {
      id: '225-reply',
      message:
        'Wow! Thank you so much for all the wonderful review, [Guest]. We are so happy that you had fun staying with us. You have been a gem of a guest. Thank you for the kind words, this is much appreciated. We look forward for your next visit.',
      date: 'October 2021',
    },
  },
  {
    id: '226',
    date: 'September 2021',
    guest: 'Guest',
    message:
      'Good space , beautiful back yard fenced  in.  Beds are comfy easy to find, parking can be tricky on a Saturday night but host very helpful and provides lots of amenities in the home.',
    reply: {
      id: '228-reply',
      message:
        'Thank you so much for all the positive the feedback, [Guest]. We are happy that we were able to provide a comfortable and beautiful place for your visit. Visit us again soon!',
      date: 'September 2021',
    },
  },
  {
    id: '229',
    date: 'September 2021',
    guest: 'Guest',
    message:
      'First of all, the location of this Airbnb is not great. When we reached the airbnb, neighbors stared us like we were aliens while playing loud music which sacred some members of our family. We were also locked out for sometime outside our place in the middle of night and it was scary.However, the house itself was very beautiful and cozy inside. It had all the amenities and we enjoyed our stay.',
  },
  {
    id: '231',
    date: 'September 2021',
    guest: 'Guest',
    message:
      '[Host] was so helpful. The place was clean, great location, and comfy beds!',
    reply: {
      id: '233-reply',
      message:
        "Hi Natalie, I love this straight forward review. Thank you so much! We always work for guests' comfort and happiness. Till your next visit.",
      date: 'September 2021',
    },
  },
  {
    id: '234',
    date: 'September 2021',
    guest: 'Guest',
    message:
      'Great Airbnb! The location is in a less nice part of Lancaster but you wouldn’t notice based on how the Airbnb looked. Very clean and a nice outdoor patio. Me and my friends stayed there after a wedding and it was perfect. [Host] was a great communicator and made the process go so smooth. A good place if you are looking for an Airbnb that fits a bigger group of people!',
    reply: {
      id: '236-reply',
      message:
        'Hi [Guest],  Wow! Thank you so much for all the positive the feedback. We are happy that we were able to provide a clean and beautiful place for your visit. Visit us again soon!',
      date: 'September 2021',
    },
  },
  {
    id: '237',
    date: 'September 2021',
    guest: 'Guest',
    message:
      'It was a great spot!  Well kept,  clean,  cozy, and right by downtown.',
    reply: {
      id: '239-reply',
      message:
        'Simple, direct and we love it. Thank you so much, [Guest]! Thanks for staying with us. Till your next visit!',
      date: 'September 2021',
    },
  },
  {
    id: '240',
    date: 'September 2021',
    guest: 'Guest',
    message:
      'Very cozy and comfortable place, it has everything you need. The owner has very good communication all the time.',
  },
  {
    id: '242',
    date: 'August 2021',
    guest: 'Guest',
    message:
      'City realness.  Gentrified but not too much.  Loved the family vibe of this neighborhood.',
  },
  {
    id: '244',
    date: 'August 2021',
    guest: 'Guest',
    message:
      'Cute home to stay in. We lucked out finding parking but it seems like it could be difficult to park close to house. The back door was open when we arrived (after 8:00 pm) and would not close. I contacted [Host] and he was there in 30 min to fix it. Overall a good night-though the master bed does squeak with every movement which was a bit bothersome for a restless sleeper. Thanks [Host] for the great communication',
  },
  {
    id: '246',
    date: 'August 2021',
    guest: 'Guest',
    message:
      'Wonderful last minute stay! Host was super communicative and helpful, thank you [Host] and family!',
  },
  {
    id: '248',
    date: 'August 2021',
    guest: 'Guest',
    message:
      'Nice, cozy little spot for family and friends coming together. [Host] was good communicating and if you read up on update info he sends it pretty much covers any questions you might have ahead of time - though he was decently prompt regarding any concerns! I did let him know about a loose shower knob which I was grateful he didn’t turn to pin on us during our stay :) We enjoyed our short stay there and used the kitchen for a big breakfast with fam and friends next morning before heading to Hershey Park!',
  },
  {
    id: '250',
    date: 'August 2021',
    guest: 'Guest',
    message:
      "Pros: Great location that's close to downtown; charming home; well supplied; nice TV with access to many streaming services; nice patio. [Host] was receptive to feedback.Cons: Property was not ready for check in at the agreed time; some cleaning was not completed; parking is extremely difficult and parking restrictions are onerous; there was major street construction and street closures during our stay; major potholes all around the neighborhood. Significant amount of litter in the neighborhood; playground nearby has broken equipment, rusted, and overall not safe for little kids. Neighbors were having a loud party until 2 or 3am; very loud.",
  },
  {
    id: '252',
    date: 'August 2021',
    guest: 'Guest',
    message:
      '[Host] is great! Everything we needed was provided! My family really enjoyed their stay! [Host]’s communication is awesome! FYI the Hersey Park is 40 minutes away from this location. Be mindful of the parking rules!',
  },
  {
    id: '254',
    date: 'August 2021',
    guest: 'Guest',
    message:
      'Beautiful, clean and exactly what we needed! Check in was a breeze and communicating with the host was easy and informative. We were only in town for one night for a wedding but we would definitely stay again if we needed something in the area.',
  },
  {
    id: '256',
    date: 'August 2021',
    guest: 'Guest',
    message:
      'The neighbors were cool everything it’s close by so if you need to go out and get something everything was clean and nice we love staying there will be back',
  },
  {
    id: '258',
    date: 'August 2021',
    guest: 'Guest',
    message:
      'My eight family members & I tremendously enjoy the house.  The house was clean.  There were so many amenities provided.  The backyard was a pleasure and private.  The rooms were spacious enough.  Everything was decorated nicely.  We had such a good time and would recommend to anyone.',
  },
  {
    id: '260',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'Our stay was wonderful! There is street parking in front of the house and on the streets adjacent to the house. Parking was never an issue. The house was even better than the pictures indicated. [Host] and family have thought of everything. They have dental kits and shaving kits just in case you are in a pinch. He also left out a few snacks. The only problem we had, was the house smelled a bit like cigarettes when we first walked in. The smell eventually went away and wasn’t a problem but something to note. Everything else was wonderful!',
  },
  {
    id: '262',
    date: 'July 2021',
    guest: 'Guest',
    message: 'good',
  },
  {
    id: '264',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'The house is very clean and cozy. [Host] is an amazing host and was very helpful during our stay.',
  },
  {
    id: '266',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'Great place, beautiful backyard! [Host] was very easy to communicate with!',
  },
  {
    id: '268',
    date: 'July 2021',
    guest: 'Guest',
    message:
      '[Host] was a great host! House instructions were very clear and easy. House was clean and very cute!',
  },
  {
    id: '270',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'Very nice and stylish house ; clean and has everything’s we need during our stay we really enjoyed and been very comfortable.I recommend this place and if I will visit Lancaster again for sure will stay in this amazing house',
  },
  {
    id: '272',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'This house is clean and spacious. There\'s easy access to both downtown Lancaster and the surrounding area. [Host] was a responsive host and the eco bath items and welcome basket were lovely touches. The neighborhood was a little more questionable. We experienced this "up and coming" neighborhood on the weekend. The neighbors threw a party which lasted well into the morning hours and which kept waking my infant up. parking was also a challenge on the weekend.',
  },
  {
    id: '274',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'The house was very cute and nicely maintained. It was perfect for my family of six. We loved the neighborhood too. It was very friendly and convenient to things we wanted to do in Lancaster.',
  },
  {
    id: '276',
    date: 'July 2021',
    guest: 'Guest',
    message:
      "The house was clean and tastefully decorated. The host was super nice and hospitable. It's in walking distance of downtown Lancaster which is very convenient. Would definitely stay here again!",
  },
  {
    id: '278',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'House was well kept and very organized with all direction given by [Host]. Location wasn’t the best but I have definitely seen worse. Overall great place to stay for the price it is.',
  },
  {
    id: '280',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'This house was perfect!  Lots of space, clean, adorable, easy, comfortable!  Street parking was not a problem at all!  We loved the backyard as well!  [Host] was very communicative!  We will definitely stay again, and recommend to others!',
  },
  {
    id: '282',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'A cozy clean place. But the room faced the street will easily hear the sounds outside and the neighbors were talking through the midnight in Friday night. Other than that, everything is perfect.',
  },
  {
    id: '284',
    date: 'July 2021',
    guest: 'Guest',
    message:
      'Great communication with host! Friendly neighborhood. Great space:)',
  },
  {
    id: '286',
    date: 'June 2021',
    guest: 'Guest',
    message:
      'For the most part this was a good spot. It’s a pretty noisy block if you’re not used to cars & motorcycles zooming down the street at all hour of the night/day. Was disappointed in the backyard.. the listing photos do not reflect how it looks. We had an incident where someone decided to come for the day but we hadn’t registered them and they wanted to charge us $20 for them to stop in for 10min. There’s is a long list of rules and things for you to do as a guest, you will miss something even if you read them and it will probably cost you unfortunately with these Hosts. - very bummed, the only super host I e had a problem with in my entire time staying at AirBnBs!',
    reply: {
      id: '288-reply',
      message:
        'hmmm sorry about your frustration. It feels however a bit unfair regarding your review\n\nHere is the conversation that we had. Plus we also were duper duper clear about how it works beforehand. It seemed to me, although I could be wrong, that you were hoping to slip in another person and get away with it. Again I may be wrong. But here is what was said. \n\nMessage from [Guest]\n[Guest]10:18 AM\n"Question for you - our 6th girl is coming in for the day…. Is she okay to stop by the AirBnB when we come back to freshen up?"\n\nMessage from [Host]\n[Host]10:20 AM\n"We usually ask for them to be added\nIt would be $20 per person\nIf she just stays a minute okay sure don’t worry about it but if they come to visit we ask for it to be treated as a guest which is the $20\nCool?"\n\nMessage from [Guest]\n[Guest]10:24 AM\n"Yeah it will only be short ten minute probably nothing long"\n\nMessage from [Host]\n[Host]10:25 AM\n"I’m not trying to be hard but 10 minutes usually turns into 30 mins and so much more 😀"\n\nOn the backyard you are right we could do better. We have a plan to make it better. However to say it has not been maintained for a  year is inaccurate. We were just in there a few weeks ago. But yes I take your feedback. We should add some more attrative features.',
      date: 'July 2021',
    },
  },
  {
    id: '289',
    date: 'June 2021',
    guest: 'Guest',
    message:
      'The place was really great - a perfect size/setup for our family of 5. We didn’t have any issues with neighborhood noise (maybe because we were there from a Sunday - Friday) but it was perfectly fine. Parking was not an issue either. So glad to have found this option.',
  },
  {
    id: '291',
    date: 'June 2021',
    guest: 'Guest',
    message:
      '[Host] was super helpful, and the house was lovely! It was the perfect place for a weekend to explore Lancaster, and in a super convenient location, too.',
  },
  {
    id: '293',
    date: 'June 2021',
    guest: 'Guest',
    message:
      '[Host]s place was really beautiful, with a mot of paintings and nice decor! I really loved it and would 100% recommend because it was just too great, the neighborhood was very nice and active i liked it a lot! Very comfy beds, nice backyard and comfy sofas',
  },
  {
    id: '295',
    date: 'June 2021',
    guest: 'Guest',
    message:
      'best airbnb ive ever been to. very clean and [Host] was very friendly !',
  },
  {
    id: '297',
    date: 'June 2021',
    guest: 'Guest',
    message:
      '[Host]’s home is absolutely wonderful. It is so cozy and at the same time roomy enough for my family of 6. Would definitely stay again!',
  },
  {
    id: '299',
    date: 'June 2021',
    guest: 'Guest',
    message: 'nice people',
  },
  {
    id: '301',
    date: 'May 2021',
    guest: 'Guest',
    message:
      'The good - the location was close to the city and house was clean and nicely decorated. The city has plenty to do for a 2-to-3 day getaway. The host responds quickly to questionsThe not-so-good - we had booked this place in part to do some grilling as part of Memorial Day weekend. Unfortunately, the grill grates were extensively rusty (not something that could just be scrubbed off). The host had a poor attitude about the whole ordeal and brushed off our concern with a "you\'ll be fine" which left a bad impression. Further, he was difficult to work with regarding any sort of recourse for the state of the grill - we ended up going to a restaurant instead and paying more than we otherwise would have grillingOther neutral things of note: the host will ask you submit your photo ID through a separate non-AirBnB verification system (I have personally not encountered this with previous bookings). The host will also pass along a $20 "cleaning fee" if you request the possibility of checking in 1 hour earlier than stated',
  },
  {
    id: '303',
    date: 'May 2021',
    guest: 'Guest',
    message: 'Lovely place! Highly recommended!',
  },
  {
    id: '305',
    date: 'May 2021',
    guest: 'Guest',
    message:
      'Home is updated with nice decor. The home is clean and well stocked with necessities. However, if early entry is desired look elsewhere. Elan charged extra for 2 pm entry and did not program the door lock to open until 2:30pm. We stood on the front porch for 20 minutes trying to get in and [Host] was no help.',
  },
  {
    id: '307',
    date: 'May 2021',
    guest: 'Guest',
    message:
      'We stayed in Lancaster for an overnight trip with our friends. House was very nice as advertised. Quiet neighborhood and good parking at night. Highly recommend.',
  },
  {
    id: '309',
    date: 'May 2021',
    guest: 'Guest',
    message: 'Beautiful home! Very clean and homey!',
  },
  {
    id: '311',
    date: 'May 2021',
    guest: 'Guest',
    message: 'Great place!!',
  },
  {
    id: '313',
    date: 'May 2021',
    guest: 'Guest',
    message:
      '[Host]’s place can accommodate up to 8 people. Very stylish and clean, and [Host] communicated very timely. But it does only have 1 bathroom so plan accordingly.',
  },
  {
    id: '315',
    date: 'May 2021',
    guest: 'Guest',
    message: 'Great experience at this place. Highly recommend !',
  },
  {
    id: '317',
    date: 'May 2021',
    guest: 'Guest',
    message:
      'We had a wonderful time at this spacious place situated in an active part of Lancaster.',
  },
  {
    id: '319',
    date: 'May 2021',
    guest: 'Guest',
    message:
      'Host was very thorough, prompt, and thoughtful. House was as described and they had several nice touches for the amenities. The neighborhood was a little loud at times (loud music playing outdoors) but very convenient to many places. Parking is street parking on a first come first available. We were able to park within 2 blocks each time we needed to park.',
  },
  {
    id: '321',
    date: 'April 2021',
    guest: 'Guest',
    message:
      'Great place and the host was very accommodating working with us give early check in and late check out in our last minute arrangements. The house was nice and clean.',
  },
  {
    id: '323',
    date: 'April 2021',
    guest: 'Guest',
    message: 'Great place I would totally recommend it 🤙🏼🤙🏼🤙🏼',
  },
  {
    id: '325',
    date: 'April 2021',
    guest: 'Guest',
    message:
      'Very clean, nice location, and loved the tips [Host] provided us for what to do in the area!',
  },
  {
    id: '327',
    date: 'April 2021',
    guest: 'Guest',
    message:
      'What a delightful, clean, welcoming home [Host] has here to offer. Our family thoroughly enjoyed our time in this lovely home and look forward to returning on our next trip to Lancaster. You will thank yourself for choosing to stay in this property so attentively managed by [Host] and his family. Thank you for a wonderful stay.',
  },
  {
    id: '329',
    date: 'March 2021',
    guest: 'Guest',
    message:
      'The hosts have done such a lovely job of the home and we were very comfortable!',
  },
  {
    id: '331',
    date: 'March 2021',
    guest: 'Guest',
    message: 'we found everything just as the host described!',
  },
  {
    id: '333',
    date: 'March 2021',
    guest: 'Guest',
    message:
      '[Host]’s place was beautiful and perfect for our week away from home. We found everything we needed and much more. [Host] is an excellent communicator and kept us informed of needed details as well as showed care for how we were doing while there. We enjoyed Lancaster Central Park, Lancaster City, Amish farms, food, shops, and much more. I am planning to come back and highly recommend [Host]’s place.',
  },
  {
    id: '335',
    date: 'March 2021',
    guest: 'Guest',
    message: 'Comfortable',
  },
  {
    id: '337',
    date: 'February 2021',
    guest: 'Guest',
    message:
      'I loved staying here, such a beautiful house. Couldn’t have asked for a better stay. [Host] was really quick to respond and made sure we were good.',
  },
  {
    id: '339',
    date: 'February 2021',
    guest: 'Guest',
    message:
      'This was cozy from the start!  Walking in, it was spacious, but comfortable, exceptionally clean and welcoming.  The beds were soft and we slept like babies **plenty of blankets!  The decorations were so unique and well thought out.  [Host], the host, had a wealth of information in his welcome texts and information tips ..He answered questions before I knew I had any.  Great place ..great neighborhood..great host !!',
  },
  {
    id: '341',
    date: 'February 2021',
    guest: 'Guest',
    message: 'Fantastic stay! Clean, spacious, and stocked with amenities.',
  },
  {
    id: '343',
    date: 'February 2021',
    guest: 'Guest',
    message:
      'What a hidden gem! We considered farmstays, hotels, B&B’s, and other Lancaster options, but we’re so glad we settled on [Host]’s place. Every choice they made, from curb appeal to the decorative touches to the comfy beds was spot on. We got hit with a snow day in the middle of our trip and couldn’t leave the house, and we loved it! The place is cozy, we loved the board games, and movie night on the big comfy sectional was a hit. [Host] kept us informed every step of the way, and always came through on what he promised. First rate place. First rate host. Would highly recommend.',
  },
  {
    id: '345',
    date: 'February 2021',
    guest: 'Guest',
    message:
      'This AirBnB is a very nice place to spend a getaway weekend. The place was clean and spacious. All the amenities imaginable were provided with the stay. There were even dental kits, shaving kits, and extra soap bars if needed. Very nice touch. [Host] was a great host and provided very detailed instructions to make the entire stay as easy and stress free as possible. He was very quick to respond when we had any type of questions. Overall, I very much enjoyed my stay here and would stay if given the chance again.',
  },
  {
    id: '347',
    date: 'February 2021',
    guest: 'Guest',
    message: 'Stayed one night. It was ok',
  },
  {
    id: '349',
    date: 'February 2021',
    guest: 'Guest',
    message:
      'Perfect downtown Lancaster getaway for couples, small groups, or families with kids. Clean and cozy space with all the amenities you need for your stay. Great location close to restaurants and shops. No problem finding parking around the block. Speedy communication, notifications, and reminders by the wonderful host. Would definitely visit again!',
  },
  {
    id: '351',
    date: 'February 2021',
    guest: 'Guest',
    message:
      'Beautifully styled, comfortable and clean. Close to everything we wanted, as well. Would definitely stay again.',
  },
  {
    id: '353',
    date: 'January 2021',
    guest: 'Guest',
    message:
      'Everything was as I expected. Clean, pictures were accurate. Very cute space and exactly what we needed! Responses were very quick. Thank you!',
  },
  {
    id: '355',
    date: 'January 2021',
    guest: 'Guest',
    message:
      'This was my very first Airbnb, the host is very responsive, very attentive and overall a great host!',
    reply: {
      id: '357-reply',
      message: 'It was a pleasure hosting you',
      date: 'January 2021',
    },
  },
  {
    id: '358',
    date: 'January 2021',
    guest: 'Guest',
    message: 'Great host',
  },
  {
    id: '360',
    date: 'January 2021',
    guest: 'Guest',
    message: 'Not much to say ! Over all a decent stay.',
  },
  {
    id: '362',
    date: 'January 2021',
    guest: 'Guest',
    message:
      'we had an amazing time it was very clean and spacious and [Host] was very prompt on responding',
  },
  {
    id: '364',
    date: 'January 2021',
    guest: 'Guest',
    message:
      'Clean, cosy, and full of useful amenities. The house is somehow even more charming that in the pictures—both on the outside and on the inside—and has practically everything you need for a tranquil stay. We couldn’t find parking in front of the house in the late afternoon, but there were plenty of free spots less than a block away.',
  },
  {
    id: '366',
    date: 'December 2020',
    guest: 'Guest',
    message:
      'This place was great for a little family getaway! We had a great time! It’s very homey but stylish at the same time!',
    reply: {
      id: '368-reply',
      message: 'Thank you for the feedback!',
      date: 'January 2021',
    },
  },
  {
    id: '369',
    date: 'December 2020',
    guest: 'Guest',
    message:
      '[Host]’s place was very comfortable and the perfect getaway! Very clean/well-kept and full of all of the amenities I needed. Thanks!',
    reply: {
      id: '371-reply',
      message: 'Thank you for pointing that our [Guest]. We appreciate it.',
      date: 'January 2021',
    },
  },
  {
    id: '372',
    date: 'December 2020',
    guest: 'Guest',
    message:
      'Very nice and clean place.  Parking can be tricky on the street as it is very narrow.',
  },
  {
    id: '374',
    date: 'December 2020',
    guest: 'Guest',
    message:
      "I have stayed at three of [Host]'s places and this was my favorite by far!",
    reply: {
      id: '376-reply',
      message:
        'You keep coming back man! :) We are glad you are enjoying our places.',
      date: 'December 2020',
    },
  },
  {
    id: '377',
    date: 'December 2020',
    guest: 'Guest',
    message: 'Great stay!',
  },
  {
    id: '379',
    date: 'November 2020',
    guest: 'Guest',
    message: 'awesome place!',
  },
  {
    id: '381',
    date: 'November 2020',
    guest: 'Guest',
    message:
      'What a great home base for a fantastic weekend in Lancaster! Close to everything, great for a family, fantastic areas to explore -- what more to say?  The house itself is extremely well done with thoughtful amenities; [Host] is very responsive and helpful; the region is great to explore.  (My one tip to other travelers is to check out Lititz!; its a little German town that is like a trip back in time!).  Thanks to [Host], and hope others can enjoy as well.',
  },
  {
    id: '383',
    date: 'November 2020',
    guest: 'Guest',
    message:
      'The house was sparkling clean and beds and pillows were awesome! Better than what I have at home 🧐Parking is limited so make sure and get there as early as you can. Overall it’s a great place to spend the night. Beats a hotel stay especially with 4 little children!  Thanks a lot to [Host] and his family!',
  },
  {
    id: '385',
    date: 'November 2020',
    guest: 'Guest',
    message:
      'This place was perfect for our family of 6. [Host] was so thoughtful with the snacks, waters, and wonderful bath soaps. The kid friendly dinner wear was such an useful addition since our oldest is 7. We didn’t set these up but there was also a pack-and-play and air mattress. Highly recommend [Host] and this place for any bookings.',
  },
  {
    id: '387',
    date: 'October 2020',
    guest: 'Guest',
    message:
      'Better than expected. The house was clean, cozy and very comfortable. Lovely place to stay. I would definitely recommend this place',
  },
  {
    id: '389',
    date: 'October 2020',
    guest: 'Guest',
    message: 'Good place to stay in Lancaster, especially for a group of 6.',
  },
  {
    id: '391',
    date: 'October 2020',
    guest: 'Guest',
    message:
      'Cute, perfectly clean space with convenient location and seamless check-in!',
  },
  {
    id: '393',
    date: 'October 2020',
    guest: 'Guest',
    message: 'Great house for a large group.',
    reply: {
      id: '395-reply',
      message: 'Thanks for being our guest',
      date: 'October 2020',
    },
  },
  {
    id: '396',
    date: 'October 2020',
    guest: 'Guest',
    message:
      "Very clean and organized! Lots of room, quiet, and comfortable. The only negative about it was I felt like the was strict house rules and afraid to touch anything or leave anything out of place. Just a personal opinion, but would recommend [Host]'s location.",
    reply: {
      id: '398-reply',
      message:
        'Sorry [Guest] that you felt that way. And I can understand. Its a little bit of a fine line with the house rules frankly. Some folks you need to make them very strict for them to even begin to pay attention. Bu tthen the danger is that some more sensible people like yourself take them to seriously. That is not our intent. \n\nThanks for being a great guest.',
      date: 'October 2020',
    },
  },
  {
    id: '399',
    date: 'October 2020',
    guest: 'Guest',
    message: 'Great communication. Nice place!',
    reply: {
      id: '401-reply',
      message: 'Thank you [Guest]',
      date: 'October 2020',
    },
  },
  {
    id: '402',
    date: 'October 2020',
    guest: 'Guest',
    message:
      "Great stay!  [Host] is very communicative and got back to us immediately when we had a hot water issue.  The house is super clean and a convenient location for getting around the city.  We didn't have our kids with us, but with a park on the same street it would be a great place to bring them.  Friendly neighbors.",
  },
  {
    id: '404',
    date: 'October 2020',
    guest: 'Guest',
    message: 'A great home away from home.',
  },
  {
    id: '406',
    date: 'September 2020',
    guest: 'Guest',
    message:
      'We loved this house! The neighborhood is friendly and filled with flavor, culture, and was very chill. We were greeted  by neighbors as we checked in and we enjoyed the local corner store one block over. Not to mention that Central Market is within walking distance if you enjoy a good walk and there’s a playground nearby. It felt like home for sure.The decor of the house was cozy and very well designed. Definitely a gem and we will book again.',
  },
  {
    id: '408',
    date: 'September 2020',
    guest: 'Guest',
    message:
      '[Host]’s place was absolutely amazing ! The moment we got their he was so accommodating. We were a bit warm in the room upstairs and he came in 10 mins to put back in the ac units ! He went above and beyond to make sure we were comfortable and satisfied! Such an amazing and stylish home ! The place was sparkling clean and a cool place to stay with friends !',
  },
  {
    id: '410',
    date: 'September 2020',
    guest: 'Guest',
    message: 'Awesome place in an awesome neighborhood for a great value',
    reply: {
      id: '412-reply',
      message: 'Thanks for being a great guest',
      date: 'September 2020',
    },
  },
  {
    id: '413',
    date: 'September 2020',
    guest: 'Guest',
    message: 'Simply be sure this location fits your reason for your Visit!',
  },
  {
    id: '415',
    date: 'September 2020',
    guest: 'Guest',
    message:
      '[Host] was a wonderful host, and very responsive. His place was lovely, clean and comfortable. We enjoyed our morning coffee in the cozy little fenced in patio/yard! We highly recommend staying here and would absolutely come back!',
    reply: {
      id: '417-reply',
      message: 'It was a pleasure hosting you.',
      date: 'September 2020',
    },
  },
  {
    id: '418',
    date: 'September 2020',
    guest: 'Guest',
    message: 'Neighbors were nice.',
  },
  {
    id: '420',
    date: 'August 2020',
    guest: 'Guest',
    message:
      "[Host]'s place was excellent. It had plenty of space for my entire family, and had everything we needed. The neighborhood was adorable. Can't wait to visit Lancaster again.",
  },
  {
    id: '422',
    date: 'August 2020',
    guest: 'Guest',
    message: 'This house was comfortable and we would reserve it again .',
    reply: {
      id: '424-reply',
      message: 'Please do! :)',
      date: 'August 2020',
    },
  },
  {
    id: '425',
    date: 'August 2020',
    guest: 'Guest',
    message: 'great',
  },
  {
    id: '427',
    date: 'August 2020',
    guest: 'Guest',
    message:
      'We enjoyed our stay at [Host]’s home. It was charming and cozy. [Host] is gray with communication and to address any questions or concerns. Our kids loved the attic room as it had a hideaway type feel to it and we appreciated all the amenities they had to offer.We got parking directly in-front of the home each day even after 5 Pm, maybe luck but parking wasn’t really an issue.',
  },
  {
    id: '429',
    date: 'August 2020',
    guest: 'Guest',
    message:
      '[Host]’s place was very well decorated and tidy. The place had wonderful amenities, and [Host] made sure to provide toiletries and supplies for our stay - which was an added bonus. It’s located close to the cute areas of the town and is a wonderful and cozy space! If ever in the Lancaster area [Host]’s place is a great place to be!',
  },
  {
    id: '431',
    date: 'August 2020',
    guest: 'Guest',
    message: 'Very clean and tidy house. Lots of room for our group of 9.',
  },
  {
    id: '433',
    date: 'August 2020',
    guest: 'Guest',
    message:
      'The location was great, close to everything. It was easy to communicate and access the property when I arrived.',
  },
  {
    id: '435',
    date: 'August 2020',
    guest: 'Guest',
    message:
      'Want a stay that’s worth it and doesn’t effect your pockets to much this is the way to go.',
  },
  {
    id: '437',
    date: 'August 2020',
    guest: 'Guest',
    message:
      "This is a special place to stay. It's much more than a bed to sleep in and a kitchen to cook food. There are many personal touches that make it feel like home. My kids especially loved the attic bedroom.Each room felt special but also a part of a whole theme.",
  },
  {
    id: '439',
    date: 'August 2020',
    guest: 'Guest',
    message:
      'It’s a beautiful, spacious home and it made me and my family of 9 feel very comfortable. Everything was as expected and [Host] was always on top of the communication when we had questions and concerns. Thank you!',
  },
  {
    id: '441',
    date: 'August 2020',
    guest: 'Guest',
    message:
      'We had a great stay at [Host]’s place! Super quick communication, easy check in/check out, comfortable home. Would recommend!',
  },
  {
    id: '443',
    date: 'August 2020',
    guest: 'Guest',
    message:
      'Beautiful home - lots of space for sleeping. Nicely decorated - the kitchen and dining room is great for cooking and sharing meals together. It was too hot for us to sit outside on the patio, but it is a lovely area :)',
  },
  {
    id: '445',
    date: 'July 2020',
    guest: 'Guest',
    message:
      '[Host] was very quick to respond to any texts.  He was very thoughtful in making sure we had everything we needed.  The house is very spacious and comfortable.  Great TV and extremely comfortable beds!  The only negative was the parking. The street is very narrow and not the best of neighborhoods but the place is stylish and clean.',
    reply: {
      id: '447-reply',
      message: 'Thanks for your feedback.',
      date: 'August 2020',
    },
  },
  {
    id: '448',
    date: 'July 2020',
    guest: 'Guest',
    message: 'Thanks, [Host]. Great house, great service.',
  },
  {
    id: '450',
    date: 'July 2020',
    guest: 'Guest',
    message: 'You get what you pay for. Always nice and clean thats for sure',
  },
  {
    id: '452',
    date: 'July 2020',
    guest: 'Guest',
    message:
      'I was so happy with my stay. My children had a great time. [Host] was always available no and would get back to me immediately. What a great host I am looking forward to returning.',
    reply: {
      id: '454-reply',
      message: 'You were a great guest.',
      date: 'July 2020',
    },
  },
  {
    id: '455',
    date: 'July 2020',
    guest: 'Guest',
    message:
      '[Host] is a perfect host: beautiful house, great reactivity and very helpful and accommodating for any question. We were a family of 4 and the house is very spacious, clean and the location perfect. We enjoyed the bbq outside and took our breakfast on the deck in the backyard.',
    reply: {
      id: '457-reply',
      message: 'It was amazing hosting you.',
      date: 'July 2020',
    },
  },
  {
    id: '458',
    date: 'July 2020',
    guest: 'Guest',
    message:
      'We so enjoyed our stay in this charming space. The house was clean and welcoming. It was absolutely what we needed for a stop over on a long trip! [Host] was quick to respond to any questions we had. It felt like home!',
  },
  {
    id: '460',
    date: 'July 2020',
    guest: 'Guest',
    message:
      'He is the best. He always had a good communication with us. The house is super nice and big',
    reply: {
      id: '462-reply',
      message: 'Wow thank you for your feedback.',
      date: 'July 2020',
    },
  },
  {
    id: '463',
    date: 'July 2020',
    guest: 'Guest',
    message:
      'The location of this place was amazing. Everything you needed was less than 15 minutes away. The house itself was clean and had basic amenities. The host was very quick to respond and created a very helpful guide for the area. The small backyard was perfect for having morning coffee. Street parking was a very minuscule issue, but it was a little tight so if you’re not good at parallel parking, I highly suggest you park down the street haha. I highly suggest staying here!',
    reply: {
      id: '465-reply',
      message: 'Thanks for beign our guest.',
      date: 'July 2020',
    },
  },
  {
    id: '466',
    date: 'July 2020',
    guest: 'Guest',
    message:
      '[Host]’s house was perfect. Very spacious, with several spaces for the kids to play, while i teleworked. Full kitchen, lovely backyard, friendly neighbors, and a stone’s throw to the Lancaster Central Park!!!',
    reply: {
      id: '468-reply',
      message: 'Thank you for the kind feedback.',
      date: 'July 2020',
    },
  },
  {
    id: '469',
    date: 'March 2020',
    guest: 'Guest',
    message: "It's very nice standing, good location",
  },
  {
    id: '471',
    date: 'March 2020',
    guest: 'Guest',
    message: 'Very quick response time and consistent, on going communication.',
  },
  {
    id: '473',
    date: 'March 2020',
    guest: 'Guest',
    message:
      "[Host]'s space was incredibly accessable and comfortable! Only blocks from downtown Lancaster it was a perfect spot for what my family and I had in mind! His recommendations in his guide were also immensely helpful and his responses were quick and reliable! Overall a 10/10 experience!",
  },
  {
    id: '475',
    date: 'March 2020',
    guest: 'Guest',
    message:
      "The house was easy to find and easy to access, and we truly enjoyed our stay. The house was quite a bit larger than we expected, and we had plenty of room for hanging out and playing games around the table. Although we did not use them, there was a washer and drier in the basement which looked easy to use, as well as a beautiful patio behind the house. It was a wonderful place to wake up on Sunday morning with the sunlight coming through the windows, and the house was super clean and organized for us when we arrived. There was room to prepare food in the kitchen, with all the dishes and utensils we could have needed. Aside from the parking being a little difficult due to its location in the city, we had no complaints, and we had no problems at all with noisy neighbors. The TV and wifi worked well, and there was enough hot water for everyone to shower. Overall, we loved our stay in Lancaster and would do again at [Host]'s place. Thanks for a great stay!",
    reply: {
      id: '477-reply',
      message: 'Thanks for being our guest. Please come again',
      date: 'March 2020',
    },
  },
  {
    id: '478',
    date: 'February 2020',
    guest: 'Guest',
    message:
      'Nice house for a family to stay. Be aware of the street cleaning schedule in the neighborhood to avoid parking violations.',
    reply: {
      id: '480-reply',
      message:
        'Thank you for being our guest. Note that the street cleaning is a city wide thing. In fact this area is one of the easier ones. One must always always pay attention to the signs in every street in the city',
      date: 'March 2020',
    },
  },
  {
    id: '481',
    date: 'February 2020',
    guest: 'Guest',
    message: 'Great place to stay',
    reply: {
      id: '483-reply',
      message: 'Thank you for your feedback',
      date: 'March 2020',
    },
  },
  {
    id: '484',
    date: 'February 2020',
    guest: 'Guest',
    message:
      "We came to PA all the way from Alaska. It was a long trip, so a clean and comfortable place was welcome! Check-in was easy. Parking wasn't always so easy. Washer/dryer was great. Kitchen was bare (shakers, but no salt!) but had enough dinnerware and utensils for a family.",
    reply: {
      id: '486-reply',
      message:
        '[Guest] I am so sorry that we missed having salt there. It is our intent on having the place well stocked but we mess up at times. You would have been free let us know.',
      date: 'March 2020',
    },
  },
  {
    id: '487',
    date: 'February 2020',
    guest: 'Guest',
    message:
      'Booked this place while attending PASA’s sustainable agriculture conference. It was walking distance to the convention center, the hosts were very communicative, and the house had all the necessities for our stay. Hosts even provided nice touches like tea and snacks. Highly recommend!!',
  },
  {
    id: '489',
    date: 'February 2020',
    guest: 'Guest',
    message:
      'The King’s place was very cozy and provide us with everything we need!! We were able to host 12 people within this house. It was great to reconnect with friends from all over. The house was a quick 5 min Uber ride away from the local life! It was a great stay!',
    reply: {
      id: '491-reply',
      message:
        'Thank you for visiting us and managing the large group well. Welcome back anytime',
      date: 'February 2020',
    },
  },
  {
    id: '492',
    date: 'January 2020',
    guest: 'Guest',
    message:
      'The house was perfect for a quick overnight stay in Lancaster! Plenty of comfortable sleeping areas, very clean, and [Host] was very easy to coordinate with to check in. I would recommend staying here if you are heading to Lancaster.',
  },
  {
    id: '494',
    date: 'January 2020',
    guest: 'Guest',
    message:
      'We loved our stay at [Host]’s place. It was clean and comfortable and amazingly quiet in spite of being in the city. [Host] was a gracious and accommodating host.',
  },
  {
    id: '496',
    date: 'January 2020',
    guest: 'Guest',
    message:
      'This home was excellent! [Host] was a great host. This will definitely be a stay to come back to in the future!',
    reply: {
      id: '498-reply',
      message: 'Thanks for visiting us.',
      date: 'January 2020',
    },
  },
  {
    id: '499',
    date: 'January 2020',
    guest: 'Guest',
    message:
      '[Host] is very accommodating and very friendly and runs a tight ship',
    reply: {
      id: '501-reply',
      message: 'Thanks [Guest] for the compliment. It was a pleasure hosting',
      date: 'January 2020',
    },
  },
  {
    id: '502',
    date: 'January 2020',
    guest: 'Guest',
    message:
      'What an awesome experience in Lancaster! The house was amazing and exceeded our expectations. Everything was clean, in order, and easy to find. The parking was a bit tight, but nothing too extreme. We were able to park within a block each time, which to me is great! [Host] was a very good host and the communication was excellent. I would definitely return and will be recommending his places to my friends! Thanks so much for a great stay!',
    reply: {
      id: '504-reply',
      message: 'You were the best and welcome back anytime',
      date: 'January 2020',
    },
  },
  {
    id: '505',
    date: 'January 2020',
    guest: 'Guest',
    message:
      "This place was great. It was clean, the kitchen had all the basics needed to make a meal, and [Host] was a fantastic host! Definitely a great Airbnb! The only thing worth mentioning is that the location was meh. Totally safe, but there isn't really anything to do in the city unless you walk about a mile from the house. This was ideal for us because we like to walk a lot, but it's worth noting for people who like to be where the action is.",
  },
  {
    id: '507',
    date: 'January 2020',
    guest: 'Guest',
    message:
      'This adorable space was perfect for our family! It was comfy, cozy and super clean!',
  },
  {
    id: '509',
    date: 'January 2020',
    guest: 'Guest',
    message: 'Great stay, and the hosts are very attentive',
  },
  {
    id: '511',
    date: 'January 2020',
    guest: 'Guest',
    message:
      '[Host] & Francesca’s place was spotless, and very updated. From the beginning, [Host] was great at communication and was very accommodating to our big group for NYE. The only possible thing we might have, would be more mirrors! Girls getting ready for a night out is a nightmare without enough mirrors. Lol. thanks [Host] & Francesca for the hospitality!',
  },
  {
    id: '513',
    date: 'December 2019',
    guest: 'Guest',
    message:
      'We had five start experience for sure. The host was super! House was perfect for my family and I and we will be staying there again.',
    reply: {
      id: '515-reply',
      message: 'Thanks for the generous feedback. Come again',
      date: 'January 2020',
    },
  },
  {
    id: '516',
    date: 'December 2019',
    guest: 'Guest',
    message: 'Great spot! Easy access, close to shop and great communication.',
    reply: {
      id: '518-reply',
      message: 'Thank you for being our guest. It was a pleasure hosting you',
      date: 'January 2020',
    },
  },
  {
    id: '519',
    date: 'December 2019',
    guest: 'Guest',
    message:
      "This was a really nicely re-done row house with nice style and great amenities.  Very clean, tons of available sheets and blankets, and even some extra toothbrushes that came in handy when we realized we left my son's at home. Great space for families because the kids can have the 3rd floor bedroom and parents can hang out in the living room at night.  [Host] was an impeccable host and very responsive.  I will say that one member of my party was uncomfy with the neighborhood, but we never had any problems.  And we did have to park a block away at night, but it wasn't awful.  Ultimately a good experience and a lovely house.",
    reply: {
      id: '521-reply',
      message:
        'Thank you for your feedback. Sorry your friend was uncomfortable. Yes it’s not upper class central city but it is one of the safest blocks of town. My friend owned the place for years and never had a problem',
      date: 'January 2020',
    },
  },
  {
    id: '522',
    date: 'December 2019',
    guest: 'Guest',
    message: 'It was very clean and spacious. Thank you [Host]',
  },
  {
    id: '524',
    date: 'December 2019',
    guest: 'Guest',
    message: 'Awesome super host',
    reply: {
      id: '526-reply',
      message: 'Thanks for being a great guest man. Welcome back anytime',
      date: 'December 2019',
    },
  },
  {
    id: '527',
    date: 'December 2019',
    guest: 'Guest',
    message:
      '[Host] was the best! Great hospitality! House so clean! Everything that was said in the website was accurate.',
  },
  {
    id: '529',
    date: 'December 2019',
    guest: 'Guest',
    message:
      'An outstanding stay and value! Extremely clean and updated interior. Very comfortable and plenty of space to spread out. We were there for a mother/daughter weekend, and our 14-year old daughters loved having their own space up on the third level...which was great when the moms wanted to go to bed. Would definitely recommend!',
    reply: {
      id: '531-reply',
      message: 'Please come visit us again',
      date: 'December 2019',
    },
  },
  {
    id: '532',
    date: 'December 2019',
    guest: 'Guest',
    message:
      '[Host] house is very affordable and the display is nice Parking is bad and the neighborhood is somewhat unpleasing',
  },
  {
    id: '534',
    date: 'December 2019',
    guest: 'Guest',
    message:
      "My stay at [Host]'s was wonderful. The house was spotless. It was bigger then the pictures let on. The accommodations were great and very well thought out.",
    reply: {
      id: '536-reply',
      message: 'Thank you for being our guest. It was a pleasure hosting',
      date: 'December 2019',
    },
  },
  {
    id: '537',
    date: 'December 2019',
    guest: 'Guest',
    message:
      "Highly recommend staying at [Host]s place. Everything was just as described, we really enjoyed ourselves. He even went out of his way to call and make sure everything was good and if we needed anything. House was clean and inviting. Hardest part was finding parking but even that wasn't bad. We will be returning in the future.",
    reply: {
      id: '539-reply',
      message:
        'I am glad you enjoyed your stay. It is always meaningful to my wife and me when some enjoys it.',
      date: 'December 2019',
    },
  },
  {
    id: '540',
    date: 'December 2019',
    guest: 'Guest',
    message:
      '[Host]’s Place was cute and eclectic. He was very communicative. It was nice to have a kitchen to use so we didn’t have to eat out and the space as clean with all the amenities and toiletries you’d need. The neighbors were kind of loud and it didn’t always feel like the best part of town. [Host] also seemed a little money hungry. I requested a late check out and he wanted to charge us an extra $20 for an hour because of expedited cleaning. We declined but because I locked my keys in the car we were waiting outside his place that hour anyways and the cleaner wasn’t even there. I’m a host too so I get it, but it just seemed he had a price tag attached to everything. Overall a easy place to sleep for the price.',
    reply: {
      id: '542-reply',
      message:
        'Thank you for your feedback and sorry about the neighbors being loud. I’m sure it was frustrating. I wish that you had notified me and I would immediately have addressed it.I’m sorry that it felt to you like I was money hungry. That was not my intent. After having read multiple hosts position on charging for late checkout and hearing opposing side, my wife and I decided that the fairest thing and best way forward for everyone is to charge for late checkout. I totally understand and respect a different position. But it feels unfair to me to call me out on it when we do it across the board and I am clear about it and give the option to accept or reject.I’m a little confused though as a charge for late checkout is one thing but you said a price tag on everything. I can’t remember anything else. Unfortunately you may have missed the cleaning lady as she was inside cleaning when you were outside. She arrived shortly after you left.',
      date: 'December 2019',
    },
  },
  {
    id: '543',
    date: 'December 2019',
    guest: 'Guest',
    message:
      '[Host] was very happy to help with anything. His home was impeccable and very nicely decorated. There was street parking which was not a problem for finding a spot.',
    reply: {
      id: '545-reply',
      message: 'Thank you for being such wonderful guests.',
      date: 'December 2019',
    },
  },
  {
    id: '546',
    date: 'November 2019',
    guest: 'Guest',
    message: 'Great place!',
    reply: {
      id: '548-reply',
      message: 'Thanks for being fun to host.',
      date: 'December 2019',
    },
  },
  {
    id: '549',
    date: 'November 2019',
    guest: 'Guest',
    message:
      '[Host] was great. If I needed anything he responded immediately. The house was spotless and had a nice touch and up to date. I loved the keyless entry and the ceiling night lights. Parking was not great but manageable. Convenient location and small park for the kids to play at.',
    reply: {
      id: '551-reply',
      message: 'Thanks for being so fun to host',
      date: 'November 2019',
    },
  },
  {
    id: '552',
    date: 'November 2019',
    guest: 'Guest',
    message:
      "Do not hesitate to book this Airbnb.  [Host]'s place is fantastic.  Clean and well stocked with whatever you need.  A perfect place for a getaway!!",
    reply: {
      id: '554-reply',
      message: 'Thank you [Guest] for being such a great guest',
      date: 'November 2019',
    },
  },
  {
    id: '555',
    date: 'November 2019',
    guest: 'Guest',
    message:
      '[Host], was one of the most responsive and accommodating Airbnb hosts I have worked with. Answered all questions in a timely manner and was outstanding! Thank you for a great stay!',
  },
  {
    id: '557',
    date: 'November 2019',
    guest: 'Guest',
    message:
      'House was clean and matched the description. [Host] was very responsive and checked in to make sure we were happy with our stay.',
  },
  {
    id: '559',
    date: 'November 2019',
    guest: 'Guest',
    message:
      'We enjoyed our stay.  We met the cleaning staff when we arrived and she was so nice and welcoming.  The home was sparkling clean.  We had a few issues, but our host did everything within his power to make things right and was very responsive.',
  },
  {
    id: '561',
    date: 'October 2019',
    guest: 'Guest',
    message: 'Great place to stay',
  },
  {
    id: '563',
    date: 'October 2019',
    guest: 'Guest',
    message:
      'This is one of the best Homes we have stayed in across the world. The house was very close to everything Lancaster has to offer and spotless! Lots of room to spread out as well as gather for dinner. Parking was a breeze! Would stay here every time!',
  },
  {
    id: '565',
    date: 'October 2019',
    guest: 'Guest',
    message:
      'Nice clean spot.  Host was easy to communicate with and accommodating.',
  },
  {
    id: '567',
    date: 'October 2019',
    guest: 'Guest',
    message:
      'This is a stay in a home where the host has truly thought of all amenities to make your stay unforgettable!!',
  },
  {
    id: '569',
    date: 'October 2019',
    guest: 'Guest',
    message:
      'Beautiful and clean home located blocks away from the center of Lancaster! Easy ride or Uber ride to get anyway in the city. Host are wonderful, are easy to contact and quick to respond with an answer. We really enjoyed our stay!',
    reply: {
      id: '571-reply',
      message: 'It was a pleasure hosting you',
      date: 'October 2019',
    },
  },
  {
    id: '572',
    date: 'October 2019',
    guest: 'Guest',
    message:
      '[Host] responses very quickly to any inquiries you may have, that made me comfortable during my stay. The place is nicely decorated and cozy! We had a great time overall!',
    reply: {
      id: '574-reply',
      message: 'Thank you for being great guests.',
      date: 'October 2019',
    },
  },
  {
    id: '575',
    date: 'October 2019',
    guest: 'Guest',
    message:
      'We had a great stay! The location is 12 minute walk from downtown, very clean and pretty house!',
  },
  {
    id: '577',
    date: 'September 2019',
    guest: 'Guest',
    message: '5 stars every time with [Host]',
  },
  {
    id: '579',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'This place looks just like the pictures. Very nicely decorated and stocked. We had a schedule change and host was accommodating. Short/cheap Uber to the city. Would stay again!',
  },
  {
    id: '581',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'The house was perfectly clean and beautifully decorated. It has everything you need, including kits for shaving and dental care in case you forgot yours. [Host] is incredibly responsive and so very kind.  The place feels like home, and one of our favorite parts was the backyard garden -- the perfect place to have your coffee in the morning.',
  },
  {
    id: '583',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'It was so nice being close to everything! The house was perfect for all of us and the neighbors were super nice! It was clean and well prepared for us to come visit!',
  },
  {
    id: '585',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'The home was very stylishly redone, it was clean, the backyard is lovely. We stayed with young children and we didn’t feel comfortable walking the neighborhood but everyone we did pass outside the home was very friendly. There was thoughtful things left like toothbrush kits and coffee creamers. Great WiFi connection and the home was very quiet. Minimal street noise which is a plus for a city home. Thank you for hosting us!',
  },
  {
    id: '587',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'Very responsive and easy to communicate with would definitely recommend',
  },
  {
    id: '589',
    date: 'September 2019',
    guest: 'Guest',
    message:
      '[Host] has a beautiful, charming place in downtown Lancaster that is very close to everything. He is a wonderful host and ensured we had a wonderful stay while in Lancaster. Can’t wait to visit again.',
  },
  {
    id: '591',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'The house is the best Airbnb that I ever stayed before. El mejor lugar por mucho.',
    reply: {
      id: '593-reply',
      message: 'Thank you and please come again',
      date: 'September 2019',
    },
  },
  {
    id: '594',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'This was a great place to stay for our group of adults and kids - lots of beds and bedroom space, with privacy for everyone. The home was clean, well-equipped, and very comfortable - including the gorgeous back yard. [Host] was an excellent host who was very responsive. Neighborhood was vibrant and friendly and we had no problems with street parking. We would happily stay there again!',
  },
  {
    id: '596',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'Really great place to stay. Tons of space - 3 floors to spread out in. Very clean, cozy and homey feel. [Host] was very responsive, especially since we needed a place to stay in a pinch. We booked 3 hrs before checking in with absolutely no issues. Loved the back yard and coffee provided. We ended up getting a parking spot right out front easily. Location is a quick Uber to attractions/nightlife. Neighborhood was okay.. probably wouldn’t walk around at night. Call it an “up and coming” neighborhood, but that made this place truly a “diamond in the rough” for amazing value and excellent stay overall.',
  },
  {
    id: '598',
    date: 'September 2019',
    guest: 'Guest',
    message:
      'Excellent host. Wonderful stay and comfy house. He was very professional and quick to respond. Parking was great. The location was close to everything. Look forward to doing business with him again. If you are planning to go to Lancaster he is your go to guy!',
  },
  {
    id: '600',
    date: 'August 2019',
    guest: 'Guest',
    message: 'It was a very nice place',
  },
  {
    id: '602',
    date: 'July 2020',
    guest: 'Guest',
    message:
      'Un lugar muy acogedor y muy casero ideal para la familia y el descanso con niños y amigosTranslate to English (US)',
    reply: {
      id: '604-reply',
      message: 'Please come again sometime.',
      date: 'July 2020',
    },
  },
  {
    id: '605',
    date: 'October 2019',
    guest: 'Guest',
    message:
      'Het huis is zeer ruim, erg gezellig ingericht en met oog voor detail. Alle keukenapparaten zijn aanwezig en ook servies en keukengerei is zeer uitgebreid. Alles is zeer schoon en goed onderhouden.Translate to English (US)',
    reply: {
      id: '607-reply',
      message:
        'Thanks for a the snacks you left us. Wow you are a super guest.',
      date: 'October 2019',
    },
  },
];
