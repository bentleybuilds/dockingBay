const db  = require('./index.js');
const Restaurant = require('./restaurant.js');

const restaurantData = [
      
]

const insertRestaurants = function() {
  Restaurant.create(restaurantData)
    .then(() => db.db.close());
};

insertRestaurants();