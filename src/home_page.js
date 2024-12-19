import restaurant_image from './img/restaurant.jpg'

export let page_load = function () {
  let container = document.querySelector('div#content');

  let headline = document.createElement('h2')
  headline.textContent = 'The best restaurant in town';

  let image = new Image(300);
  image.src = restaurant_image;
  
  let description = document.createElement('p');
  description.textContent = 'The resaurant owned by Jairo has been on the up and up. It is mighty successful, and everyone who goes there gives the restaurant a bunch of money because its actually kind of expensive. Yikes'


  container.appendChild(headline);
  container.appendChild(image);
  container.appendChild(description);
}
