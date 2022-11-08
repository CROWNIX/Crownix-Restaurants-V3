import CONFIG from '../../../globals/config';

class ContentDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this.render();
  }

  render() {
    const { description } = this._restaurant;
    this.innerHTML = `
      <div class="wrapper__heros">
        <img class="heros__detail" src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}" alt="${this._restaurant.name}">
      </div>
      <div class="wrapper__detail__page">
        <div class="box__title">
          <div class="box__detail__title">
            <p><span class="title__detail">${this._restaurant.name}</span><br>${this._restaurant.address}, ${this._restaurant.city}</p>
            <div class="card__rating">
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <i class="material-icons star">star</i>
              <span>${this._restaurant.rating}</span>
            </div>
          </div>
          <div class="box__favorite__detail">
            <div class="box__favorite__color"></div>
          </div>
          <!-- <div class="box__rating__detail"> -->
          <!-- <div class="box__rating__detail__color"> -->
          <!-- <p>&#9733; ${this._restaurant.rating}</p> -->
          <!-- </div> -->
          <!-- </div> -->
        </div>
        <div class="box__description__detail description__detail">
          <p>${description}</p>
        </div>
        <div class="box__menus">
          <p class="menus__title">Food Menu</p>
          <ul class="menus foods"></ul>
        </div>
        <div class="box__menus">
          <p class="menus__title">Drink Menu</p>
          <ul class="menus drinks"></ul>
        </div>
      </div>
      <div class="wrapper__customerReviews">
        <p>Reviews</p>
        <ul class="reviews"></ul>
      </div>
      <div class="wrapper__customerReviews">
        <p>Please rate this restaurant</p>
        <form class="formReview" id="formReview">
        <div class="inputBox">
          <input type="text" class="inputName" required id="name">
          <span>Name</span>
        </div>
        <div class="inputBox">
          <input type="text" class="inputReview" required id="review">
          <span>Review</span>
        </div>
          <button type="submit" class="reviewButton" id="reviewButton"><span>Send</span><i></i></button>
        </form>
      </div>
    `;
  }
}

customElements.define('content-detail', ContentDetail);
