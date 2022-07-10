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

function block_editor_styles() {
    wp_enqueue_style( 'site-block-editor-styles', get_theme_file_uri( '/dist/style/style-editor.css' ), false, '1.0', 'all' );
}

add_action( 'enqueue_block_editor_assets', 'block_editor_styles' );

function add_editor_styles() {
    add_editor_style( get_theme_file_uri( '/dist/style/style-editor.css' ) );
}
add_action( 'admin_init', 'add_editor_styles' );
