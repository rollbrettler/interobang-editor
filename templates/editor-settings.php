<?php global $editor_settings; global $editor_text;  ?>
<div class="editor-settings" style="display: none;">
</div>
<script id="settingsTemplate" type="text/template">
    <dl class="tabs left" data-tab>
        <dd>
            <a href="#content"><i class="fa fa-file-text"></i> Content</a>
        </dd>
        <dd class="active">
            <a href="#settings"><i class="fa fa-cogs"></i> Settings</a>
        </dd>
    </dl>
    
    <!--div class="left">
        <h2>Edit column settings</h2>
    </div-->
    
    <a href="#" class="button right small save-settings"><i class="fa fa-pencil"></i> Save changes</a>
    <div class="tabs-content">
        <div class="content" id="content">
            <?php foreach($editor_settings->types as $type): ?>
                <div class="<?=$type->name?>-toggle edit-toggle">
                    <?php 
                        $type_template = EDITOR_PATH . "/types/" . $type->name . ".content.php";
                        
                        // if type content file does not exist, then create it
                        if(!is_file($type_template)) {
                            $fp = fopen($type_template,"wb");
                            fwrite($fp,"");
                            fclose($fp);
                        }
                        
                        include $type_template;
                    ?>
                </div>
            <?php endforeach ?>
        </div>
        <div class="content active" id="settings">
            <div class="row editor-chooser">
                <?php foreach($editor_settings->types as $type): ?>
                    <div class="columns small-2">
                        <div class="editor-inner-column editor-content-chooser clearfix">
                            <i class="<?= $type->icon_css ?> editor-chooser-icon left"></i>
                            <p class="editor-chooser-description right "><?= $editor_text[$type->name]['chooser']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</script>