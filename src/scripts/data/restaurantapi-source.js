import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApiSource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
      const { restaurants } = await response.json();
      return restaurants;
    } catch (error) {
      return error;
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      const { restaurant } = await response.json();
      return restaurant;
    } catch (error) {
      return error;
    }
  }

  static async postReview(review) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: review,
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
    }
  }
}

export default RestaurantApiSource;
