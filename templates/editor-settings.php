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
            
        </div>
        <div class="content active" id="settings">
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
    <h3>Size <%= size.name %></h3>
    <div class="row">
        <% for (var i = 0; i < app.Settings.css_selector.columns; i++ ) {  %>
            <div class="<%= selector %>"><input class="size-chooser" type="radio" name="<%=size.slug%>" value="<%=i + 1%>"><%= i + 1 %>/12</div>
        <% }; %>
    </div>
</script>

<script id="textEditTemplate" type="text/template">
    <!--h3>Edit Text</h3-->
    <!--textarea name="" id="" cols="30" rows="10"><%= content.value %></textarea-->
    <iframe id="textEditIframe" src="<%=url%>?timestamp=<%= new Date().getTime() %>" frameborder="0"></iframe>
</script>