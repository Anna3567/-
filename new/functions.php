<?php
	add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
	function theme_name_scripts() {
		wp_enqueue_style( 'style', get_stylesheet_uri() );
		wp_enqueue_style( 'style5', get_template_directory_uri() . '/css/style.css', 'all' );
		wp_enqueue_script('script', get_template_directory_uri() . '/js/java.js' );
	}
?>