db = connect("mongodb://localhost/tokopedia_play");

db.video.insertMany([
  {
    title: "AWS services",
    description:
      "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering diverse services like computing power, storage, databases, and more. It enables businesses and individuals to build, deploy, and manage applications and resources with scalability, flexibility, and cost efficiency.",
    imageURL:
      "https://i.ytimg.com/vi/JIbIYCM48to/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBpsvSukRVi6lDt0tN1SRz333I6BA",
    videoURL: "https://youtu.be/JIbIYCM48to",
  },
  {
    title: "NiagaHoster",
    description:
      "Niagahoster is a prominent Indonesian web hosting and domain registration provider. It offers a range of digital services, including website hosting, domain name registration, and cloud-based solutions, helping businesses and individuals establish a strong online presence with reliable and accessible technology.",
    imageURL:
      "https://i.ytimg.com/vi/zeW3wf4ByEA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_9lhe3AcMowq35OPRZKXgKJIWgw",
    videoURL: "https://youtu.be/zeW3wf4ByEA",
  },
  {
    title: "Adobe Photoshop",
    description:
      "Adobe Photoshop is a powerful and widely used graphics editing software that allows users to manipulate, enhance, and create digital images and artwork. It offers a variety of tools for tasks like photo retouching, image composition, and graphic design, making it a go-to application for professionals and enthusiasts in the creative industry.",
    imageURL:
      "https://i.ytimg.com/vi/VseIS2-YAi0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5XJ-gZry2_Uutg4kTgICSim7ePw",
    videoURL: "https://www.youtube.com/watch?v=VseIS2-YAi0",
  },
  {
    title: "Vercel",
    description:
      "Vercel is a cloud platform that specializes in enabling developers to build, deploy, and host websites and web applications with high performance and ease. It provides tools for seamless collaboration, automatic scaling, and continuous deployment, allowing developers to focus on creating exceptional user experiences without the complexities of managing infrastructure.",
    imageURL:
      "https://i.ytimg.com/vi/3m1FcGW6V4g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDt--27CS6DaZCizvQfUBg1HhCmJw",
    videoURL: "https://www.youtube.com/watch?v=3m1FcGW6V4g",
  },
  {
    title: "Visual Studio Code",
    description:
      "Visual Studio Code (VS Code) is a lightweight and versatile code editor developed by Microsoft. It's widely used by developers for writing, editing, and debugging code across various programming languages. With its extensive extensions ecosystem, integrated version control, and powerful features, VS Code enhances productivity and facilitates efficient software development workflows.",
    imageURL:
      "https://i.ytimg.com/vi/KMxo3T_MTvY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDcd06tMjboZz_9K_UPWAXrNpHsg",
    videoURL: "https://youtu.be/KMxo3T_MTvY",
  },
]);
