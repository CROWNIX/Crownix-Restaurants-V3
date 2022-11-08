const assert = require('assert');

Feature('Favorite Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked movies', ({ I }) => {
  I.seeElement('#favoriteContent');
  I.see('add your favorite restaurant', '.empty__favorite');
});

Scenario('Liking one restaurant', async ({ I }) => {
  I.see('add your favorite restaurant', '.empty__favorite');
  I.amOnPage('/');

  I.seeElement('.card .card__detail');

  const detailButton = locate('.card .card__detail').first();
  const firstRestaurant = locate('.card').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(detailButton);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const likedRestaurantTitle = await I.grabTextFrom('.card');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant', async ({ I }) => {
  I.see('add your favorite restaurant', '.empty__favorite');
  I.amOnPage('/');

  I.seeElement('.card .card__detail');

  const detailButton = locate('.card .card__detail').first();
  const firstRestaurant = locate('.card').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  I.click(detailButton);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');

  const likedRestaurantTitle = await I.grabTextFrom('.card');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  const firstFavoriteRestaurant = locate('#favoriteContent .card').first();
  const firstFavoriteRestaurantTitle = await I.grabTextFrom(firstFavoriteRestaurant);

  assert.strictEqual(firstRestaurantTitle, firstFavoriteRestaurantTitle);

  I.click(detailButton);

  I.wait(3);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#favoriteContent');

  I.see('add your favorite restaurant', '.empty__favorite');
});
