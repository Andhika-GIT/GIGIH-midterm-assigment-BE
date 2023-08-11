db = connect("mongodb://localhost/tokopedia_play");

db.video.insertMany([
  {
    title: "free yourself",
    description:
      "Liberate your spirit from the chains of doubt and fear. Embrace your authentic self, for within you lies boundless potential waiting to be unleashed. Cast aside the limitations that society and your own mind impose. Embrace the journey of self-discovery, where each step you take towards freedom paints a brighter, more vibrant future.",
    imageURL:
      "https://images.unsplash.com/photo-1533228876829-65c94e7b5025?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "best place to visit",
    description:
      "Embark on an Unforgettable Journey: Exploring the Most Exquisite Travel Destinations. From breathtaking natural wonders to culturally rich landmarks, this collection of must-visit places promises an unparalleled adventure for every wanderlust-filled soul.",
    imageURL:
      "https://images.unsplash.com/photo-1690722410513-ff89e9ceb825?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "make yourself comfortable",
    description:
      "Indulge in Tranquility: Mastering the Art of Making Yourself Comfortable. Create a sanctuary of relaxation and ease as you learn the secrets to crafting a cozy haven that embraces your senses, soothes your soul, and invites you to unwind in pure comfort.",
    imageURL:
      "https://plus.unsplash.com/premium_photo-1669374537810-f88d8ad82818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "enjoy yourself",
    description:
      "Embrace Joyful Moments: A Guide to Wholeheartedly Enjoying Yourself. Delve into a world of laughter, leisure, and self-discovery, as you uncover the keys to cherishing life's simple pleasures and cultivating a genuine sense of happiness in every experience.",
    imageURL:
      "https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "explorer more",
    description:
      "Unveiling Boundless Horizons: Embrace the Call to Explore More. Embark on a thrilling odyssey of discovery and curiosity, as you venture beyond your comfort zone, unravel hidden treasures, and open the door to endless possibilities that await the intrepid explorer in you.",
    imageURL:
      "https://images.unsplash.com/photo-1559481581-d800dfdb9316?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1018&q=80",
  },
]);
