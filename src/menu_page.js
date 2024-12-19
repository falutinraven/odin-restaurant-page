import spaghetti from './img/spaghetti.jpg'
import cheese_pizza from './img/cheese-pizza.jpg'
import hamburger from './img/hamburger.jpg'

export let page_load = function () {
  let container = document.querySelector('div#content');

  let headline = document.createElement('h2')
  headline.textContent = 'Our Glorious Menu';

  let spaghetti_description = 'This wonderful titular meal is perfected by our talented chefs. We highly recommend' 
  let cheese_pizza_description = 'This wonderful titular meal is also perfected by our talented chefs. Just look at that melted sheese and the size of that sexy crust' 
  let hamburger_description = 'How can we go without mentioning the classssssic!!! We most recommend the burger. Fries are avaiable too upon request. It\'ll cost a pretty penny though' 

  container.appendChild(headline);
  container.appendChild(make_card(spaghetti, spaghetti_description));
  container.appendChild(make_card(cheese_pizza, cheese_pizza_description));
  container.appendChild(make_card(hamburger, hamburger_description));
}

let make_card = function (image_path, description) {
  let card = document.createElement('div');
  card.classList.add('card');

  let image = new Image(300);
  image.src = image_path;
  
  let description_element = document.createElement('p');
  description_element.textContent = description;


  card.appendChild(image);
  card.appendChild(description_element);
  return card;
}