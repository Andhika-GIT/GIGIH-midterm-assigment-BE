db = connect('mongodb://localhost/tokopedia_play');

db.createCollection('comment');
db.createCollection('product');
db.createCollection('user');
db.createCollection('video');
