import UrlParser from '../../routes/url-parser';
import RestaurantApiSource from '../../data/restaurantapi-source';
import {
  restaurantDetails,
  restaurantFoods,
  restaurantDrinks,
  restaurantReviews,
  requestFailed,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="contentDetail"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantApiSource.detailRestaurant(url.id);

      const restaurantContainer = document.querySelector('#contentDetail');
      restaurantContainer.appendChild(restaurantDetails(restaurant));

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('.box__favorite__color'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          rating: restaurant.rating,
          city: restaurant.city,
          description: restaurant.description,
          pictureId: restaurant.pictureId,
        },
      });

      this.renderContentRestaurant(restaurant);

      this.renderRateRestaurant(url);
    } catch (error) {
      console.log(error);
      alert('Please check your internet connection');
      const restaurantContainer = document.querySelector('#contentDetail');
      restaurantContainer.innerHTML = requestFailed();
    }
  },

  renderContentRestaurant(restaurant) {
    const foodsContainer = document.querySelector('.foods');
    foodsContainer.innerHTML = restaurantFoods(restaurant);

    const drinksContainer = document.querySelector('.drinks');
    drinksContainer.innerHTML = restaurantDrinks(restaurant);

    const reviewsContainer = document.querySelector('.reviews');
    reviewsContainer.innerHTML = restaurantReviews(restaurant);
  },

  renderRateRestaurant(url) {
    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');
    const formReview = document.querySelector('#formReview');
    formReview.addEventListener('submit', async () => {
      const reviewConfirm = confirm('are you sure you want to post a review?');
      if (reviewConfirm) {
        const review = {
          id: url.id,
          name: nameInput.value,
          review: reviewInput.value,
        };
        await RestaurantApiSource.postReview(JSON.stringify(review));
      }
    });
  },
};

export default Detail;
