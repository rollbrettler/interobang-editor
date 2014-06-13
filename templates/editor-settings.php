<?php global $editor_settings; global $editor_text;  ?>
<div class="editor-settings" style="display: none;">
</div>

<script id="settingsTemplate" type="text/template">
    <dl class="tabs left" data-tab>
        <dd class="active">
            <a href="#content"><i class="fa fa-file-text"></i> Content</a>
        </dd>
        <dd>
            <a href="#settings"><i class="fa fa-cogs"></i> Settings</a>
        </dd>
    </dl>
    
    <!--div class="left">
        <h2>Edit column settings</h2>
    </div-->
    
    <a href="#" class="button right small save-settings"><i class="fa fa-pencil"></i> Save changes</a>
    <div class="tabs-content">
        <div class="content active" id="content">
            
        </div>
        <div class="content" id="settings">
            <div class="row editor-chooser">
                
            </div>
        </div>
    </div>
</script>

<script id="typesTemplate" type="text/template">
    <div class="editor-inner-column editor-content-chooser <%= active %> clearfix">
        <i class="<%= type.icon_css %> editor-chooser-icon left"></i>
        <p class="editor-chooser-description right ">Test</p>
    </div>
</script>

<script id="sizeTemplate" type="text/template">
    <div class="row">
        <div class="columns large-12">
            <div class="range-slider" data-slider="<%= value %>" data-options="start: 1; end: 12;">
                <span class="range-slider-label"><%= size.name %> screen size</span>
                <span class="range-slider-handle"></span>
                <span class="range-slider-active-segment"></span>
                <input type="hidden">
            </div>
        </div>
    </div>
</script>

<script id="textEditTemplate" type="text/template">
    <!--h3>Edit Text</h3-->
    <iframe id="textEditIframe" src="<%=url%>?timestamp=<%= new Date().getTime() %>" frameborder="0"></iframe>
</script>