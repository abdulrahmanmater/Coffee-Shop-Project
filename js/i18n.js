// Internationalization

export const LANGUAGES = {
  EN: "en",
  AR: "ar",
};

export function normalizeLanguage(language) {
  return language === LANGUAGES.AR ? LANGUAGES.AR : LANGUAGES.EN;
}

const translations = {
  en: {
    common: {
      home: "Home",
      about: "About",
      journal: "Journal",
      faq: "FAQ",
      shop: "Shop",
      contact: "Contact",
      signIn: "Sign In",
      account: "Account",
      cart: "Cart",
      myAccount: "My Account",
      bookTable: "Book a Table",
      logout: "Log Out",
      saveChanges: "Save Changes",
      language: "Language",
      appearance: "Appearance",
      dark: "Dark",
      light: "Light",
      shopNow: "Shop Now",
    },

    checkout: {
      orderPlacedTitle: "Order Placed Successfully",

      orderPlacedMessage:
        "Thank you for your order. We have received your request successfully.",

      continue: "Continue",

      emptyOrder: "Your cart is empty.",

      continueShopping: "Continue Shopping",

      title: "Checkout",

      billingDetails: "Billing Details",

      firstName: "First Name *",

      lastName: "Last Name *",

      companyName: "Company Name",

      optional: "(optional)",

      countryRegion: "Country / Region *",

      selectCountry: "Select a country / region",

      streetAddress: "Street Address *",

      apartment: "Apartment, suite, unit, etc.",

      city: "Town / City *",

      state: "State *",

      selectState: "Select an option...",

      zipCode: "ZIP Code *",

      phone: "Phone *",

      email: "Email Address *",

      additionalInformation: "Additional Information",

      orderNotes: "Order Notes",

      paymentMethod: "Payment Method",

      cardPayment: "Credit / Debit Card",

      cashOnDelivery: "Cash on Delivery",

      yourOrder: "Your Order",

      subtotal: "Subtotal",

      shipping: "Shipping",

      total: "Total",

      placeOrder: "Place Order",
    },
    home: {
      heroTitleLine1: "Flavors from",
      heroTitleLine2: "Around the",
      heroTitleLine3: "World",
      sideText: "Because we love coffee",

      heroSubtitle: "Subscribe and save 10%",
      heroTitle: "Flavors from Around the World",
      heroImageAlt: "Coffee Background",

      sustainabilityTitle: "Our sustainability commitment",

      sustainabilityDescription:
        "We strive to form profound partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect. Everything we do is a matter of heart, body and soul.",

      visitUsTitle: "Visit us",
      visitUsDescription: "Find a shop near you",
      visitImageAlt: "Visit us",

      subscriptionsTitle: "Amaya Subscriptions",
      subscriptionsDescription: "Never run out of your favorite coffee",
      subscriptionsImageAlt: "Amaya Subscriptions",

      coldBrewTitle: "Cold Brew",
      coldBrewDescription: "More than just cold coffee",
      coldBrewImageAlt: "Cold Brew",

      bestSellersTitle: "Our best sellers",
      bestSellersDescription:
        "Discover our selection of organic, sustainably-sourced coffee.",

      viewAllOptions: "View all options",

      spotlightLabel: "Spotlight",
      spotlightTitle: "Ethiopia Hambela",
      spotlightDescription:
        "An organic certified blend of coffees from a small farm located in one of our favorite growing regions in Ethiopia: Limu. With a delicate cream and a floral aroma, essence of cherry and macadamia for a rich, creamy espresso.",
      spotlightImageAlt: "Ethiopia Hambela",

      benefitDeliveryTitle: "We deliver to your home",
      benefitDeliveryDescription:
        "Order on-demand or schedule delivery up to a week in advance.",

      benefitSocialTitle: "Follow on social media",
      benefitSocialDescription:
        "Or subscribe to our newsletter to stay updated.",

      benefitSeedTitle: "From Seed to Cup",
      benefitSeedDescription:
        "An exceptional coffee experience starts with only the best ingredients.",

      benefitContactTitle: "We’d love to hear from you!",
      benefitContactDescription:
        "Whether it's feedback or if you’d want to join our lovely team.",

      findUsTitle: "Find Us",
      findUsImageAlt: "Find Us",

      whereLabel: "Where",
      viewMap: "View Map",

      whenLabel: "When",
      weekdays: "Monday – Friday",
      weekend: "Saturday/Sunday",
    },

    auth: {
      signUpEyebrow: "JOIN OUR COMMUNITY",
      signUpTitle: "Create Your Account",
      signUpDescription:
        "Create an account and make every coffee experience a little more personal.",

      signInEyebrow: "WELCOME BACK",
      signInTitle: "Sign In",
      signInDescription: "Sign in to continue your coffee experience with us.",

      fullName: "Full Name",
      emailAddress: "Email Address",
      password: "Password",
      confirmPassword: "Confirm Password",

      namePlaceholder: "Enter your full name",

      emailPlaceholder: "Enter your email",

      createPassword: "Create a password",

      enterPassword: "Enter your password",

      confirmPasswordPlaceholder: "Confirm your password",

      passwordHint: "Use at least 8 characters.",

      createAccount: "Create Account",

      signingIn: "Signing In...",

      creatingAccount: "Creating Account...",

      alreadyHaveAccount: "Already have an account?",

      doNotHaveAccount: "Don't have an account?",

      createAccountLink: "Create Account",

      rememberMe: "Remember me",

      forgotPassword: "Forgot Password?",
    },

    account: {
      eyebrow: "YOUR COFFEE SPACE",

      title: "My Account",

      description: "Manage your profile and personal preferences.",

      profile: "PROFILE",

      personalInformation: "Personal Information",

      changePhoto: "Change Photo",

      remove: "Remove",

      avatarHint: "JPG, PNG or WebP. Max 2 MB.",

      emailHelp: "Email changes will be supported later.",

      preferences: "PREFERENCES",

      personalize: "Personalize Your Experience",

      languageDescription: "Choose your preferred language.",

      appearanceDescription: "Choose how the website looks.",

      accountUpdated: "Your account has been updated successfully.",

      saveError: "Unable to save your changes. Please try again.",
    },
    locations: {
      title: "Our Locations",

      openingHours: "Opening Hours",

      details: "Menu & Details",

      weekdays1: "Saturday - Wednesday",

      weekdays2: "Thursday - Friday",

      cairo: {
        city: "Cairo",

        name: "Fifth Settlement Branch",

        address: "North 90th Street, Fifth Settlement\nCairo, Egypt",

        imageAlt: "Cairo branch",

        mapTitle: "Cairo branch map",
      },

      giza: {
        city: "Giza",

        name: "Sheikh Zayed Branch",

        address: "Central Axis Road, Sheikh Zayed\nGiza, Egypt",

        imageAlt: "Giza branch",

        mapTitle: "Giza branch map",
      },
    },

    validation: {
      companyTooLong: "Company name must not exceed 100 characters.",

      countryRequired: "Please select a country or region.",

      streetAddressRequired: "Please enter your street address.",

      streetAddressTooLong: "Street address must not exceed 200 characters.",

      apartmentTooLong: "Apartment or unit must not exceed 100 characters.",

      cityRequired: "Please enter your town or city.",

      cityTooLong: "City must not exceed 100 characters.",

      stateRequired: "Please select a state.",

      zipCodeRequired: "Please enter your ZIP code.",

      invalidZipCode: "Please enter a valid ZIP code.",

      phoneRequired: "Please enter your phone number.",

      invalidEgyptianPhone: "Please enter a valid Egyptian phone number.",

      orderNotesTooLong: "Order notes must not exceed 500 characters.",

      phoneRequired: "Please enter your phone number.",

      invalidEgyptianPhone: "Please enter a valid Egyptian phone number.",

      nameRequired: "Please enter your full name.",

      nameTooShort: "Your name must be at least 2 characters.",

      emailRequired: "Please enter your email address.",

      invalidEmail: "Please enter a valid email address.",

      passwordRequired: "Please enter a password.",

      passwordTooShort: "Password must be at least 8 characters.",

      confirmPasswordRequired: "Please confirm your password.",

      passwordsDoNotMatch: "Passwords do not match.",

      emailExists: "An account with this email already exists.",

      invalidCredentials: "The email or password is incorrect.",

      genericError: "Something went wrong. Please try again.",

      invalidImage: "Please select a valid image.",

      imageTooLarge: "Image size must be 2 MB or less.",

      imageReadError: "Unable to read the selected image.",

      nameTooLong: "Your name must not exceed 50 characters.",

      invalidName: "Your name contains invalid characters.",

      emailTooLong: "Your email address must not exceed 100 characters.",

      dateRequired: "Please select a date.",

      dateInPast: "Please select today or a future date.",

      dateTooFar: "Bookings can only be made up to one year in advance.",

      peopleRequired: "Please enter the number of people.",

      peopleNotInteger: "The number of people must be a whole number.",

      peopleOutOfRange: "The number of people must be between 1 and 10.",

      messageTooShort: "Your message must be at least 10 characters.",

      messageTooLong: "Your message must not exceed 500 characters.",
    },

    shop: {
      title: "Shop",

      description: "Explore our coffee, cold brew, decaf, and merchandise.",

      filters: "Filters",

      reset: "Reset",

      categories: "Categories",

      priceRange: "Price Range",

      min: "Min",

      max: "Max",

      minPrice: "Min price",

      maxPrice: "Max price",

      applyFilters: "Apply Filters",

      sortBy: "Sort By:",

      price: "Price",

      latest: "Latest",

      rating: "Rating",

      order: "Order:",

      ascending: "Ascending",

      descending: "Descending",

      previous: "Previous",

      next: "Next",

      priceUnavailable: "Price unavailable",

      invalidPrices: "Please enter valid prices.",

      invalidPriceRange: "Minimum price cannot be greater than maximum price.",

      noProductsFoundTitle: "No Products Found",

      noProductsFoundDescription:
        "Try changing your filters or resetting the search.",

      noProductsFoundCount: "No products found",

      showingProducts: "Showing {start}–{end} of {total} products",

      ratingAria: "Rating {rating} out of 5",

      productPagination: "Product pagination",

      categoryNames: {
        coffee: "Coffee",

        decaf: "Decaf",

        "cold-brew": "Cold Brew",

        "hot-drinks": "Hot Drinks",

        tea: "Tea",

        merchandise: "Merchandise",
      },
    },

    product: {
      size: "Size",

      type: "Type",

      quantity: "Quantity",

      decreaseQuantity: "Decrease quantity",

      increaseQuantity: "Increase quantity",

      selectOptions: "Select Options",

      addToCart: "Add to Cart",

      addedToCart: "Added to Cart ✓",

      selectOptionsToViewPrice: "Select your options to view the price.",

      combinationUnavailable: "This combination is unavailable.",

      priceUnavailable: "Price unavailable",

      writeReview: "Write a Review",

      yourName: "Your Name",

      yourRating: "Your Rating",

      yourReview: "Your Review",

      reviewNamePlaceholder: "Enter your name",

      reviewCommentPlaceholder: "Share your experience...",

      submitReview: "Submit Review",

      rateOutOf5: "Rate {rating} out of 5",

      customerReviews: "Customer Reviews",

      noReviewsYet: "No reviews yet",

      beFirstToReview: "Be the first to review this product.",

      review: "review",

      reviews: "reviews",

      ratingAria: "Rating {rating} out of 5",

      reviewNameLength: "Name must be between 2 and 50 characters.",

      selectRating: "Please select a rating.",

      reviewCommentLength: "Review must be between 5 and 500 characters.",

      reviewAdded: "Your review was added successfully.",

      youMayAlsoLike: "You May Also Like",

      moreCategory: "More {category}",

      sameCategoryDescription: "Discover more products from the same category.",

      notFound: "Product Not Found",

      notFoundDescription: "The product you're looking for does not exist.",

      backToShop: "Back to Shop",

      typeNames: {
        "whole-bean": "Whole Bean",
        ground: "Ground",
        original: "Original",
        vanilla: "Vanilla",
        caramel: "Caramel",
        classic: "Classic",
        chocolate: "Chocolate",
        black: "Black",
        cream: "Cream",
        glass: "Glass",
      },
    },

    journal: {
      title: "Coffee Lovers Journal",

      description:
        "Explore brewing methods, flavor secrets, and the latest news from the world of specialty coffee.",

      searchPlaceholder: "Search articles...",

      mostRead: "Most Read This Week",

      minRead: "min read",

      backToJournal: "Back to Journal",

      articleNotFound: "Article Not Found",

      newsletterTitle: "Newsletter",

      newsletterDescription:
        "Subscribe to get exclusive coffee recipes and store discounts directly in your inbox.",

      newsletterEmailPlaceholder: "Enter your email",

      subscribeNow: "Subscribe Now",

      subscribeSuccess:
        "Successfully subscribed to the Coffee Shop newsletter!",

      readMore: "Read More",

      likeArticle: "Like article",

      unlikeArticle: "Unlike article",

      noArticles: "No articles match your search query.",

      categories: {
        all: "All",
        brewing: "Brewing Methods",
        beans: "Coffee Beans",
        culture: "Coffee Culture",
        recipes: "Recipes",
        sustainability: "Sustainability",
        news: "News",
      },

      posts: {
        1: {
          title: "The Art of the Perfect Pour-Over",

          excerpt:
            "Water temperature, grind size, and timing all matter more than you think. Here is our house method for a clean, balanced cup.",

          content1:
            "A great pour-over starts long before the water hits the grounds. It starts with the beans themselves, and how recently they were roasted and ground. For the brightest cup, grind just before brewing and use water that has rested off the boil for about thirty seconds.",

          content2:
            "We use a ratio of roughly 1 gram of coffee to 16 grams of water, adjusted slightly depending on the roast. A medium-fine grind, similar to table salt, gives an even extraction without clogging the filter.",

          content3:
            "Start with a bloom: pour just enough water to saturate the grounds and let them breathe for 30 to 45 seconds. This releases trapped carbon dioxide and helps the rest of the brew extract evenly.",

          content4:
            "From there, pour in slow, steady circles, keeping the water level consistent. Aim for a total brew time of 2:30 to 3:30 minutes. If your coffee tastes sour, try a finer grind or a longer brew time. If it tastes bitter, go coarser or pull the brew shorter.",

          content5:
            "The best part about pour-over is that it rewards small adjustments. Keep a simple log of your ratios and times, and within a few cups you will land on the recipe that suits your beans and your palate.",
        },

        2: {
          title: "Where Your Coffee Comes From: A Journey to Origin",

          excerpt:
            "Behind every bag of beans is a farm, a family, and a season of careful work. We visited one of our partner farms to see it firsthand.",

          content1:
            "Coffee is a fruit before it is ever a drink. On the hillsides where our beans are grown, cherries ripen unevenly across the same branch, which means much of the harvest is still done by hand, one cherry at a time.",

          content2:
            "We spent a week with one of our long-term partner farms, watching the process from picking through washing, fermenting, and drying. Every stage shapes the final flavor in ways that are easy to take for granted from behind the counter.",

          content3:
            "What struck us most was the patience involved. Cherries are pulped the same day they are picked, then fermented for anywhere from 12 to 48 hours depending on the desired profile, before a long, slow dry on raised beds.",

          content4:
            "Paying fair, transparent prices for that work is not just an ethical stance for us, it is also how we guarantee consistent quality year after year. A well-paid farm can afford to be selective about what makes it into your cup.",
        },

        3: {
          title: "Cold Brew vs Iced Coffee: What Is the Difference?",

          excerpt:
            "They look similar in the glass, but the brewing method changes everything about the taste. Here is how to tell them apart, and when to choose each.",

          content1:
            "Iced coffee is simply coffee brewed hot, using your normal method, then cooled and poured over ice. It keeps the brighter, more acidic notes of the roast, since hot water extracts differently than cold water.",

          content2:
            "Cold brew, on the other hand, is steeped with cold or room-temperature water for 12 to 24 hours. The slower extraction pulls out fewer acidic compounds, which is why cold brew tastes smoother and naturally sweeter.",

          content3:
            "Neither method is better across the board. If you love the bright, fruity notes of a light roast, iced coffee will show them off. If you prefer a mellow, low-acid glass you can sip slowly, reach for cold brew.",

          content4:
            "Our baristas are always happy to walk you through both, and we keep a rotating cold brew on tap so you can taste the difference for yourself.",
        },

        4: {
          title: "5 Coffee-Inspired Desserts to Try This Weekend",

          excerpt:
            "From an easy affogato to a slow-baked tiramisu, these five recipes turn your favorite roast into dessert.",

          content1:
            "1. Affogato: Pour a hot shot of espresso directly over a scoop of good vanilla ice cream. It takes thirty seconds and tastes like a small celebration.",

          content2:
            "2. Coffee Granita: Freeze sweetened, strong coffee in a shallow dish, scraping it with a fork every 30 minutes until it forms light, icy crystals.",

          content3:
            "3. Mocha Pots de Crème: Fold a shot of espresso into a classic chocolate custard base for a rich, make-ahead dinner party dessert.",

          content4:
            "4. Tiramisu: The classic layered dessert of espresso-soaked ladyfingers and mascarpone cream still holds up as one of the best ways to use a strong, dark roast.",

          content5:
            "5. Coffee Caramel Sauce: Simmer sugar, cream, and butter with a shot of espresso for a sauce that is just as good on ice cream as it is stirred back into your next cup.",
        },

        5: {
          title: "Why We Chose Direct Trade",

          excerpt:
            "We buy the majority of our beans directly from the farms that grow them. Here is why that matters for quality, and for the people behind every bag.",

          content1:
            "Direct trade means we build relationships with individual farms rather than buying anonymously through a broker. We visit the farms, taste multiple lots each season, and agree on a price before the harvest even begins.",

          content2:
            "This gives farmers something that fluctuating commodity markets rarely offer: certainty. They can plan for the season ahead, invest in better processing equipment, and pay their workers fairly, knowing what the crop is worth.",

          content3:
            "For us, it means tighter quality control and full traceability. When you see an origin on our shelf, we can tell you exactly which farm it came from and how it was processed.",

          content4:
            "It costs more than buying on the open market, and we think that is the point. Good coffee should be worth what it actually takes to grow it.",
        },

        6: {
          title: "Meet the Roaster: Behind Our House Blend",

          excerpt:
            "Our house blend has stayed on the menu since day one. We sat down with the roaster who built it to find out why it works.",

          content1:
            "Building a house blend that tastes the same every single batch is harder than it sounds. Green coffee is an agricultural product, and every new crop arrives slightly different.",

          content2:
            "Our roaster tastes each incoming lot against the last one, adjusting the blend ratio in small increments to keep the profile consistent, rather than keeping the recipe rigidly fixed.",

          content3:
            "The goal for our house blend was a coffee that works equally well black, with milk, or over ice, without ever tasting flat. That balance takes a mix of washed and natural process beans from two different regions.",

          content4:
            "It is a small, deliberate craft, repeated every week, so that the cup in your hand tastes like the one you had last month.",
        },

        7: {
          title: "A Beginner's Guide to Espresso at Home",

          excerpt:
            "Getting a good shot at home is mostly about dialing in a few key variables. Here is where to start if you just got your first machine.",

          content1:
            "The three variables that matter most are dose, grind size, and shot time. A common starting point is an 18 gram dose, ground fine, extracted into roughly 36 grams of liquid over about 28 seconds.",

          content2:
            "If your shot runs too fast and tastes sour or thin, grind finer. If it runs too slow and tastes bitter or harsh, grind coarser. Small adjustments make a big difference at this scale.",

          content3:
            "Fresh beans matter even more for espresso than for other methods, since the concentrated brewing exaggerates any staleness. Try to use beans within two to four weeks of their roast date.",

          content4:
            "Finally, do not skip the tamp. A level, firm tamp helps water flow through the puck evenly, which is one of the simplest ways to avoid a sour or uneven shot.",
        },

        8: {
          title: "Our New Winter Menu Is Here",

          excerpt:
            "Warm spices, seasonal roasts, and a returning favorite: here is everything new on the menu this season.",

          content1:
            "Starting this week, our winter menu brings back the spiced maple latte, along with a new cardamom cold brew for anyone who wants something warming served over ice.",

          content2:
            "We are also featuring a limited seasonal roast, a washed Ethiopian lot with notes of orange blossom and brown sugar, available as whole bean or ground.",

          content3:
            "As always, every seasonal drink can be made dairy-free with oat, almond, or soy milk at no extra charge.",

          content4:
            "Stop by the shop or check the app to see the full lineup, available while supplies last.",
        },

        9: {
          title: "From Bean to Cup: How We Reduce Waste",

          excerpt:
            "Spent grounds, packaging, and water use all add up. Here are the small changes we have made to cut down our footprint.",

          content1:
            "Used coffee grounds are one of the easiest things to keep out of the landfill. We bag ours for anyone who wants them for composting or gardening, free at the counter.",

          content2:
            "Our packaging has moved to compostable bags with a resealable strip, replacing the plastic-lined bags we used previously, without sacrificing the freshness seal our beans need.",

          content3:
            "In the shop, our espresso machine recirculates rinse water through a heat exchanger, cutting water use per shot by a meaningful margin compared to our old equipment.",

          content4:
            "None of these changes are dramatic on their own, but together they add up to a noticeably lighter footprint per cup, and we are always looking for the next small improvement.",
        },
      },
    },

    booking: {
      phone: "YOUR PHONE",
      title: "Book a Table",

      openingTimes: "Opening Times",

      weekdays: "Monday — Friday",

      weekend: "Saturday/Sunday",

      name: "YOUR NAME",

      email: "YOUR EMAIL",

      date: "DATE",

      numberOfPeople: "NUMBER OF PEOPLE",

      message: "YOUR MESSAGE",

      send: "SEND",

      successTitle: "Reservation Request Received",

      successMessage:
        "Thank you for your reservation request. We will confirm your table within 24 hours via email.",

      continue: "CONTINUE",
    },

    about: {
      teamTitle: "The Coffee Coders",
      steamDescription: "",
      heroSubtitle: "Because we love coffee",
      heroTitle: "Flavors from Around the World",
      heroDescription:
        "Everything we do is a matter of heart, body and soul, creating profound partnerships and unforgettable experiences.",
      storyTitle: "Our Sustainability Commitment",
      storyParagraph1:
        "We strive to form profound partnerships with farmers from all over the world to create perspective together and form healthy working relationships built on trust and respect.",
      storyParagraph2:
        "An exceptional experience starts with only the best ingredients, handled with absolute care from seed to cup.",
      philosophyTitle: "From Seed to Cup",
      philosophyDescription:
        "Discover our selection of organic, sustainably-sourced products",
      card1Title: "01. Sustainable Sourcing",
      card1Description:
        "Working closely with local and international partners to ensure ethical and high-quality harvesting.",
      card2Title: "02. Expert Craftsmanship",
      card2Description:
        "Every step of the process is carefully monitored by experts to maintain rich and authentic flavors.",
      card3Title: "03. Passion & Soul",
      card3Description:
        "Dedicated to delivering excellence and building a long-lasting relationship of trust with our community.",
      ctaTitle: "We'd love to hear from you!",
      ctaDescription:
        "Whether it's feedback or if you want to join our lovely team.",
      ctaButton: "Get in Touch",
    },
    faq: {
      title: "FAQ",

      question1: "What brew methods do you recommend?",

      answer1:
        "For the purest expression of our beans, we recommend:\n" +
        "- Chemex Pour-Over: For delicate, floral clarity.\n" +
        "- Siphon: For a vibrant, tea-like body.\n" +
        "- Precision Espresso: For rich, syrupy intensity.\n" +
        "- Kyoto Cold Drip: For a complex, zero-acidity cold brew.",

      question2: "Do you offer international shipping?",

      answer2:
        "Yes. We ship our reserve whole beans worldwide via climate-controlled courier within 24 hours of roasting to ensure peak aroma and flavor upon arrival.",

      question3: "Do you offer gift options?",

      answer3:
        "Yes, we offer bespoke gifting experiences tailored to your needs.\n" +
        "- Curated Reserve Boxes: Hand-assembled wooden chests featuring a selection of our micro-lot beans, custom glassware, and artisanal pairings.\n" +
        "- Subscription Certificates: Digital or physical credentials granting access to our monthly reserve shipments for three, six, or twelve months.\n" +
        "- Complimentary Curation & Packaging: Every gift includes custom foil-stamped wrapping, a personalized handwritten note on heavy cotton cardstock, and vacuum-sealed freshness valves.",

      question4: "What is your return policy?",

      answer4:
        "Because our whole-bean micro-lots and specialty goods are roasted and prepared to order to ensure absolute peak freshness, we handle inquiries on a case-by-case basis. If there is ever an issue with the quality of your order or if your package arrives damaged in transit, please reach out to our concierge within 48 hours of delivery. We will gladly arrange a replacement or credit to ensure your experience remains nothing short of exceptional.",

      question5: "Can I get an invoice for my order?",

      answer5:
        "Yes, absolutely. A digital invoice detailing your purchase, tax breakdown, and shipping charges is automatically generated and sent to your email the moment your order is placed. If you need a customized invoice with specific company billing details or a PO number for corporate gifting, just let our concierge know prior to checkout, and we will tailor it to your exact requirements.",

      question6: "How should I store my coffee?",

      answer6:
        "To preserve the delicate volatile aromatics and oils that make your beans extraordinary, follow these four rules:\n" +
        "- Airtight & Opaque: Store in our resealable, valve-equipped bag or an airtight ceramic canister to shield the beans from oxygen and light.\n" +
        "- Room Temperature: Keep your coffee in a cool, dark pantry. Avoid the refrigerator or freezer, as moisture and fluctuating temperatures will degrade the delicate flavors.\n" +
        "- Grind Just Before Brewing: Preserve maximum flavor by grinding only the precise amount needed immediately before it touches hot water.\n" +
        "- Consume Promptly: Enjoy your micro-lot within two to four weeks of the roast date printed on the base of the bag for peak complexity.",

      question7: "Do you offer Certified Organic and Fair Trade coffees?",

      answer7:
        "Yes, we proudly offer a curated selection of certified organic and Fair Trade micro-lot coffees. While our primary focus is on direct-trade relationships—working hand-in-hand with independent farmers who often exceed organic standards through meticulous regenerative agriculture—we ensure our collection includes certified options that guarantee ethical labor practices, fair wages, and sustainable environmental stewardship.",
    },

    cart: {
      title: "Cart",
      product: "Product",
      price: "Price",
      quantity: "Quantity",
      subtotal: "Subtotal",
      couponCode: "Coupon code",
      applyCoupon: "Apply Coupon",
      updateCart: "Update Cart",
      cartTotals: "Cart Totals",
      total: "Total",
      proceedToCheckout: "Proceed to Checkout",
      emptyCart: "Your cart is empty.",
      continueShopping: "Continue Shopping",
    },

    contact: {
      details: "MENU & DETAILS",

      cairo: {
        city: "CAIRO",

        name: "Fifth Settlement Branch",

        address: "North 90th Street, Fifth Settlement\nCairo, Egypt",

        imageAlt: "Cairo Amaya coffee shop",
      },

      giza: {
        city: "GIZA",

        name: "Sheikh Zayed Branch",

        address: "Central Axis Road, Sheikh Zayed\nGiza, Egypt",

        imageAlt: "Giza Amaya coffee shop",
      },
    },

    footer: {
      about: "About",

      company: "Company",

      locations: "Locations",

      followAlong: "Follow Along",

      allRightsReserved: "All Rights Reserved.",

      tagline: "Because We Love Coffee",
    },
    meta: {
      signInTitle: "Coffee Shop  | Sign In ",

      signUpTitle: "Coffee Shop  |Create Account ",

      accountTitle: "Coffee Shop  | My Account  ",

      shopTitle: "Coffee Shop  | Shop",

      productTitle: "Coffee Shop  | Product",

      aboutTitle: "Coffee Shop  | About Us",

      homeTitle: "Coffee Shop  | Home",

      faqTitle: "Coffee Shop  | FAQ",

      bookingTitle: "Coffee Shop  | Book a Table",

      journalTitle: "Coffee Shop  | Journal",

      journalDescription:
        "Explore brewing methods, coffee culture, recipes, sustainability, and stories from the world of specialty coffee",

      articleTitle: "Coffee Shop  | Article",

      cartTitle: "Coffee Shop  | Cart",

      locationsTitle: "Coffee Shop  | Locations",

      checkoutTitle: "Coffee Shop  | Checkout",
    },
  },

  ar: {
    common: {
      home: "الرئيسية",
      about: "من نحن",
      journal: "المجلة",
      faq: "الأسئلة الشائعة",
      shop: "المتجر",
      contact: "تواصل معنا",
      signIn: "تسجيل الدخول",
      account: "الحساب",
      cart: "السلة",
      myAccount: "حسابي",
      bookTable: "احجز طاولة",
      logout: "تسجيل الخروج",
      saveChanges: "حفظ التغييرات",
      language: "اللغة",
      appearance: "المظهر",
      dark: "داكن",
      light: "فاتح",
      shopNow: "تسوق الآن",
    },
    home: {
      heroTitleLine1: "نكهات",
      heroTitleLine2: "من جميع أنحاء",
      heroTitleLine3: "العالم",
      sideText: "لأننا نحب القهوة",

      heroSubtitle: "اشترك ووفر 10%",
      heroTitle: "نكهات من جميع أنحاء العالم",
      heroImageAlt: "خلفية القهوة",

      sustainabilityTitle: "التزامنا بالاستدامة",

      sustainabilityDescription:
        "نسعى إلى بناء شراكات عميقة مع المزارعين من جميع أنحاء العالم، لنبني معًا مستقبلًا أفضل وعلاقات عمل صحية قائمة على الثقة والاحترام. كل ما نفعله هو نتاج القلب والجسد والروح.",

      visitUsTitle: "قم بزيارتنا",
      visitUsDescription: "اعثر على متجر بالقرب منك",
      visitImageAlt: "قم بزيارتنا",

      subscriptionsTitle: "اشتراكات أمايا",
      subscriptionsDescription: "لا تدع قهوتك المفضلة تنفد أبدًا",
      subscriptionsImageAlt: "اشتراكات أمايا",

      coldBrewTitle: "كولد برو",
      coldBrewDescription: "أكثر من مجرد قهوة باردة",
      coldBrewImageAlt: "كولد برو",

      bestSellersTitle: "الأكثر مبيعًا",

      bestSellersDescription:
        "اكتشف تشكيلتنا من القهوة العضوية والمُنتجة بطريقة مستدامة.",

      viewAllOptions: "عرض جميع الخيارات",

      spotlightLabel: "نجم المجموعة",

      spotlightTitle: "Ethiopia Hambela",

      spotlightDescription:
        "مزيج عضوي معتمد من أنواع قهوة من مزرعة صغيرة تقع في إحدى مناطق زراعة القهوة المفضلة لدينا في إثيوبيا، ليمو. يتميز بقوام كريمي رقيق ورائحة زهرية مع لمسات من الكرز والمكاديميا، ليمنحك إسبريسو غنيًا وكريميًا.",

      spotlightImageAlt: "Ethiopia Hambela",

      benefitDeliveryTitle: "نوصل القهوة إلى منزلك",

      benefitDeliveryDescription:
        "اطلب التوصيل عند الطلب أو حدده مسبقًا حتى أسبوع كامل.",

      benefitSocialTitle: "تابعنا على وسائل التواصل الاجتماعي",

      benefitSocialDescription: "أو اشترك في نشرتنا البريدية للبقاء على اطلاع.",

      benefitSeedTitle: "من الحبة إلى الكوب",

      benefitSeedDescription:
        "تبدأ تجربة القهوة الاستثنائية باستخدام أفضل المكونات فقط.",

      benefitContactTitle: "يسعدنا أن نسمع منك!",

      benefitContactDescription:
        "سواء كانت لديك ملاحظات أو كنت ترغب في الانضمام إلى فريقنا الرائع.",

      findUsTitle: "اعثر علينا",

      findUsImageAlt: "اعثر علينا",

      whereLabel: "المكان",

      viewMap: "عرض الخريطة",

      whenLabel: "مواعيدنا",

      weekdays: "الإثنين – الجمعة",

      weekend: "السبت / الأحد",
    },

    auth: {
      signUpEyebrow: "انضم إلى مجتمعنا",
      signUpTitle: "أنشئ حسابك",
      signUpDescription: "أنشئ حسابًا واجعل كل تجربة قهوة أكثر خصوصية.",

      signInEyebrow: "مرحبًا بعودتك",
      signInTitle: "تسجيل الدخول",
      signInDescription: "سجّل الدخول لمواصلة تجربة القهوة معنا.",

      fullName: "الاسم الكامل",
      emailAddress: "البريد الإلكتروني",
      password: "كلمة المرور",
      confirmPassword: "تأكيد كلمة المرور",

      namePlaceholder: "أدخل اسمك الكامل",

      emailPlaceholder: "أدخل بريدك الإلكتروني",

      createPassword: "أنشئ كلمة مرور",

      enterPassword: "أدخل كلمة المرور",

      confirmPasswordPlaceholder: "أكد كلمة المرور",

      passwordHint: "استخدم 8 أحرف على الأقل.",

      createAccount: "إنشاء الحساب",

      signingIn: "جارٍ تسجيل الدخول...",

      creatingAccount: "جارٍ إنشاء الحساب...",

      alreadyHaveAccount: "لديك حساب بالفعل؟",

      doNotHaveAccount: "ليس لديك حساب؟",

      createAccountLink: "إنشاء حساب",

      rememberMe: "تذكرني",

      forgotPassword: "نسيت كلمة المرور؟",
    },

    locations: {
      details: "MENU & DETAILS",

      cairo: {
        city: "CAIRO",

        name: "Fifth Settlement Branch",

        address: "North 90th Street, Fifth Settlement\nCairo, Egypt",

        imageAlt: "Cairo Amaya coffee shop",
      },

      giza: {
        city: "GIZA",

        name: "Sheikh Zayed Branch",

        address: "Central Axis Road, Sheikh Zayed\nGiza, Egypt",

        imageAlt: "Giza Amaya coffee shop",
      },
    },

    contact: {
      details: "القائمة والتفاصيل",

      cairo: {
        city: "القاهرة",

        name: "فرع التجمع الخامس",

        address: "شارع التسعين الشمالي، التجمع الخامس\nالقاهرة، مصر",

        imageAlt: "مقهى أمايا في القاهرة",
      },

      giza: {
        city: "الجيزة",

        name: "فرع الشيخ زايد",

        address: "المحور المركزي، الشيخ زايد\nالجيزة، مصر",

        imageAlt: "مقهى أمايا في الجيزة",
      },
    },

    checkout: {
      orderPlacedTitle: "تم إرسال الطلب بنجاح",

      orderPlacedMessage: "شكرًا لك على طلبك. تم استلام طلبك بنجاح.",

      continue: "متابعة",

      emptyOrder: "السلة فارغة.",

      continueShopping: "متابعة التسوق",

      title: "الدفع",

      billingDetails: "تفاصيل الفاتورة",

      firstName: "الاسم الأول *",

      lastName: "اسم العائلة *",

      companyName: "اسم الشركة",

      optional: "(اختياري)",

      countryRegion: "الدولة / المنطقة *",

      selectCountry: "اختر الدولة / المنطقة",

      streetAddress: "عنوان الشارع *",

      apartment: "الشقة، الجناح، الوحدة، إلخ.",

      city: "المدينة *",

      state: "المحافظة / الولاية *",

      selectState: "اختر خيارًا...",

      zipCode: "الرمز البريدي *",

      phone: "رقم الهاتف *",

      email: "البريد الإلكتروني *",

      additionalInformation: "معلومات إضافية",

      orderNotes: "ملاحظات الطلب",

      paymentMethod: "طريقة الدفع",

      cardPayment: "بطاقة ائتمان / خصم",

      cashOnDelivery: "الدفع عند الاستلام",

      yourOrder: "طلبك",

      subtotal: "الإجمالي الفرعي",

      shipping: "الشحن",

      total: "الإجمالي",

      placeOrder: "إتمام الطلب",
    },

    locations: {
      details: "القائمة والتفاصيل",

      cairo: {
        city: "القاهرة",

        name: "فرع التجمع الخامس",

        address: "شارع التسعين الشمالي، التجمع الخامس\nالقاهرة، مصر",

        imageAlt: "مقهى أمايا في القاهرة",
      },

      giza: {
        city: "الجيزة",

        name: "فرع الشيخ زايد",

        address: "المحور المركزي، الشيخ زايد\nالجيزة، مصر",

        imageAlt: "مقهى أمايا في الجيزة",
      },
    },

    account: {
      eyebrow: "مساحتك الخاصة",

      title: "حسابي",

      description: "إدارة ملفك الشخصي وتفضيلاتك الشخصية.",

      profile: "الملف الشخصي",

      personalInformation: "المعلومات الشخصية",

      changePhoto: "تغيير الصورة",

      remove: "إزالة",

      avatarHint: "JPG أو PNG أو WebP. الحد الأقصى 2 MB.",

      emailHelp: "سيتم دعم تغيير البريد الإلكتروني لاحقًا.",

      preferences: "التفضيلات",

      personalize: "خصص تجربتك",

      languageDescription: "اختر اللغة المفضلة لديك.",

      appearanceDescription: "اختر مظهر الموقع.",

      accountUpdated: "تم تحديث حسابك بنجاح.",

      saveError: "تعذر حفظ التغييرات. حاول مرة أخرى.",
    },

    locations: {
      title: "فروعنا",

      openingHours: "مواعيد العمل",

      details: "القائمة والتفاصيل",

      weekdays1: "السبت - الأربعاء",

      weekdays2: "الخميس - الجمعة",

      cairo: {
        city: "القاهرة",

        name: "فرع التجمع الخامس",

        address: "شارع التسعين الشمالي، التجمع الخامس\nالقاهرة، مصر",

        imageAlt: "فرع القاهرة",

        mapTitle: "خريطة فرع القاهرة",
      },

      giza: {
        city: "الجيزة",

        name: "فرع الشيخ زايد",

        address: "طريق المحور المركزي، الشيخ زايد\nالجيزة، مصر",

        imageAlt: "فرع الجيزة",

        mapTitle: "خريطة فرع الجيزة",
      },
    },

    validation: {
      companyTooLong: "يجب ألا يزيد اسم الشركة عن 100 حرف.",

      countryRequired: "من فضلك اختر الدولة أو المنطقة.",

      streetAddressRequired: "من فضلك أدخل عنوان الشارع.",

      streetAddressTooLong: "يجب ألا يزيد عنوان الشارع عن 200 حرف.",

      apartmentTooLong: "يجب ألا تزيد بيانات الشقة أو الوحدة عن 100 حرف.",

      cityRequired: "من فضلك أدخل المدينة.",

      cityTooLong: "يجب ألا يزيد اسم المدينة عن 100 حرف.",

      stateRequired: "من فضلك اختر المحافظة أو الولاية.",

      zipCodeRequired: "من فضلك أدخل الرمز البريدي.",

      invalidZipCode: "من فضلك أدخل رمزًا بريديًا صحيحًا.",

      phoneRequired: "من فضلك أدخل رقم هاتفك.",

      invalidEgyptianPhone: "من فضلك أدخل رقم هاتف مصري صحيح.",

      orderNotesTooLong: "يجب ألا تزيد ملاحظات الطلب عن 500 حرف.",

      phoneRequired: "Please enter your phone number.",

      invalidEgyptianPhone: "Please enter a valid Egyptian phone number.",

      nameRequired: "من فضلك أدخل اسمك الكامل.",

      nameTooShort: "يجب أن يحتوي الاسم على حرفين على الأقل.",

      emailRequired: "من فضلك أدخل بريدك الإلكتروني.",

      invalidEmail: "من فضلك أدخل بريدًا إلكترونيًا صحيحًا.",

      passwordRequired: "من فضلك أدخل كلمة المرور.",

      passwordTooShort: "يجب أن تكون كلمة المرور 8 أحرف على الأقل.",

      confirmPasswordRequired: "من فضلك أكد كلمة المرور.",

      passwordsDoNotMatch: "كلمتا المرور غير متطابقتين.",

      emailExists: "يوجد حساب بالفعل بهذا البريد الإلكتروني.",

      invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",

      genericError: "حدث خطأ ما. حاول مرة أخرى.",

      invalidImage: "من فضلك اختر صورة صحيحة.",

      imageTooLarge: "يجب ألا يتجاوز حجم الصورة 2 MB.",

      imageReadError: "تعذر قراءة الصورة المحددة.",

      nameTooLong: "يجب ألا يزيد الاسم عن 50 حرفًا.",

      invalidName: "الاسم يحتوي على أحرف غير صالحة.",

      emailTooLong: "يجب ألا يزيد البريد الإلكتروني عن 100 حرف.",

      dateRequired: "من فضلك اختر التاريخ.",

      dateInPast: "من فضلك اختر تاريخ اليوم أو تاريخًا مستقبليًا.",

      dateTooFar: "يمكن إجراء الحجوزات بحد أقصى قبل سنة واحدة.",

      peopleRequired: "من فضلك أدخل عدد الأشخاص.",

      peopleNotInteger: "يجب أن يكون عدد الأشخاص رقمًا صحيحًا.",

      peopleOutOfRange: "يجب أن يكون عدد الأشخاص بين 1 و10.",

      messageTooShort: "يجب أن تحتوي الرسالة على 10 أحرف على الأقل.",

      messageTooLong: "يجب ألا تزيد الرسالة عن 500 حرف.",
    },

    shop: {
      title: "المتجر",

      description:
        "استكشف القهوة والقهوة الباردة والقهوة منزوعة الكافيين ومنتجاتنا.",

      filters: "الفلاتر",

      reset: "إعادة ضبط",

      categories: "التصنيفات",

      priceRange: "نطاق السعر",

      min: "من",

      max: "إلى",

      minPrice: "الحد الأدنى للسعر",

      maxPrice: "الحد الأقصى للسعر",

      applyFilters: "تطبيق الفلاتر",

      sortBy: "ترتيب حسب:",

      price: "السعر",

      latest: "الأحدث",

      rating: "التقييم",

      order: "الترتيب:",

      ascending: "تصاعدي",

      descending: "تنازلي",

      previous: "السابق",

      next: "التالي",

      priceUnavailable: "السعر غير متاح",

      invalidPrices: "من فضلك أدخل أسعارًا صحيحة.",

      invalidPriceRange:
        "لا يمكن أن يكون الحد الأدنى للسعر أكبر من الحد الأقصى.",

      noProductsFoundTitle: "لم يتم العثور على منتجات",

      noProductsFoundDescription: "حاول تغيير الفلاتر أو إعادة ضبط البحث.",

      noProductsFoundCount: "لم يتم العثور على منتجات",

      showingProducts: "عرض {start}–{end} من أصل {total} منتجًا",

      ratingAria: "التقييم {rating} من 5",

      productPagination: "صفحات المنتجات",

      categoryNames: {
        coffee: "قهوة",

        decaf: "قهوة منزوعة الكافيين",

        "cold-brew": "قهوة باردة",

        "hot-drinks": "مشروبات ساخنة",

        tea: "شاي",

        merchandise: "منتجات",
      },
    },

    cart: {
      title: "السلة",
      product: "المنتج",
      price: "السعر",
      quantity: "الكمية",
      subtotal: "الإجمالي الفرعي",
      couponCode: "كود الخصم",
      applyCoupon: "تطبيق الكود",
      updateCart: "تحديث السلة",
      cartTotals: "إجمالي السلة",
      total: "الإجمالي",
      proceedToCheckout: "المتابعة إلى الدفع",
      emptyCart: "السلة فارغة.",
      continueShopping: "متابعة التسوق",
    },
    product: {
      size: "الحجم",

      type: "النوع",

      quantity: "الكمية",

      decreaseQuantity: "تقليل الكمية",

      increaseQuantity: "زيادة الكمية",

      selectOptions: "اختر الخيارات",

      addToCart: "أضف إلى السلة",

      addedToCart: "تمت الإضافة إلى السلة ✓",

      selectOptionsToViewPrice: "اختر الخيارات لعرض السعر.",

      combinationUnavailable: "هذا الاختيار غير متاح.",

      priceUnavailable: "السعر غير متاح",

      writeReview: "اكتب تقييمًا",

      yourName: "اسمك",

      yourRating: "تقييمك",

      yourReview: "مراجعتك",

      reviewNamePlaceholder: "أدخل اسمك",

      reviewCommentPlaceholder: "شاركنا تجربتك...",

      submitReview: "إرسال التقييم",

      rateOutOf5: "قيّم {rating} من 5",

      customerReviews: "تقييمات العملاء",

      noReviewsYet: "لا توجد تقييمات بعد",

      beFirstToReview: "كن أول من يقيّم هذا المنتج.",

      review: "تقييم",

      reviews: "تقييمات",

      ratingAria: "التقييم {rating} من 5",

      reviewNameLength: "يجب أن يكون الاسم بين حرفين و50 حرفًا.",

      selectRating: "من فضلك اختر تقييمًا.",

      reviewCommentLength: "يجب أن تكون المراجعة بين 5 و500 حرف.",

      reviewAdded: "تمت إضافة تقييمك بنجاح.",

      youMayAlsoLike: "قد يعجبك أيضًا",

      moreCategory: "المزيد من {category}",

      sameCategoryDescription: "اكتشف المزيد من المنتجات من نفس التصنيف.",

      notFound: "المنتج غير موجود",

      notFoundDescription: "المنتج الذي تبحث عنه غير موجود.",

      backToShop: "العودة إلى المتجر",

      typeNames: {
        "whole-bean": "حبوب كاملة",
        ground: "مطحونة",
        original: "أصلية",
        vanilla: "فانيليا",
        caramel: "كراميل",
        classic: "كلاسيكية",
        chocolate: "شوكولاتة",
        black: "أسود",
        cream: "كريمي",
        glass: "زجاج",
      },
    },
    journal: {
      title: "مجلة عشاق القهوة",

      description:
        "استكشف طرق تحضير القهوة وأسرار النكهات وآخر الأخبار من عالم القهوة المختصة.",

      searchPlaceholder: "ابحث في المقالات...",

      mostRead: "الأكثر قراءة هذا الأسبوع",

      minRead: "دقائق للقراءة",

      backToJournal: "العودة إلى المجلة",

      articleNotFound: "المقال غير موجود",

      newsletterTitle: "النشرة البريدية",

      newsletterDescription:
        "اشترك لتحصل على وصفات قهوة حصرية وخصومات المتجر مباشرة إلى بريدك الإلكتروني.",

      newsletterEmailPlaceholder: "أدخل بريدك الإلكتروني",

      subscribeNow: "اشترك الآن",

      subscribeSuccess: "تم الاشتراك بنجاح في النشرة البريدية لمقهى القهوة!",

      readMore: "اقرأ المزيد",

      likeArticle: "الإعجاب بالمقال",

      unlikeArticle: "إلغاء الإعجاب بالمقال",

      noArticles: "لا توجد مقالات مطابقة لبحثك.",

      categories: {
        all: "الكل",
        brewing: "طرق التحضير",
        beans: "حبوب القهوة",
        culture: "ثقافة القهوة",
        recipes: "وصفات",
        sustainability: "الاستدامة",
        news: "الأخبار",
      },

      posts: {
        1: {
          title: "فن تحضير القهوة بالتقطير المثالي",

          excerpt:
            "درجة حرارة الماء وحجم الطحن ووقت التحضير كلها عوامل أهم مما تتوقع. إليك طريقتنا الخاصة للحصول على فنجان نظيف ومتوازن.",

          content1:
            "يبدأ تحضير القهوة بالتقطير المثالي قبل أن يلامس الماء حبوب القهوة بوقت طويل. يبدأ الأمر بالحبوب نفسها ومدى حداثة تحميصها وطحنها. وللحصول على كوب أكثر إشراقًا، اطحن القهوة قبل التحضير مباشرة واستخدم ماءً ابتعد عن درجة الغليان بنحو ثلاثين ثانية.",

          content2:
            "نستخدم نسبة تقارب جرامًا واحدًا من القهوة لكل 16 جرامًا من الماء، مع تعديلها قليلًا حسب درجة التحميص. ويساعد الطحن المتوسط إلى الناعم، المشابه لملح الطعام، على استخلاص متساوٍ دون انسداد الفلتر.",

          content3:
            "ابدأ بمرحلة التفتح: اسكب كمية من الماء تكفي لترطيب القهوة واتركها تتنفس لمدة 30 إلى 45 ثانية. تساعد هذه الخطوة على إطلاق ثاني أكسيد الكربون المحتبس وتضمن استخلاصًا متساويًا لبقية القهوة.",

          content4:
            "بعد ذلك اسكب الماء في دوائر بطيئة وثابتة مع الحفاظ على مستوى الماء متوازنًا. استهدف وقت تحضير إجماليًا يتراوح بين دقيقتين ونصف وثلاث دقائق ونصف. إذا كان طعم القهوة حامضًا، جرّب طحنًا أنعم أو وقت تحضير أطول. وإذا كان الطعم مرًا، استخدم طحنًا أخشن أو قلل وقت التحضير.",

          content5:
            "أجمل ما في التقطير أنه يكافئ التعديلات الصغيرة. احتفظ بسجل بسيط للنسب والأوقات، وخلال بضعة أكواب ستصل إلى الوصفة التي تناسب حبوبك وذوقك.",
        },

        2: {
          title: "من أين تأتي قهوتك؟ رحلة إلى المصدر",

          excerpt:
            "خلف كل كيس من حبوب القهوة مزرعة وعائلة وموسم كامل من العمل الدقيق. زرنا إحدى المزارع الشريكة لنا لنرى ذلك بأنفسنا.",

          content1:
            "القهوة فاكهة قبل أن تكون مشروبًا. على المنحدرات التي تنمو فيها حبوبنا، تنضج الثمار بشكل غير متساوٍ على الغصن نفسه، ولهذا لا يزال جزء كبير من الحصاد يتم يدويًا، حبة تلو الأخرى.",

          content2:
            "أمضينا أسبوعًا مع إحدى المزارع الشريكة لنا منذ فترة طويلة، نراقب العملية من القطاف والغسل إلى التخمير والتجفيف. كل مرحلة تؤثر في النكهة النهائية بطرق يسهل تجاهلها من خلف الكاونتر.",

          content3:
            "أكثر ما لفت انتباهنا هو مقدار الصبر المطلوب. تتم إزالة القشرة عن الثمار في اليوم نفسه الذي يتم فيه قطفها، ثم تُخمّر من 12 إلى 48 ساعة حسب النكهة المطلوبة، قبل تجفيفها ببطء على أسرّة مرتفعة.",

          content4:
            "إن دفع أسعار عادلة وشفافة مقابل هذا العمل ليس مجرد موقف أخلاقي بالنسبة لنا، بل هو أيضًا ما يساعدنا على ضمان جودة ثابتة عامًا بعد عام. فالمزرعة التي تحصل على أجر عادل تستطيع أن تكون أكثر انتقائية فيما يصل إلى فنجانك.",
        },

        3: {
          title: "كولد برو أم قهوة مثلجة: ما الفرق؟",

          excerpt:
            "قد تبدوان متشابهتين في الكوب، لكن طريقة التحضير تغيّر كل شيء في الطعم. إليك كيفية التفريق بينهما ومتى تختار كل واحدة.",

          content1:
            "القهوة المثلجة هي ببساطة قهوة تُحضّر ساخنة بالطريقة المعتادة، ثم تُبرّد وتُسكب فوق الثلج. وتحتفظ بالنكهات الأكثر إشراقًا وحموضة الناتجة عن التحميص، لأن الماء الساخن يستخلص القهوة بطريقة مختلفة عن الماء البارد.",

          content2:
            "أما الكولد برو فيُنقع بالماء البارد أو بدرجة حرارة الغرفة لمدة تتراوح بين 12 و24 ساعة. ويؤدي الاستخلاص البطيء إلى سحب مركبات حمضية أقل، ولهذا يكون مذاقه أنعم وأحلى بطبيعته.",

          content3:
            "لا توجد طريقة أفضل دائمًا من الأخرى. إذا كنت تحب النكهات الفاكهية والمشرقة للتحميص الخفيف، فالقهوة المثلجة ستبرزها. وإذا كنت تفضل كوبًا هادئًا منخفض الحموضة يمكن احتساؤه ببطء، فاختر الكولد برو.",

          content4:
            "يسعد خبراؤنا دائمًا بإرشادك في الطريقتين، ونقدم كولد برو متجددًا على الصنبور حتى تتمكن من تذوق الفرق بنفسك.",
        },

        4: {
          title: "5 حلويات مستوحاة من القهوة لتجربتها هذا الأسبوع",

          excerpt:
            "من الأفوجاتو السهل إلى التيراميسو المخبوز ببطء، تحول هذه الوصفات الخمس تحميصتك المفضلة إلى حلوى.",

          content1:
            "1. أفوجاتو: اسكب جرعة إسبريسو ساخنة مباشرة فوق كرة من آيس كريم الفانيليا الجيد. يستغرق تحضيرها ثلاثين ثانية فقط وطعمها يشبه احتفالًا صغيرًا.",

          content2:
            "2. غرانيتا القهوة: جمّد قهوة قوية ومحلاة في طبق مسطح، ثم اكشطها بالشوكة كل 30 دقيقة حتى تتكون بلورات جليدية خفيفة.",

          content3:
            "3. بوت دو كريم بالموكا: أضف جرعة إسبريسو إلى قاعدة كاسترد الشوكولاتة الكلاسيكية لتحصل على حلوى غنية يمكن إعدادها مسبقًا.",

          content4:
            "4. تيراميسو: لا تزال الحلوى الكلاسيكية المكونة من أصابع البسكويت المشبعة بالإسبريسو وكريمة الماسكاربوني واحدة من أفضل الطرق لاستخدام التحميص الداكن القوي.",

          content5:
            "5. صلصة كراميل القهوة: اغْلِ السكر والقشطة والزبدة مع جرعة من الإسبريسو لتحصل على صلصة رائعة فوق الآيس كريم أو ممزوجة في كوب القهوة التالي.",
        },

        5: {
          title: "لماذا اخترنا التجارة المباشرة",

          excerpt:
            "نشتري معظم حبوبنا مباشرة من المزارع التي تزرعها. إليك لماذا يهم ذلك بالنسبة للجودة وللأشخاص الذين يقفون خلف كل كيس.",

          content1:
            "تعني التجارة المباشرة أننا نبني علاقات مع مزارع فردية بدلًا من الشراء بشكل مجهول عبر وسيط. نزور المزارع ونتذوق محاصيل متعددة كل موسم ونتفق على السعر قبل بدء الحصاد.",

          content2:
            "وهذا يمنح المزارعين شيئًا نادرًا ما توفره أسواق السلع المتقلبة: اليقين. يستطيعون التخطيط للموسم القادم والاستثمار في معدات معالجة أفضل ودفع أجور عادلة لعمالهم مع معرفة قيمة المحصول.",

          content3:
            "أما بالنسبة لنا، فهذا يعني رقابة أكثر دقة على الجودة وإمكانية تتبع كاملة. عندما ترى مصدرًا معينًا على رفوفنا، يمكننا أن نخبرك بالضبط من أي مزرعة جاء وكيف تمت معالجته.",

          content4:
            "تكلف التجارة المباشرة أكثر من الشراء من السوق المفتوحة، ونعتقد أن هذا هو الهدف. يجب أن تساوي القهوة الجيدة ما يتطلبه إنتاجها فعلًا.",
        },

        6: {
          title: "تعرف على المحمّص: خلف مزيجنا الخاص",

          excerpt:
            "ظل مزيجنا الخاص في القائمة منذ اليوم الأول. جلسنا مع المحمّص الذي ابتكره لنعرف لماذا ينجح بهذا الشكل.",

          content1:
            "إن بناء مزيج خاص يحافظ على المذاق نفسه في كل دفعة أصعب مما يبدو. فالقهوة الخضراء منتج زراعي، وكل محصول جديد يصل بخصائص مختلفة قليلًا.",

          content2:
            "يقارن محمّصنا كل دفعة جديدة بالدفعة السابقة، ويعدّل نسب المزيج بخطوات صغيرة للحفاظ على المذاق العام بدلًا من الالتزام بوصفة جامدة.",

          content3:
            "كان الهدف من مزيجنا الخاص تقديم قهوة تناسب الشرب دون إضافات أو مع الحليب أو فوق الثلج، دون أن تبدو مسطحة في أي حالة. ويتطلب هذا التوازن مزيجًا من حبوب مغسولة وحبوب معالجة طبيعيًا من منطقتين مختلفتين.",

          content4:
            "إنها حرفة صغيرة ومدروسة تتكرر كل أسبوع، حتى يكون الكوب الذي في يدك مشابهًا للكوب الذي تناولته الشهر الماضي.",
        },

        7: {
          title: "دليل المبتدئين لتحضير الإسبريسو في المنزل",

          excerpt:
            "الحصول على جرعة إسبريسو جيدة في المنزل يعتمد غالبًا على ضبط بعض المتغيرات الأساسية. إليك من أين تبدأ إذا اشتريت جهازك الأول.",

          content1:
            "أهم ثلاثة متغيرات هي جرعة القهوة وحجم الطحن ووقت الاستخلاص. نقطة بداية شائعة هي 18 جرامًا من القهوة مطحونة ناعمًا، لاستخلاص نحو 36 جرامًا من السائل خلال حوالي 28 ثانية.",

          content2:
            "إذا تدفقت الجرعة بسرعة وكان طعمها حامضًا أو خفيفًا، اطحن بشكل أنعم. وإذا تدفقت ببطء وكان طعمها مرًا أو قاسيًا، استخدم طحنًا أخشن. التعديلات الصغيرة تحدث فرقًا كبيرًا في هذا المقياس.",

          content3:
            "نضارة الحبوب أهم للإسبريسو من بعض طرق التحضير الأخرى، لأن الاستخلاص المركز يبرز أي علامات على القِدم. حاول استخدام الحبوب خلال أسبوعين إلى أربعة أسابيع من تاريخ التحميص.",

          content4:
            "وأخيرًا، لا تتجاهل عملية الكبس. يساعد الكبس المستوي والثابت الماء على المرور بالتساوي عبر قرص القهوة، وهي من أبسط الطرق لتجنب الجرعة الحامضة أو غير المتوازنة.",
        },

        8: {
          title: "قائمة الشتاء الجديدة وصلت",

          excerpt:
            "توابل دافئة وتحميصات موسمية وطبق مفضل عاد من جديد: إليك كل ما هو جديد في قائمتنا هذا الموسم.",

          content1:
            "ابتداءً من هذا الأسبوع، تعيد قائمة الشتاء مشروب لاتيه القيقب المتبّل، إلى جانب كولد برو جديد بالهيل لمن يريد مشروبًا غنيًا ودافئ النكهة يُقدّم فوق الثلج.",

          content2:
            "كما نقدم تحميصًا موسميًا محدودًا، وهو محصول إثيوبي مغسول بنفحات من زهر البرتقال والسكر البني، متاحًا كحبوب كاملة أو مطحونة.",

          content3:
            "وكالعادة، يمكن تحضير أي مشروب موسمي بدون منتجات الألبان باستخدام حليب الشوفان أو اللوز أو الصويا دون تكلفة إضافية.",

          content4:
            "زر متجرنا أو تحقق من التطبيق لرؤية القائمة الكاملة، والمتاحة حتى نفاد الكمية.",
        },

        9: {
          title: "من الحبة إلى الكوب: كيف نقلل الهدر",

          excerpt:
            "بقايا القهوة والتغليف واستهلاك المياه كلها تتراكم. إليك التغييرات الصغيرة التي أجريناها لتقليل أثرنا البيئي.",

          content1:
            "تُعد بقايا القهوة من أسهل الأشياء التي يمكن إبقاؤها خارج مكبات النفايات. نقوم بتجهيزها لمن يرغب في استخدامها للسماد أو البستنة، مجانًا من الكاونتر.",

          content2:
            "انتقلنا في التغليف إلى أكياس قابلة للتحلل مع شريط قابل لإعادة الإغلاق، بدلًا من الأكياس المبطنة بالبلاستيك التي استخدمناها سابقًا، دون التضحية بختم الحفاظ على نضارة الحبوب.",

          content3:
            "في المتجر، تعيد آلة الإسبريسو تدوير مياه الشطف عبر مبادل حراري، مما يقلل استهلاك المياه لكل جرعة مقارنة بمعداتنا القديمة.",

          content4:
            "لا توجد أي من هذه التغييرات مثيرة بمفردها، لكنها معًا تصنع فرقًا ملحوظًا في الأثر البيئي لكل كوب، ونحن نبحث دائمًا عن التحسين الصغير التالي.",
        },
      },
    },
    booking: {
      phone: "رقم الهاتف",

      title: "احجز طاولة",

      openingTimes: "مواعيد العمل",

      weekdays: "الإثنين — الجمعة",

      weekend: "السبت / الأحد",

      name: "اسمك",

      email: "بريدك الإلكتروني",

      date: "التاريخ",

      numberOfPeople: "عدد الأشخاص",

      message: "رسالتك",

      send: "إرسال",

      successTitle: "تم استلام طلب الحجز",

      successMessage:
        "شكرًا لك على طلب الحجز. سنقوم بتأكيد حجز طاولتك عبر البريد الإلكتروني خلال 24 ساعة.",

      continue: "متابعة",
    },

    about: {
      teamTitle: "The Coffee Coders",
      teamDescription: "",
      heroSubtitle: "لأننا نحب القهوة",
      heroTitle: "نكهات من جميع أنحاء العالم",
      heroDescription:
        "كل ما نقوم به ينبع من القلب والجسد والروح، لنصنع شراكات عميقة وتجارب لا تُنسى.",
      storyTitle: "التزامنا بالاستدامة",
      storyParagraph1:
        "نسعى إلى بناء شراكات قوية مع المزارعين من جميع أنحاء العالم، لنكوّن رؤية مشتركة وعلاقات عمل صحية قائمة على الثقة والاحترام.",
      storyParagraph2:
        "تبدأ التجربة الاستثنائية باستخدام أفضل المكونات فقط، والتعامل معها بأقصى درجات العناية من البذرة وحتى الفنجان.",
      philosophyTitle: "من البذرة إلى الفنجان",
      philosophyDescription:
        "اكتشف مجموعتنا من المنتجات العضوية والمُنتجة من مصادر مستدامة",
      card1Title: "01. التوريد المستدام",
      card1Description:
        "نعمل بشكل وثيق مع شركائنا المحليين والدوليين لضمان حصاد أخلاقي وعالي الجودة.",
      card2Title: "02. الحرفية والخبرة",
      card2Description:
        "يتم مراقبة كل خطوة من خطوات العملية بعناية من قبل الخبراء للحفاظ على النكهات الغنية والأصيلة.",
      card3Title: "03. الشغف والروح",
      card3Description:
        "نكرس جهودنا لتقديم التميز وبناء علاقة طويلة الأمد من الثقة مع مجتمعنا.",
      ctaTitle: "يسعدنا أن نسمع منك!",
      ctaDescription:
        "سواء كانت لديك ملاحظات أو كنت ترغب في الانضمام إلى فريقنا الرائع.",
      ctaButton: "تواصل معنا",
    },

    faq: {
      title: "الأسئلة الشائعة",

      question1: "ما طرق تحضير القهوة التي توصي بها؟",

      answer1:
        "للحصول على أنقى تعبير عن مذاق حبوبنا، نوصي بطرق التحضير التالية:\n" +
        "- كيميكس بالتقطير: للحصول على مذاق رقيق وواضح بلمسات زهرية.\n" +
        "- سايفون: لقوام حيوي يشبه الشاي.\n" +
        "- إسبريسو دقيق: لنكهة غنية ومركزة بقوام كثيف.\n" +
        "- كيوتو كولد درِب: لمذاق معقد وقهوة باردة منخفضة الحموضة.",

      question2: "هل توفرون الشحن الدولي؟",

      answer2:
        "نعم. نقوم بشحن حبوب القهوة الكاملة المختارة إلى جميع أنحاء العالم من خلال خدمة شحن متحكم في درجة حرارتها خلال 24 ساعة من التحميص، لضمان وصولها بأفضل رائحة ونكهة ممكنة.",

      question3: "هل توفرون خيارات للهدايا؟",

      answer3:
        "نعم، نقدم تجارب هدايا مخصصة تناسب احتياجاتك.\n" +
        "- صناديق الاحتياطي المختارة: صناديق خشبية يتم تجهيزها يدويًا وتضم مجموعة من حبوب القهوة المختارة، وأدوات زجاجية مخصصة، ومنتجات مصاحبة مصنوعة بعناية.\n" +
        "- شهادات الاشتراك: شهادات رقمية أو ورقية تمنح إمكانية الحصول على شحنات القهوة الشهرية لمدة ثلاثة أو ستة أو اثني عشر شهرًا.\n" +
        "- التغليف والتنسيق المجاني: تشمل كل هدية تغليفًا مخصصًا، ورسالة مكتوبة بخط اليد، وصمامات تفريغ الهواء للحفاظ على نضارة القهوة.",

      question4: "ما سياسة الإرجاع الخاصة بكم؟",

      answer4:
        "لأن حبوبنا المختارة والمنتجات المتخصصة يتم تحميصها وتجهيزها حسب الطلب لضمان أعلى مستوى من النضارة، فإننا نتعامل مع طلبات الإرجاع كل حالة على حدة. إذا واجهت أي مشكلة في جودة طلبك أو وصل الطرد تالفًا أثناء الشحن، يرجى التواصل مع فريق خدمة العملاء خلال 48 ساعة من استلام الطلب. سنسعد بترتيب استبدال المنتج أو تقديم رصيد لضمان حصولك على أفضل تجربة ممكنة.",

      question5: "هل يمكنني الحصول على فاتورة لطلبي؟",

      answer5:
        "نعم بالتأكيد. يتم إنشاء فاتورة رقمية توضح تفاصيل مشترياتك والضرائب وتكاليف الشحن وإرسالها تلقائيًا إلى بريدك الإلكتروني بمجرد إتمام الطلب. وإذا كنت بحاجة إلى فاتورة مخصصة تحتوي على بيانات شركة محددة أو رقم أمر شراء للهدايا المؤسسية، فما عليك سوى إبلاغ فريق خدمة العملاء قبل إتمام الدفع وسنقوم بتجهيزها وفقًا لمتطلباتك.",

      question6: "كيف يجب أن أحفظ القهوة؟",

      answer6:
        "للحفاظ على الروائح والزيوت العطرية الدقيقة التي تمنح حبوب القهوة مذاقها المميز، اتبع هذه القواعد الأربع:\n" +
        "- محكمة الإغلاق وغير شفافة: احفظ القهوة في الكيس القابل لإعادة الغلق والمزود بصمام أو في وعاء خزفي محكم لحماية الحبوب من الأكسجين والضوء.\n" +
        "- درجة حرارة الغرفة: احتفظ بالقهوة في مكان بارد ومظلم. تجنب الثلاجة أو الفريزر لأن الرطوبة وتغير درجات الحرارة يؤثران على النكهات الدقيقة.\n" +
        "- الطحن قبل التحضير مباشرة: للحصول على أفضل نكهة، اطحن الكمية المطلوبة فقط قبل ملامستها للماء الساخن.\n" +
        "- الاستهلاك في الوقت المناسب: استمتع بالقهوة المختارة خلال أسبوعين إلى أربعة أسابيع من تاريخ التحميص للحصول على أفضل تعقيد في النكهة.",

      question7: "هل توفرون قهوة عضوية معتمدة وقهوة التجارة العادلة؟",

      answer7:
        "نعم، نقدم بكل فخر مجموعة مختارة من القهوة العضوية المعتمدة وقهوة التجارة العادلة. وبينما ينصب تركيزنا الأساسي على علاقات التجارة المباشرة والعمل جنبًا إلى جنب مع المزارعين المستقلين الذين يتجاوزون في كثير من الأحيان معايير الزراعة العضوية من خلال ممارسات زراعية متجددة دقيقة، فإن مجموعتنا تتضمن أيضًا خيارات معتمدة تضمن ممارسات عمل أخلاقية وأجورًا عادلة وحماية مستدامة للبيئة.",
    },

    footer: {
      about: "من نحن",

      company: "الشركة",

      locations: "المواقع",

      followAlong: "تابعنا",

      allRightsReserved: "جميع الحقوق محفوظة.",

      tagline: "لأننا نحب القهوة",
    },

    meta: {
      signInTitle: "Coffee Shop  | تسجيل الدخول",

      signUpTitle: "Coffee Shop  | إنشاء حساب",

      accountTitle: "Coffee Shop  | حسابي",

      shopTitle: "Coffee Shop  | المتجر",

      productTitle: "Coffee Shop  | المنتج",

      aboutTitle: "Coffee Shop  | من نحن",

      homeTitle: "Coffee Shop  | الرئيسية",

      faqTitle: "Coffee Shop  | الأسئلة الشائعة",

      bookingTitle: "Coffee Shop  | احجز طاولة",

      journalTitle: "Coffee Shop  | المجلة",

      journalDescription:
        "استكشف طرق تحضير القهوة وثقافة القهوة والوصفات والاستدامة وقصص عالم القهوة المختصة",

      articleTitle: "Coffee Shop | المقال",

      cartTitle: "Coffee Shop  | السلة",

      locationsTitle: "Coffee Shop  | الفروع",

      checkoutTitle: "Coffee Shop  | الدفع",
    },
  },
};

// Get Translation

export function t(key, language = LANGUAGES.EN) {
  const normalizedLanguage = normalizeLanguage(language);

  const keys = key.split(".");

  let value = translations[normalizedLanguage];

  for (const currentKey of keys) {
    if (value === null || value === undefined) {
      return key;
    }

    value = value[currentKey];
  }

  return typeof value === "string" ? value : key;
}

// Apply Language

export function applyLanguage(language) {
  const normalizedLanguage = normalizeLanguage(language);

  const isArabic = normalizedLanguage === LANGUAGES.AR;

  document.documentElement.lang = normalizedLanguage;

  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  // Translate Text

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n, normalizedLanguage);
  });

  // Translate Placeholders

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(
      element.dataset.i18nPlaceholder,
      normalizedLanguage,
    );
  });

  // Translate aria-label

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      t(element.dataset.i18nAriaLabel, normalizedLanguage),
    );
  });

  // Translate Alt Text

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", t(element.dataset.i18nAlt, normalizedLanguage));
  });

  // Translate Titles

  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.setAttribute(
      "title",
      t(element.dataset.i18nTitle, normalizedLanguage),
    );
  });

  // Translate Document Title

  const titleElement = document.querySelector("title[data-i18n]");

  if (titleElement) {
    titleElement.textContent = t(titleElement.dataset.i18n, normalizedLanguage);
  }

  return normalizedLanguage;
}
