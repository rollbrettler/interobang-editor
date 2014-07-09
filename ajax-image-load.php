<?php

/**
 * ajax callback to generate image list
 *
 * @return void
 */
function ajax_load_image_thumb_callback() {
    echo wp_get_attachment_thumb_url( $_POST['image_id'] );
    die(); // prevent returning any other content
}

add_action( 'wp_ajax_image_thumb', 'ajax_load_image_thumb_callback' );