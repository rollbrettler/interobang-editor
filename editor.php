<?php

$url = "settings.json";

global $editor_settings_assoc, $editor_settings;

$json = utf8_encode(file_get_contents($url));
$editor_settings = json_decode($json);
$editor_settings_assoc = json_decode($json, true);

?><!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Editor Test</title>
    <!--link rel="stylesheet" href="bower_components/foundation/css/foundation.css"-->
    <link rel="stylesheet" href="css/editor.css">
</head>

<body>
    <div style="width: 840px;margin: auto;padding-top:30px" id="editorApp" class="foundation-init editor">
        <input type="hidden" id="editor-meta" class="editor-meta" name="meta[editor-meta]" value="">
        
        <?php include "templates/editor-content.php" ?>
    
        <?php include "templates/editor-settings.php" ?>
        
        <script>
            var app = {};
            app.Settings = <?= $json ?>;
        </script>
    </div>
    
    <!-- dependencies -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/jquery-ui/ui/jquery-ui.js"></script>
    <script src="bower_components/underscore/underscore.js"></script>
    <script src="bower_components/backbone/backbone.js"></script>
    <script src="bower_components/backbone.localStorage/backbone.localStorage.js"></script>
    <script src="bower_components/foundation/js/vendor/modernizr.js"></script>
    <script src="bower_components/foundation/js/foundation.js"></script>
    
    <!-- Data -->
    <script src="js/helpers/base64.js"></script>
    
    <!-- Helper -->
    <script src="js/helpers/guid.js"></script>
    <script src="js/helpers/modules.js"></script>
    <script src="js/helpers/tinymce.ready.js"></script>
    
    <!-- Element -->
    <script src="js/models/element.js"></script>
    <script src="js/collections/elements.js"></script>
    <script src="js/views/element.js"></script>
    
    <!-- Columns -->
    <script src="js/models/column.js"></script>
    <script src="js/collections/columns.js"></script>
    <script src="js/views/column.js"></script>
    <script src="js/views/column/column.draggable.js"></script>
    
    <!-- Row -->
    <script src="js/models/row.js"></script>
    <script src="js/collections/rows.js"></script>
    <script src="js/views/row.js"></script>
    <script src="js/views/row/row.draggable.js"></script>
    
    <!-- Settings -->
    <script src="js/views/settings.js"></script>
    <script src="js/views/settings/settings.type.chooser.js"></script>
    <script src="js/views/settings/settings.column.size.js"></script>
    <!-- Setting types -->
    <script src="js/views/settings/settings.text.js"></script>
    <script src="js/views/settings/settings.video.js"></script>
    
    <!-- router -->
    <script src="js/routes/editor.js"></script>
    
    <!-- main script -->
    <script src="js/views/editor.js"></script>
    <script src="js/views/editor/editor.get.data.js"></script>
    <script src="js/views/editor/editor.save.js"></script>
    <script src="js/views/editor/editor.draggable.js"></script>
    <script src="js/interobang-editor.js"></script>
</body>

</html>