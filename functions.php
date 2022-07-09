<?php

function theme_scripts() {
  wp_enqueue_style('bridges-to-science', get_template_directory_uri() . '/dist/style/main.css');
  wp_enqueue_script( 'language', get_template_directory_uri() . '/dist/js/language.js', array(), '1.0', true );
}

add_action('wp_enqueue_scripts', 'theme_scripts');

function add_meta_tags() {
  echo '<meta name="description" content="' . get_option('blogdescription') . '" />';
}

add_action( 'wp_head', 'add_meta_tags');
