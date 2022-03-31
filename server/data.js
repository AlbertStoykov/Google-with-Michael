// Not all the data is available from this object as it was copied from a console.log()
// See https://serpapi.com/search-api for the full documentation
const dummy_data = {
    search_metadata: {
      id: '624421f6c640d2ef6c25876e',
      status: 'Success',
      json_endpoint: 'https://serpapi.com/searches/bbb00dcdcf52fc4a/624421f6c640d2ef6c25876e.json',
      created_at: '2022-03-30 09:25:10 UTC',
      processed_at: '2022-03-30 09:25:10 UTC',
      google_url: 'https://www.google.co.uk/search?q=coffee&oq=coffee&uule=w+CAIQICIlR3JlYXRlciBMb25kb24sRW5nbGFuZCxVbml0ZWQgS2luZ2RvbQ&safe=active&sourceid=chrome&ie=UTF-8',
      raw_html_file: 'https://serpapi.com/searches/bbb00dcdcf52fc4a/624421f6c640d2ef6c25876e.html',
      total_time_taken: 5.05
    },
    search_parameters: {
      engine: 'google',
      q: 'coffee',
      location_requested: 'London',
      location_used: 'Greater London,England,United Kingdom',
      google_domain: 'google.co.uk',
      safe: 'active',
      device: 'desktop'
    },
    search_information: {
      organic_results_state: 'Results for exact spelling',
      query_displayed: 'coffee',
      total_results: 5120000000,
      time_taken_displayed: 0.78
    },
    recipes_results: [
      {
        title: 'Coffee recipes',
        link: 'https://www.bbcgoodfood.com/recipes/collection/coffee-recipes',
        source: 'BBC Good Food',
        total_time: 'No reviews',
        ingredients: [Array],
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXiLm26jaPgu4H9mDHJLTdr2VrQCYi0CVzeSuqTevGoUDH9eUoMxt0Ag&s=0'   
      },
      {
        title: 'Whipped Coffee',
        link: 'https://www.nescafe.com/us/recipes/whipped-coffee/',
        source: 'Nescafe',
        rating: 5,
        reviews: 3,
        total_time: '10 min',
        ingredients: [Array],
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc71LtLU-Vv32Dgnv0lcN0rdfEfMVqjbulcraft8816lkYhpwyNjGiSA&s=0'   
      },
      {
        title: 'Whipped Coffee',
        link: 'https://cooking.nytimes.com/recipes/1021005-whipped-coffee',
        source: 'NYT Cooking - The New York Times',
        rating: 4,
        reviews: 783,
        ingredients: [Array],
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlZppLOb8b8Jp9_4UD3PXNm6XHSSpr2WoVegsrhC-xBwIiw5-b5MEX0g&s=0'   
      }
    ],
    shopping_results: [
      {
        position: 1,
        block_position: 'top',
        title: 'Nescafe | Gold Blend Coffee 750g',
        price: '£25.73',
        extracted_price: 25.73,
        link: 'https://www.google.co.uk/aclk?sa=l&ai=DChcSEwj7zdD6we32AhVn_uMHHVZyCqoYABAJGgJ5bQ&ae=2&sig=AOD64_2DACT1B91cGbBJGQcAzU9_BXxhvQ&ctype=5&q=&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ5bgDegQIARA6&adurl=',
        source: 'Euroffice',
        reviews: 4000,
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/93e9ec3ff1635f62116bc88c33daccb6d25bf110bc5d34d823dafbaad5f7596a.png',
        publisher: 'By Productcaster'
      },
      {
        position: 2,
        block_position: 'top',
        title: 'Douwe Egberts Pure | Gold Continental Instant Coffee 750g',
        price: '£26.99',
        extracted_price: 26.99,
        link: 'https://www.google.co.uk/aclk?sa=l&ai=DChcSEwj7zdD6we32AhVn_uMHHVZyCqoYABAMGgJ5bQ&ae=2&sig=AOD64_0x0kPqv0QoqUn4L6WzRNHf7yZP9g&ctype=5&q=&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ5bgDegQIARBM&adurl=',
        source: 'Euroffice',
        reviews: 52,
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/93e9ec3ff1635f62116bc88c33daccb692b0ef5fcb37a4c1aaab37e3f71fd3fd.png',
        publisher: 'By Productcaster'
      },
      {
        position: 3,
        block_position: 'top',
        title: 'Nescafe Azera Americano 500g',
        price: '£21.34',
        extracted_price: 21.34,
        link: 'https://www.google.co.uk/aclk?sa=l&ai=DChcSEwj7zdD6we32AhVn_uMHHVZyCqoYABALGgJ5bQ&ae=2&sig=AOD64_3ie_BeIhdnBKapxQvSdfbqAvv7Wg&ctype=5&q=&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ5bgDegQIARBe&adurl=',
        source: 'Euroffice',
        reviews: 88,
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/93e9ec3ff1635f62116bc88c33daccb6a07deda511aadae218d344b47a404ca6.png',
        publisher: 'By Productcaster'
      },
      {
        position: 4,
        block_position: 'top',
        title: 'Lavazza Qualita Rossa Ground Filter Coffee Medium Roast 500 g',
        price: '£4.29',
        extracted_price: 4.29,
        link: 'https://www.google.co.uk/aclk?sa=l&ai=DChcSEwj7zdD6we32AhVn_uMHHVZyCqoYABANGgJ5bQ&ae=2&sig=AOD64_0xAIOnKhJqMvAHtr2IdBQnPDuEsA&ctype=5&q=&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ5bgDegQIARBw&adurl=',
        source: 'Avansas UK',
        reviews: 2000,
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/93e9ec3ff1635f62116bc88c33daccb643f4521e3050bdcb7483b29e7aacacb0.png',
        publisher: 'By Klarna'
      },
      {
        position: 5,
        block_position: 'top',
        title: 'Coxswain Coffee',
        price: '£6.50',
        extracted_price: 6.5,
        link: 'https://www.google.co.uk/aclk?sa=l&ai=DChcSEwj7zdD6we32AhVn_uMHHVZyCqoYABAHGgJ5bQ&ae=2&sig=AOD64_0wGEf_hP0LJhMAD0rrQAdIsRkGjQ&ctype=5&q=&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ5bgDegUIARCCAQ&adurl=',
        source: 'Baytown Coffee...',
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/93e9ec3ff1635f62116bc88c33daccb6e8e1a49fb706f0425a918761fcebd8ac.webp',
        publisher: 'By Google'
      },
      {
        position: 6,
        block_position: 'top',
        title: 'Nescafe Azera Americano Instant Coffee (100g) - Pack of 6',
        price: '£27.99',
        extracted_price: 27.99,
        link: 'https://www.google.co.uk/aclk?sa=L&ai=DChcSEwj7zdD6we32AhVn_uMHHVZyCqoYABAKGgJ5bQ&ae=2&sig=AOD64_3CYXCQsxmrilCltBsMzlJdw1X9Ig&ctype=5&q=&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ5bgDegUIARCOAQ&adurl=',
        source: 'Amazon.co.uk',
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/93e9ec3ff1635f62116bc88c33daccb676e3e527277b3fa04af8edd6671a674b.png',
        publisher: 'By Google'
      },
      {
        position: 7,
        block_position: 'top',
        title: 'Nescafe Gold Blend Coffee 750g Tin A00938 - 3295383',
        price: '£25.99',
        extracted_price: 25.99,
        link: 'https://www.google.co.uk/aclk?sa=l&ai=DChcSEwj7zdD6we32AhVn_uMHHVZyCqoYABAIGgJ5bQ&ae=2&sig=AOD64_3fMRF5AfoEpfjFgKLPQvB2UfiyQg&ctype=5&q=&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ5bgDegUIARCaAQ&adurl=',
        source: 'Caboodle UK O...',
        reviews: 4000,
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/93e9ec3ff1635f62116bc88c33daccb6e9d9d421dd51343c599cd96931a52856.png',
        publisher: 'By Google'
      }
    ],
    knowledge_graph: {
      title: 'Coffee',
      type: 'Drink',
      header_images: [ [Object], [Object], [Object], [Object] ],
      description: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, the seeds are separated to produce a stable, raw product: unroasted green coffee.',
      source: { name: 'Wikipedia', link: 'https://en.wikipedia.org/wiki/Coffee' },
      patron_saint: 'Saint Drogo of Sebourg redrockroasters.com',
      patron_saint_links: [ [Object], [Object] ],
      starbucks_coffee: [ [Object], [Object], [Object], [Object], [Object] ],
      starbucks_coffee_link: 'https://www.google.co.uk/search?safe=active&q=Starbucks+coffee&stick=H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1RLKTrfST83Nz8_OsUvLL88oTi1KKVzEaAsVyclKTSzLz8_Sz8_LLc1JT0lPjCxLzUnOK9Ysz8gsKMvPS47ML4lNzMtMzk3JSF7EKBJckFiWVJmcXKyTnp6Wlpu5gZQQA9PxcUngAAAA&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQMSgAegQIJxAB',
      starbucks_coffee_stick: 'H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1RLKTrfST83Nz8_OsUvLL88oTi1KKVzEaAsVyclKTSzLz8_Sz8_LLc1JT0lPjCxLzUnOK9Ysz8gsKMvPS47ML4lNzMtMzk3JSF7EKBJckFiWVJmcXKyTnp6Wlpu5gZQQA9PxcUngAAAA',
      songs_about_coffee: [ [Object], [Object], [Object], [Object], [Object] ],
      songs_about_coffee_link: 'https://www.google.co.uk/search?safe=active&q=Songs+about+coffee&stick=H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1RLKTrfST83Nz8_OsUvLL88oTi1KKVzEKFefnpRcrJCbll5YoJOenpaWmLmIVCsYQ3MHKCACoTgb-WwAAAA&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQMSgAegQIKRAB',
      songs_about_coffee_stick: 'H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1RLKTrfST83Nz8_OsUvLL88oTi1KKVzEKFefnpRcrJCbll5YoJOenpaWmLmIVCsYQ3MHKCACoTgb-WwAAAA',
      people_also_search_for: [ [Object], [Object], [Object], [Object], [Object] ],
      people_also_search_for_link: 'https://www.google.co.uk/search?safe=active&q=Coffee&stick=H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1BIMzU1LLEyuL_VIrSoJLUguKF7GyOeenpaWm7mBlBABkIv_mNwAAAA&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQMSgAegQIKBAB',
      people_also_search_for_stick: 'H4sIAAAAAAAAAONgFuLUz9U3MCorTMtVQjC1BIMzU1LLEyuL_VIrSoJLUguKF7GyOeenpaWm7mBlBABkIv_mNwAAAA',
      see_results_about: [ [Object] ],
      list: {
        total_fat: [Array],
        saturated_fat: [Array],
        trans_fat_regulation: [Array],
        cholesterol: [Array],
        sodium: [Array],
        potassium: [Array],
        total_carbohydrate: [Array],
        dietary_fiber: [Array],
        sugar: [Array],
        protein: [Array],
        caffeine: [Array],
        vitamin_c: [Array],
        calcium: [Array],
        iron: [Array],
        vitamin_d: [Array],
        vitamin_b6: [Array],
        cobalamin: [Array],
        magnesium: [Array]
      }
    },
    inline_videos: [
      {
        position: 1,
        title: 'Miguel - Coffee (Official Video)',
        link: 'https://www.youtube.com/watch?v=9Z55sZ2oVY4',
        thumbnail: 'https://i.ytimg.com/vi/9Z55sZ2oVY4/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3lmDn7L-Zz_UkQc8VRe31tGhwpykg',
        channel: 'MiguelVEVO',
        duration: '4:55',
        platform: 'YouTube',
        date: 'Jun 16, 2015'
      },
      {
        position: 2,
        title: 'Beabadoobee - Coffee',
        link: 'https://www.youtube.com/watch?v=C6CeA6vRtW4',
        thumbnail: 'https://i.ytimg.com/vi/C6CeA6vRtW4/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3lxlj8mR2orEkgAvcZU4MwOpbl3YQ',
        channel: 'Beabadoobee',
        duration: '1:58',
        platform: 'YouTube',
        date: 'Mar 26, 2020'
      },
      {
        position: 3,
        title: 'Coffee',
        link: 'https://www.youtube.com/watch?v=FJuOEuvMAnE',
        thumbnail: 'https://i.ytimg.com/vi/FJuOEuvMAnE/mqdefault.jpg?sqp=-oaymwEECHwQRg&rs=AMzJL3k8FttA0ZYTxT2sZlMr5urExQTGVQ',
        channel: 'BTS - Topic',
        duration: '4:21',
        platform: 'YouTube',
        date: 'Jan 9, 2018'
      }
    ],
    discover_more_places: [
      {
        title: 'Best coffee',
        link: 'https://www.google.co.uk/search?safe=active&tbm=lcl&q=best+coffee&rflfq=1&num=10&uule=w+CAQQCFISCW_iGqELoNhHEYvpuITjc_Ev&lsspp=CYJ9xbwt01Yk&rlt=Best+coffee&owsq=coffee&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ9s8CegQIRRAE',
        images: [Array]
      },
      {
        title: 'Coffee and dessert',
        link: 'https://www.google.co.uk/search?safe=active&tbm=lcl&q=coffee+and+desserts&rflfq=1&num=10&uule=w+CAQQCFISCW_iGqELoNhHEYvpuITjc_Ev&lsspp=CVFDDdmBdX24&rlt=Coffee+and+dessert&owsq=coffee&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ9s8CegQIRRAG',
        images: [Array]
      },
      {
        title: 'Coffee shops',
        link: 'https://www.google.co.uk/search?safe=active&tbm=lcl&q=coffee+shop&rflfq=1&num=10&uule=w+CAQQCFISCW_iGqELoNhHEYvpuITjc_Ev&lsspp=CQnZECNd2xeO&rlt=Coffee+shops&owsq=coffee&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ9s8CegQIRRAI',
        images: [Array]
      },
      {
        title: 'Coffee and Wi-Fi',
        link: 'https://www.google.co.uk/search?safe=active&tbm=lcl&q=cafe+with+wifi&rflfq=1&num=10&uule=w+CAQQCFISCW_iGqELoNhHEYvpuITjc_Ev&lsspp=CWp2p7GiJser&rlt=Coffee+and+Wi-Fi&owsq=coffee&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ9s8CegQIRRAK',
        images: [Array]
      }
    ],
    related_questions: [
      {
        question: 'Is coffee good for your health?',
        snippet: "“For most people, moderate coffee consumption can be incorporated into a healthy diet.” Hu said that moderate coffee intake—about 2–5 cups a day—is linked to a lower likelihood of type 2 diabetes, heart disease, liver and endometrial cancers, Parkinson's disease, and depression.",
        title: 'Is coffee good or bad for your health? | News',
        link: 'https://www.hsph.harvard.edu/news/hsph-in-the-news/is-coffee-good-or-bad-for-your-health/',
        displayed_link: 'https://www.hsph.harvard.edu › news › hsph-in-the-news'
      },
      {
        question: 'What coffee do to your body?',
        snippet: 'Coffee containing caffeine can cause insomnia, nervousness and restlessness, stomach upset, nausea and vomiting, increased heart and breathing rate, and other side effects. Caffeinated coffee is POSSIBLY UNSAFE when taken by mouth for a long time or in high doses (more than 4 cups per day).',
        title: 'COFFEE: Overview, Uses, Side Effects, Precautions, Interactions, Dosing ...',
        link: 'https://www.webmd.com/vitamins/ai/ingredientmono-980/coffee',
        displayed_link: 'https://www.webmd.com › vitamins › ingredientmono-980'
      },
      {
        question: 'Is coffee made from poop?',
        snippet: "Kopi luwak is made from coffee beans plucked from civets' feces. This is bad news for civets. It's the world's most expensive coffee, and it's made from poop. Or rather, it's made from coffee beans that are partially digested and then pooped out by the civet, a catlike creature.Apr 29, 2016",
        title: "The Disturbing Secret Behind the World's Most Expensive Coffee",
        link: 'https://www.nationalgeographic.com/animals/article/160429-kopi-luwak-captive-civet-coffee-Indonesia',
        displayed_link: 'https://www.nationalgeographic.com › animals › article'
      },
      {
        question: 'Is drinking black coffee good for you?',
        snippet: 'Black coffee is rich in antioxidants, which can fight cell damage and reduce your risk of serious health conditions like cancer and heart disease. Coffee is the primary source of antioxidants in most American diets. Black coffee also contains high levels of: Vitamin B2.Aug 22, 2020',
        title: 'Health Benefits of Black Coffee - WebMD',
        link: 'https://www.webmd.com/diet/health-benefits-black-coffee',
        displayed_link: 'https://www.webmd.com › diet › health-benefits-black-co...'
      }
    ],
    organic_results: [
      {
        position: 1,
        title: 'Coffee - Wikipedia',
        link: 'https://en.wikipedia.org/wiki/Coffee',
        displayed_link: 'https://en.wikipedia.org › wiki › Coffee',
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/d368342c2b72630f85ade892a6952514e40ed22c43848a76066b8607ecbea9a6.jpeg',
        snippet: 'Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain flowering plants in the Coffea genus. From the coffee fruit, ...',
        rich_snippet: [Object],
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://en.wikipedia.org/wiki/Coffee&tbm=ilp&ilps=AC47Oe9MSLdKbP0cHwImsUno-_6seYjSvQ',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:U6oJMnF-eeUJ:https://en.wikipedia.org/wiki/Coffee+&cd=12&hl=en&ct=clnk&gl=us',
        related_pages_link: 'https://www.google.co.uk/search?safe=active&q=related:https://en.wikipedia.org/wiki/Coffee+coffee'
      },
      {
        position: 2,
        title: 'The Coffee Bean & Tea Leaf | CBTL',
        link: 'https://www.coffeebean.com/',
        displayed_link: 'https://www.coffeebean.com',
        snippet: 'Born and brewed in Southern California since 1963, The Coffee Bean & Tea Leaf® is passionate about connecting loyal customers with carefully handcrafted ...',
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://www.coffeebean.com/&tbm=ilp&ilps=AC47Oe9pB3jaSslm7yM152hrIbW8GtMpLg',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:WpQxSYo2c6AJ:https://www.coffeebean.com/+&cd=13&hl=en&ct=clnk&gl=us',
        related_pages_link: 'https://www.google.co.uk/search?safe=active&q=related:https://www.coffeebean.com/+coffee'
      },
      {
        position: 3,
        title: "Peet's Coffee: The Original Craft Coffee",
        link: 'https://www.peets.com/',
        displayed_link: 'https://www.peets.com',
        snippet: "Since 1966, Peet's Coffee has offered superior coffees and teas by sourcing the best quality coffee beans and tea leaves in the world and adhering to strict ...",
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://www.peets.com/&tbm=ilp&ilps=AC47Oe_0FXw60oxpA-0MKkcmsL35l3cC_A',      cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:BCjzno6zP6wJ:https://www.peets.com/+&cd=14&hl=en&ct=clnk&gl=us',
        related_pages_link: 'https://www.google.co.uk/search?safe=active&q=related:https://www.peets.com/+coffee'
      },
      {
        position: 4,
        title: 'The History of Coffee',
        link: 'https://www.ncausa.org/about-coffee/history-of-coffee',
        displayed_link: 'https://www.ncausa.org › ... › History of Coffee',
        snippet: 'Coffee grown worldwide can trace its heritage back centuries to the ancient coffee forests on the Ethiopian plateau. There, legend says the goat herder ...',
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://www.ncausa.org/about-coffee/history-of-coffee&tbm=ilp&ilps=AC47Oe-dUv43Gah_YPRKIkA7frIFtvj9dA',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:v1hp0SS8WggJ:https://www.ncausa.org/about-coffee/history-of-coffee+&cd=15&hl=en&ct=clnk&gl=us'
      },
      {
        position: 5,
        title: '9 Health Benefits of Coffee, Based on Science - Healthline',
        link: 'https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee',
        displayed_link: 'https://www.healthline.com › nutrition › top-evidence-b...',
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/d368342c2b72630f85ade892a6952514b323da6016087b55129b7865e2882e80.jpeg',
        snippet: 'Coffee is a major source of antioxidants in the diet. It has many health benefits, such as improved brain function and a lower risk of several diseases.',
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee&tbm=ilp&ilps=AC47Oe_0M4MNkAR1wbwB2wzu06Rik-3Lew',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:r1UW6FGz3F4J:https://www.healthline.com/nutrition/top-evidence-based-health-benefits-of-coffee+&cd=16&hl=en&ct=clnk&gl=us'
      },
      {
        position: 6,
        title: 'Starbucks Coffee Company',
        link: 'https://www.starbucks.com/',
        displayed_link: 'https://www.starbucks.com',
        thumbnail: 'https://serpapi.com/searches/624421f6c640d2ef6c25876e/images/d368342c2b72630f85ade892a6952514f3c2ce6937437a85d8e5729759c24c9c.jpeg',
        snippet: 'More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.',        
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://www.starbucks.com/&tbm=ilp&ilps=AC47Oe-HDl8RNnZ8XW0U9lub_nlIzgJyyw',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:1vGXgo_FlHkJ:https://www.starbucks.com/+&cd=17&hl=en&ct=clnk&gl=us',
        related_pages_link: 'https://www.google.co.uk/search?safe=active&q=related:https://www.starbucks.com/+coffee'
      },
      {
        position: 7,
        title: 'coffee - Amazon.com',
        link: 'https://www.amazon.com/coffee/s?k=coffee',
        displayed_link: 'https://www.amazon.com › coffee › k=coffee',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl-QvEoymI1NYO3omaDoFpYZlRDvIKXKg4k4KyoNVJAaOPgL8rdB92B-nAifPuLHyhRg&s',
        displayed_results: 'Results 1 - 48 of 20000+',
        snippet: 'illy Classico Whole Bean Coffee, Medium Roast, Classic Roast with Notes Of Caramel, Orange Blossom and Jasmine, 100% Arabica Coffee, ...',
        rich_snippet: [Object],
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://www.amazon.com/coffee/s?k%3Dcoffee&tbm=ilp&ilps=AC47Oe_r-dRRaAz_eKDtTRwOwEaoBFWW6A',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:wfQ5Et9Ni-kJ:https://www.amazon.com/coffee/s%3Fk%3Dcoffee+&cd=24&hl=en&ct=clnk&gl=us'
      },
      {
        position: 8,
        title: 'Stumptown Coffee Roasters: Coffee Roasted Daily',
        link: 'https://www.stumptowncoffee.com/',
        displayed_link: 'https://www.stumptowncoffee.com',
        thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEDKSyHhtP3V21S1lrzqSoO2DfSfQoMW70mFY77VLisJRgl3v5-iVV&usqp=CAE&s',
        snippet: 'Stumptown Coffee Roasters highest quality fresh roasted coffee; learn to brew, subscribe, or visit us in Portland, Seattle, New York, Chicago and Los ...',
        about_this_result: [Object],
        about_page_link: 'https://www.google.co.uk/search?q=About+https://www.stumptowncoffee.com/&tbm=ilp&ilps=AC47Oe8KaTTtCo_zuZKFKSvkI_lOEn7Jag',
        cached_page_link: 'https://webcache.googleusercontent.com/search?q=cache:x4v1eDl2rwsJ:https://www.stumptowncoffee.com/+&cd=25&hl=en&ct=clnk&gl=us',
        related_pages_link: 'https://www.google.co.uk/search?safe=active&q=related:https://www.stumptowncoffee.com/+coffee'
      }
    ],
    related_searches: [
      {
        query: 'coffee near me',
        link: 'https://www.google.co.uk/search?safe=active&q=Coffee+near+me&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ1QJ6BAheEAE'
      },
      {
        query: 'coffee types',
        link: 'https://www.google.co.uk/search?safe=active&q=Coffee+types&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ1QJ6BAhdEAE'
      },
      {
        query: 'coffee shop',
        link: 'https://www.google.co.uk/search?safe=active&q=Coffee+shop&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ1QJ6BAhcEAE'
      },
      {
        query: 'coffee brands',
        link: 'https://www.google.co.uk/search?safe=active&q=Coffee+brands&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ1QJ6BAhbEAE'
      },
      {
        query: 'coffee recipe',
        link: 'https://www.google.co.uk/search?safe=active&q=Coffee+recipe&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ1QJ6BAhZEAE'
      },
      {
        query: 'coffee benefits',
        link: 'https://www.google.co.uk/search?safe=active&q=Coffee+benefits&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ1QJ6BAhVEAE'       
      },
      {
        query: 'coffee online',
        link: 'https://www.google.co.uk/search?safe=active&q=Coffee+online&sa=X&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ1QJ6BAhfEAE'
      }
    ],
    pagination: {
      current: 1,
      next: 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=10&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8NMDegUIARDPAQ',
      other_pages: {
        '2': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=10&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARC9AQ',
        '3': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=20&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARC_AQ',
        '4': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=30&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARDBAQ',
        '5': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=40&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARDDAQ',
        '6': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=50&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARDFAQ',
        '7': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=60&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARDHAQ',
        '8': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=70&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARDJAQ',
        '9': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=80&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARDLAQ',
        '10': 'https://www.google.co.uk/search?q=coffee&safe=active&ei=9yFEYsuQOOPI_QaYxbbgBA&start=90&sa=N&ved=2ahUKEwiL6MT6we32AhVjZN8KHZiiDUwQ8tMDegUIARDNAQ'
      }
    },
    serpapi_pagination: {
      current: 1,
      next_link: 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=10',
      next: 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=10',
      other_pages: {
        '2': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=10',
        '3': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=20',
        '4': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=30',
        '5': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=40',
        '6': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=50',
        '7': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=60',
        '8': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=70',
        '9': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=80',
        '10': 'https://serpapi.com/search.json?device=desktop&engine=google&google_domain=google.co.uk&location=London&q=coffee&safe=active&start=90'
      }
    }
  }

module.exports = dummy_data
