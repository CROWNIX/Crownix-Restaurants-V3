import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { likeButton, unlikeButton } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLike();
    } else {
      this._renderUnlike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderUnlike() {
    this._likeButtonContainer.innerHTML = likeButton();

    const likeButtonElement = document.querySelector('#likeButton');
    likeButtonElement.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = unlikeButton();

    const likeButtonElement = document.querySelector('#likeButton');
    likeButtonElement.addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
