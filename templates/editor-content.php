<div class="editor-content">
    <div class="editor-rows">
        
    </div>
    <div class="editor-row-add">
        
    </div>
</div>
<script id="rowTemplate" type="text/template">
    <!-- draggable area -->
    <div class="editor-drag">
        <a href="#drag-row"><i class="fa fa-bars"></i></a>
    </div>
    
    <!-- columns template box -->
    <div class="column-container"></div>
    
    <!-- applied elements -->
    <div class="editor-row-settings text-center">
        <% if(typeof visible !== 'undefined' && visible) { %>
            <!-- visible -->
            <i class="fa fa-eye has-tip tip-top" data-tooltip title="visible"></i>
        <% } else { %>
            <!-- hidden -->
            <i class="fa fa-eye-slash has-tip tip-top" data-tooltip title="hidden"></i>
        <% } %>
        
        <% if(typeof bg_image !== 'undefined' && bg_image) { %>
            <!-- row background image -->
            <i class="fa fa-picture-o has-tip tip-top" data-tooltip title="background image"></i>
        <% } %>
        
        <% if(typeof bg_color !== 'undefined' && bg_color) { %>
            <!-- row background color -->
            <i class="fa fa-tint has-tip tip-top" data-tooltip title="background color"></i>
        <% } %>
        
        <% if(typeof fullsize !== 'undefined' && fullsize) { %>
            <!-- full size row -->
            <i class="fa fa-arrows-h has-tip tip-top" data-tooltip title="full size row"></i>
        <% } %>
        
        <!-- margin/padding -->
        <i class="fa fa-arrows-alt has-tip tip-top" data-tooltip title="margin/padding"></i> 
    </div>
    
    <!-- control elements -->
    <div class="editor-controls">
        <!-- edit row settings -->
        <div class="editor-edit">
            <a href="#edit-row">
                <i class="fa fa-pencil"></i>
            </a>
        </div>
        
        <!-- add column -->
        <div class="editor-add">
            <a href="#add-column">
                <i class="fa fa-plus"></i>
            </a>
        </div>
        
        <!-- delete row -->
        <div class="editor-delete">
            <a class="remove-row" href="#">
                <i class="fa fa-times"></i>
            </a>
        </div>
    </div>
</script>

<script id="columnTemplate" type="text/template">
    <div class="editor-inner-column text-center">
        <!-- draggable area -->
        <div class="editor-drag">
            <a href="#drag-column"><i class="fa fa-bars"></i></a>
        </div>
        
        <!-- content icon -->
        <a href="#" class="edit-content"><i class="<%= type.icon_css %> editor-content-icon"></i></a>
        
        <!-- control elements -->
        <div class="editor-controls">
            <!-- edit column settings -->
            <div class="editor-edit">
                <a href="#edit-column/">
                    <i class="fa fa-pencil"></i>
                </a>
            </div>
            <!-- delete column -->
            <div class="editor-delete">
                <a href="#delete-column">
                    <i class="fa fa-times"></i>
                </a>
            </div>
        </div>
    </div>
</script>


<script id="rowLastTemplate" type="text/template">  
    <div class="columns small-12">
        <div class="editor-inner-column editor-empty-column text-center">
            
            <!-- content icon -->
            <a id="add-row" href="#add-row"><i class="fa fa-plus editor-content-icon"></i></a>
            
        </div>
    </div>
</script>