db = connect('mongodb://localhost/tokopedia_play');

db.video.insertMany([
  {
    title: 'free yourself',
    imageURL: 'https://images.unsplash.com/photo-1690975608976-1933d9e8ccde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
  },
  {
    title: 'best place to visit',
    imageURL: 'https://images.unsplash.com/photo-1689796188791-78cfd01b9e41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80',
  },
  {
    title: 'make yourself comfortable',
    imageURL: 'https://images.unsplash.com/photo-1691432922330-542afaa82747?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'enjoy yourself',
    imageURL: 'https://images.unsplash.com/photo-1691531315982-f6bccf4bd875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
  {
    title: 'explorer more',
    imageURL: 'https://images.unsplash.com/photo-1682685797857-97de838c192e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
  },
]);
