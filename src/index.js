import { page_load as home_page_load } from "./home_page";
import { page_load as menu_page_load } from "./menu_page";
import { page_load as about_page_load } from "./about_page";

let teardown = function() {
  let container = document.querySelector('div#content');
  container.innerHTML = '';
}

let add_listener = function(query, func) {
  let button = document.querySelector(query);
  button.addEventListener('click', () => {
    teardown();
    func();
  })
}

add_listener('.home', home_page_load);
add_listener('.menu', menu_page_load);
add_listener('.about', about_page_load);

