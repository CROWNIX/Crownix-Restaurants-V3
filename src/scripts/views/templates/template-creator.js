import CONFIG from '../../globals/config';

const restaurantCard = (restaurant) => {
  const {
    city,
    pictureId,
    name,
    rating,
    id,
  } = restaurant;

  let { description } = restaurant;
  if (description.length > 98) {
    description = description.substring(0, 98);
  }

  return `
  <div class="card">
        <a href="#" class="card__city">${city}</a>
        <img class="lazyload card__image" src="./images/skeleton/placeholder.png" data-src="${CONFIG.BASE_IMAGE_URL}/${pictureId}" alt="${restaurant.name}">
        <div class="card__body">
            <h2 class="card__title">${name}</h2>
            <div class="card__rating">
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <span>${rating}</span>
            </div>
            <p>${description}...</p>
            <a href="${`/#/restaurant/${id}`}" class="card__detail">Detail</a>
        </div>
    </div>
 `;
};

const restaurantDetails = (restaurant) => {
  const contentDetailElement = document.createElement('content-detail');
  contentDetailElement.restaurant = restaurant;
  return contentDetailElement;
};

const restaurantFoods = (restaurant) => {
  let foods = '';

  restaurant.menus.foods.forEach((food) => {
    foods += `<li class="box__menu"><p>${food.name}</p></li>`;
  });

  return foods;
};

const restaurantDrinks = (restaurant) => {
  let drinks = '';
  restaurant.menus.drinks.forEach((drink) => {
    drinks += `<li class="box__menu"><p>${drink.name}</p></li>`;
  });

  return drinks;
};

const restaurantReviews = (restaurant) => {
  let reviews = '';

  restaurant.customerReviews.forEach((review) => {
    reviews += `
    <li class="box__review">
      <div class="box__review__header">
        <p><b>${review.name}</b></p>
        <p class="review__date">${review.date}</p>
      </div>
      <div class="box__review__body">
        <p>${review.review}</p>
      </div>
    </li>
  `;
  });

  return reviews;
};

const likeButton = () => `
  <button aria-label="like this restaurant" id="likeButton">
    <i class="material-icons">favorite_border</i>
  </button>
`;

const unlikeButton = () => `
  <button aria-label="unlike this restaurant" id="likeButton">
    <i class="material-icons">favorite</i>
  </button>
`;

const requestFailed = () => `
  <div class="not-found">
    <h1 class="not-found__title">404</h1>
    <p class="not-found__message">Please check your internet connection</p>
  </div>
`;

const emptyFavorite = () => `
  <a href="#/" aria-label="find a restaurant now">
    <div class="empty__favorite">
      <i class="material-icons">add</i>
      <p>add your favorite restaurant</p>
    </div>
  </a>
`;

export {
  restaurantCard,
  restaurantDetails,
  restaurantFoods,
  restaurantDrinks,
  restaurantReviews,
  unlikeButton,
  likeButton,
  requestFailed,
  emptyFavorite,
};
