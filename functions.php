<?php

function theme_scripts() {
  wp_enqueue_style('bridges-to-science', get_template_directory_uri() . '/dist/main.css');
}

add_action('wp_enqueue_scripts', 'theme_scripts');
