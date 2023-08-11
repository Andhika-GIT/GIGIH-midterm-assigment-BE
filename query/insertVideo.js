db = connect("mongodb://localhost/tokopedia_play");

db.video.insertMany([
  {
    title: "free yourself",
    description:
      "Liberate your spirit from the chains of doubt and fear. Embrace your authentic self, for within you lies boundless potential waiting to be unleashed. Cast aside the limitations that society and your own mind impose. Embrace the journey of self-discovery, where each step you take towards freedom paints a brighter, more vibrant future.",
    imageURL:
      "https://images.unsplash.com/photo-1690975608976-1933d9e8ccde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
  },
  {
    title: "best place to visit",
    description:
      "Embark on an Unforgettable Journey: Exploring the Most Exquisite Travel Destinations. From breathtaking natural wonders to culturally rich landmarks, this collection of must-visit places promises an unparalleled adventure for every wanderlust-filled soul.",
    imageURL:
      "https://images.unsplash.com/photo-1689796188791-78cfd01b9e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80",
  },
  {
    title: "make yourself comfortable",
    description:
      "Indulge in Tranquility: Mastering the Art of Making Yourself Comfortable. Create a sanctuary of relaxation and ease as you learn the secrets to crafting a cozy haven that embraces your senses, soothes your soul, and invites you to unwind in pure comfort.",
    imageURL:
      "https://images.unsplash.com/photo-1691432922330-542afaa82747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "enjoy yourself",
    description:
      "Embrace Joyful Moments: A Guide to Wholeheartedly Enjoying Yourself. Delve into a world of laughter, leisure, and self-discovery, as you uncover the keys to cherishing life's simple pleasures and cultivating a genuine sense of happiness in every experience.",
    imageURL:
      "https://images.unsplash.com/photo-1691531315982-f6bccf4bd875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "explorer more",
    description:
      "Unveiling Boundless Horizons: Embrace the Call to Explore More. Embark on a thrilling odyssey of discovery and curiosity, as you venture beyond your comfort zone, unravel hidden treasures, and open the door to endless possibilities that await the intrepid explorer in you.",
    imageURL:
      "https://images.unsplash.com/photo-1682685797857-97de838c192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
]);
