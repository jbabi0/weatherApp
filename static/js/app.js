import{ Config } from '../../config.js';

let config = new Config();

const API_KEY = config.getKey();

$.get('../../components/header.html', function(response) {
  $('#nav').html(response);
});
