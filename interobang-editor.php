<?php
/**
 * Plugin Name: interobang editor
 * Plugin URI: http://timpetter.de/interobang/editor/
 * Description: 
 * Version: 0.1
 * Author: Tim Petter
 * Author URI: http://timpetter.de
 * License: private
 */

if (!defined('TEMPLATE_PATH')) {
    define('EDITOR_PATH', plugin_dir_path( __FILE__ ));
    
}

if (!defined('TEMPLATE_URL')) {
    define('EDITOR_URL', plugin_dir_url( __FILE__ ));
}

include_once('module.php');