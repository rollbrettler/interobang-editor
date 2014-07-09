<?php

// Load JSON config file
global $editor_settings;

$url = EDITOR_PATH."/settings.json";

$json = utf8_encode(file_get_contents($url));
$editor_settings = json_decode($json);
global $editor_settings_assoc;
$editor_settings_assoc = json_decode($json, true);

/**
 * load modernizr
 *
 * @param string hook
 *
 * @return void
 */
function modernizr_js($hook) {
    
    $dependencies = array(
        'jquery'
    );
    
	wp_enqueue_script( 'modernizr', EDITOR_URL . "/bower_components/modernizr/modernizr.js", $dependencies );
    
}
add_action( 'admin_enqueue_scripts', 'modernizr_js' );

/**
 * load the scripts for the editor
 *
 * @param string hook
 *
 * @return void
 */
function editor_js($hook) {
    
    global $editor_settings_assoc;
    
    $dependencies = array(
        'jquery',
        //'jquery-ui-tabs',
        'jquery-ui-sortable',
        'modernizr',
        'underscore',
        'backbone'
    );
    
	wp_enqueue_script( 'editor-script', EDITOR_URL . "/js/interobang-editor.min.js", $dependencies );
    
	// in javascript, object properties are accessed as ajax_object.ajax_url, ajax_object.we_value
	wp_localize_script( 'editor-script', 'ajax_editor',
        array( 
            'ajax_url' => admin_url( 'admin-ajax.php' ),
            'some_value' => $editor_settings_assoc )
        );
}
add_action( 'admin_enqueue_scripts', 'editor_js' );

// load image ajax function
require_once("ajax-image-load.php");

// load helper
include_once('editor.class.php');

// load i18n
include_once('editor.text.php');

// load template
#require_once("generate-option-column.php");

//load translation
load_textdomain( 'editor', EDITOR_PATH . "/languages/" . get_locale() . ".mo" );

// Settings page (http://codex.wordpress.org/Function_Reference/add_menu_page)
/*function showEditorSettings() {
    return false
}

add_menu_page(
    __( 'Editor settings' , 'editor' ),
    __( 'Editor Settings' , 'editor' ),
    'manage_options',  
    'interobang_theme_settings',
    'showEditorSettings',
    'dashicons-lightbulb'
);*/