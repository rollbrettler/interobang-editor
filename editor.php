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
    <link rel="stylesheet" href="css/backend.css">
</head>

<body>
    <div style="width: 840px;margin: auto;" id="editorApp" class="foundation-init editor">
        <input type="hidden" id="editor-meta" class="editor-meta" name="meta[editor-meta]" value="W3siaWQiOiJjNjY0ZmM2YS00MTdhLWViOWItNTRmYy01OTJkNWNiZjM2M2MiLCJ2aXNpYmxlIjp0cnVlLCJiZ19jb2xvciI6IiIsImJnX2ltYWdlIjoiIiwiZnVsbHNpemUiOmZhbHNlLCJtYXJnaW4iOnsiYm90dG9tIjowLCJ0b3AiOjB9LCJwYWRkaW5nIjp7ImJvdHRvbSI6MCwibGVmdCI6MCwicmlnaHQiOjAsInRvcCI6MH0sImNvbHVtbnMiOlt7InR5cGUiOiJlbXB0eSIsInZhbHVlIjoiIiwic2l6ZVNtYWxsIjoiNCIsInNpemVNZWRpdW0iOiI0Iiwic2l6ZUxhcmdlIjoiNCIsImlkIjoiNjFiOTZhZTUtMWYwNC1mYTUyLTlmYjctOGIyMjUyNmFjNmY1Iiwib3JkaW5hbCI6MH0seyJ0eXBlIjoidGV4dCIsInZhbHVlIjoiIiwic2l6ZVNtYWxsIjoiNCIsInNpemVNZWRpdW0iOiI0Iiwic2l6ZUxhcmdlIjoiNCIsImlkIjoiMzk4NmY5ZjMtMmExYy1mZTRkLWMxZWEtYTY5MThhMDIwNzMzIiwib3JkaW5hbCI6MX0seyJ0eXBlIjoiZW1wdHkiLCJ2YWx1ZSI6IiIsInNpemVTbWFsbCI6IjQiLCJzaXplTWVkaXVtIjoiNCIsInNpemVMYXJnZSI6IjQiLCJpZCI6ImUzNzc2Y2Y1LTdiNDEtZDkwMi1lYTFmLThiNDBjNDg3MGVmYSIsIm9yZGluYWwiOjJ9LHsidHlwZSI6InRleHQiLCJ2YWx1ZSI6IiIsInNpemVTbWFsbCI6IjQiLCJzaXplTWVkaXVtIjoiNCIsInNpemVMYXJnZSI6IjQiLCJpZCI6IjRhOTg3YWI3LTU1MjMtMTk3YS05NGY3LWY5YjFkYzk5NGE5NyIsIm9yZGluYWwiOjN9LHsidHlwZSI6InRleHQiLCJ2YWx1ZSI6IiIsInNpemVTbWFsbCI6IjQiLCJzaXplTWVkaXVtIjoiNCIsInNpemVMYXJnZSI6IjQiLCJpZCI6IjZjY2ZkYWU4LTY4M2UtZWU4Ny1lZjM3LTI3NTg5MzBiY2YyMyIsIm9yZGluYWwiOjR9XSwib3JkaW5hbCI6MH0seyJpZCI6ImJjYjhjYTYwLTgyZmUtNGNhYi05ZTUxLTg5MTFkMjk1NDNhYyIsInZpc2libGUiOnRydWUsImJnX2NvbG9yIjoiIiwiYmdfaW1hZ2UiOiIiLCJmdWxsc2l6ZSI6ZmFsc2UsIm1hcmdpbiI6eyJib3R0b20iOjAsInRvcCI6MH0sInBhZGRpbmciOnsiYm90dG9tIjowLCJsZWZ0IjowLCJyaWdodCI6MCwidG9wIjowfSwiY29sdW1ucyI6W3sidHlwZSI6InRleHQiLCJ2YWx1ZSI6IiIsInNpemVTbWFsbCI6IjQiLCJzaXplTWVkaXVtIjoiNCIsInNpemVMYXJnZSI6IjQiLCJpZCI6IjM5ODZmOWYzLTJhMWMtZmU0ZC1jMWVhLWE2OTE4YTAyMDczMyIsIm9yZGluYWwiOjF9LHsidHlwZSI6ImVtcHR5IiwidmFsdWUiOiIiLCJzaXplU21hbGwiOiI0Iiwic2l6ZU1lZGl1bSI6IjQiLCJzaXplTGFyZ2UiOiI0IiwiaWQiOiJlMzc3NmNmNS03YjQxLWQ5MDItZWExZi04YjQwYzQ4NzBlZmEiLCJvcmRpbmFsIjoyfV0sIm9yZGluYWwiOjF9LHsiaWQiOiIyZjU1Yzc5NC1iODQ2LTc0MmItMjRhYy1iOTkwNDljOWU3ZTYiLCJ2aXNpYmxlIjp0cnVlLCJiZ19jb2xvciI6IiIsImJnX2ltYWdlIjoiIiwiZnVsbHNpemUiOmZhbHNlLCJtYXJnaW4iOnsiYm90dG9tIjowLCJ0b3AiOjB9LCJwYWRkaW5nIjp7ImJvdHRvbSI6MCwibGVmdCI6MCwicmlnaHQiOjAsInRvcCI6MH0sImNvbHVtbnMiOlt7InR5cGUiOiJ0ZXh0IiwidmFsdWUiOiIiLCJzaXplU21hbGwiOiI0Iiwic2l6ZU1lZGl1bSI6IjQiLCJzaXplTGFyZ2UiOiI0IiwiaWQiOiI0YTkxYTY3My0wYjVkLTQ3YTYtMzMxMS0yNDZiODdjOGY0ZWYifV0sIm9yZGluYWwiOjJ9LHsiaWQiOiI5NzE4MjY0Zi05NzEwLWI3YmUtN2IxYy05Y2Q3MzBjYWFlNDUiLCJ2aXNpYmxlIjp0cnVlLCJiZ19jb2xvciI6IiIsImJnX2ltYWdlIjoiIiwiZnVsbHNpemUiOmZhbHNlLCJtYXJnaW4iOnsiYm90dG9tIjowLCJ0b3AiOjB9LCJwYWRkaW5nIjp7ImJvdHRvbSI6MCwibGVmdCI6MCwicmlnaHQiOjAsInRvcCI6MH0sImNvbHVtbnMiOlt7InR5cGUiOiJ0ZXh0IiwidmFsdWUiOiIiLCJzaXplU21hbGwiOiI0Iiwic2l6ZU1lZGl1bSI6IjQiLCJzaXplTGFyZ2UiOiI0IiwiaWQiOiIzOGJmYTlmNi1iMDA4LTFhNmItZTBhMC04M2ZkNmM3ZTMyOGIifSx7InR5cGUiOiJ0ZXh0IiwidmFsdWUiOiIiLCJzaXplU21hbGwiOiI0Iiwic2l6ZU1lZGl1bSI6IjQiLCJzaXplTGFyZ2UiOiI0IiwiaWQiOiJkMWViYzUyMi01YTY5LTk3YzAtZDhmNS01MjI0NTgyMmU5YzkifSx7InR5cGUiOiJ0ZXh0IiwidmFsdWUiOiIiLCJzaXplU21hbGwiOiI0Iiwic2l6ZU1lZGl1bSI6IjQiLCJzaXplTGFyZ2UiOiI0IiwiaWQiOiI2Y2JiNTEwYS05OTFiLTk2ZDMtZDVhMy01MWQwZWI2MTJkOTAifV19XQ==">
        
        <?php include "templates/editor-content.php" ?>
    
        <?php include "templates/editor-settings.php" ?>
        
        <script>
            var ajax_editor = {};
            ajax_editor['some_value'] = <?= $json ?>;
        </script>
    </div>
    
    <!-- dependencies -->
    <script src="bower_components/jquery/dist/jquery.js"></script>
    <script src="bower_components/jquery-ui/ui/jquery-ui.js"></script>
    <script src="bower_components/underscore/underscore.js"></script>
    <script src="bower_components/backbone/backbone.js"></script>
    <script src="bower_components/backbone.localStorage/backbone.localStorage.js"></script>
    
    <!-- Data -->
    <script src="js/helpers/base64.js"></script>
    
    <!-- Helper -->
    <script src="js/helpers/guid.js"></script>
    <script src="js/helpers/modules.js"></script>
    
    <!-- Columns -->
    <script src="js/models/column.js"></script>
    <script src="js/collections/columns.js"></script>
    <script src="js/views/column.js"></script>
    <script src="js/views/column.draggable.js"></script>
    
    <!-- Row -->
    <script src="js/models/row.js"></script>
    <script src="js/collections/rows.js"></script>
    <script src="js/views/row.js"></script>
    <script src="js/views/row.draggable.js"></script>
    
    <!-- Settings -->
    <!-- #ToDo -->
    
    <!-- main script -->
    <script src="js/views/editor.js"></script>
    <script src="js/views/editor.draggable.js"></script>
    <script src="js/interobang-editor.js"></script>
</body>

</html>