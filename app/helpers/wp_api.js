// https://developer.wordpress.org/rest-api

// Nodos de conecciones
//window.prompt("INGRESE SOLO EL NOMBRE DEL SITIO");

let NAME = window.prompt("INGRESE SOLO EL NOMBRE DEL SITIO"); // malvestida o css-tricks o
const DOMAIN = `https://${NAME}.com`;
const SITE = `${DOMAIN}/wp-json`;
const API_WP = `${SITE}/wp/V2`;
const PER_PAGE = 8;
const POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`;
const POST = `${API_WP}/posts`;
const SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page = 1;

export default {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  POSTS,
  POST,
  SEARCH,
  page,
};
