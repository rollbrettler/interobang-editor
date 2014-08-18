<?php
/**
 * Tells WordPress to load the WordPress theme and output it.
 *
 * @var bool
 */
define('WP_USE_THEMES', false);

/** Loads the WordPress Environment and Template */
require( dirname( __FILE__ ) . '/../../../../wp-blog-header.php' );

function initTriggerTinymce($in) {
 $in['setup '] = "function(editor) {
    editor.on('init', function() {
      // trigger parent frame function to proxy an event
      jQuery(document).ready(function(){
          window.parent.app.tinymceReady()
      })

    });
  }";
 return $in;
}
add_filter('tiny_mce_before_init', 'initTriggerTinymce' );

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>interobang editor</title>
    <?php wp_head();?>
</head>
<body style="padding: 15px;">
<?php
    wp_editor(
        "",
        "interobang_editor",
        array(
            'media_buttons' => true,
            "textarea_name"=>"dummy",
            "editor_class" => "",
            "teeny" => false,
            "textarea_rows" => 15,
            "drag_drop_upload" => true
        )
    );
?>
<?php wp_footer();?>
</body>
</html>
