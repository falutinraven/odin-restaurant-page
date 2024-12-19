import chefs_image_path from './img/chefs.jpg'

export let page_load = function () {
  let container = document.querySelector('div#content');

  let headline = document.createElement('h2')
  headline.textContent = 'About us and our wonderful staff';

  let image = new Image(300);
  image.src = chefs_image_path;
  
  let description = document.createElement('p');
  description.textContent = `Welcome to Lorem & Ipsum Bistro, where flavor meets creativity. Our chefs craft dishes that tantalize the senses, from fresh appetizers to mouthwatering desserts. We believe in providing a dining experience that's both elegant and inviting.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium felis ut mauris luctus, id sagittis purus faucibus. Suspendisse varius sapien vel elit porttitor, id ultrices dui eleifend. Curabitur ac ex non justo eleifend auctor.

Our curated wine list and cozy atmosphere ensure you'll savor every moment. Join us today for an unforgettable culinary journey!`


  container.appendChild(headline);
  container.appendChild(image);
  container.appendChild(description);
}
