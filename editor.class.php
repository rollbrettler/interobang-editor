<?php 
if (!class_exists('interobangEditor')) {
    
    class interobangEditor {
    
        //private css_selectors = array();
    
        function __construct() {
            /**
             * hooks into the pre content save function
             *
             * @see $this->publish_post_meta()
             */
            
            add_action( 'content_save_pre', array($this, 'publish_post_meta') );
            add_action( 'add_meta_boxes', array($this, 'addMetaBox') );
            
        }
        
        function addMetaBox() {
            // adds a meta box see FrontPageMeta() for content
            add_meta_box(
                "editor-meta-box",
                __( 'Content Editor', 'editor' ),
                array($this, 'metaBox'),
                "front-page",
                "normal",
                "high"
            );
            
            remove_post_type_support( 'page', 'editor' );
            
            add_meta_box(
                "editor-meta-box",
                __( 'Content Editor', 'editor' ),
                array($this, 'metaBox'),
                "page",
                "normal",
                "high"
            );

        }
        
        function metaBox($post) {
            
            // Content for FrontPage Meta data
            include EDITOR_PATH . '/templates/meta-box.php';
            #include EDITOR_PATH . '/editor.meta-box.php';
        }
        
        /**
         * creates an video player by an video url #todo
         *
         * @param string video url
         *
         * @return $video
         */
        function get_video_content($videoUrl) {
            
            return $video;
        }
        
        /**
         * gets a image by its attachement ID
         *
         * @param integer attachement ID
         *
         * @param bool defines the image size (default ist 'full') 
         *
         * @return $image
         */
        function get_image_content($imageID, $size = "full") {
            $image = wp_get_attachment_image_src( $imageID, $size );
            $imageMeta = wp_get_attachment_metadata( $imageID );
            
            #var_dump($imageMeta);exit;
            
            $image = "<img src='" . $image[0] . "' alt=''>";
            
            return $image;
        }
        
        /**
         * creates a slider from gallery
         *
         * @param integer slider ID
         *
         * @param bool defines the slider type (full screen or boxed) 
         *
         * @return $slider
         */
        function get_slider_content($silderID, $isSmallSlider = false) {
            
            $args = array( 
                'post_parent' => $silderID,
                'post_type'   => 'any', 
                'numberposts' => -1,
                'post_status' => 'any'
            );
            
            if($isSmallSlider) {
                $slider .= "<ul class='example-orbit' data-orbit>";
                
                $sliderImages = get_children( $args, ARRAY_A );
                foreach($sliderImages as $item) {
                    $slider .= "<li>" . get_image_content($item['ID']) . "</li>";
                }
                
                $slider .= "</ul>";
            } else {
            
                $slider = "<div class='superslides'>";
                $slider .= "<ul class='slides-container'>";
                
                $sliderImages = get_children( $args );
                foreach($sliderImages as $item) {
                    // id='image-" . $item['ID'] . "'
                    $slider .= "<li>" . $this->get_image_content($item->ID) . "</li>";
                }
                
                $slider .= "</ul></div>";
            }
            return $slider;
        }
        
        /**
         * Creates the content from meta data
         *
         * @param integer $columns count 
         *
         * @return $content
         */
        function generate_content_from_meta() {
            
            $content = "";
            
            $base64String = base64_decode( $_POST['meta']['editor-meta']);
            
            $metaData = json_decode($base64String); //json_decode($base64String)->rows[0]->columns[0];
            #dbr($metaData);
            
            foreach( $metaData->rows as $row ) {
                
                if(!$row->fullsize) {
                    $content .= "[row]";
                }
                
                foreach( $row->columns as $column ) {
                    #dbr($column);
                    
                    $contentType = $column->type;
                    $sizeSmall = $column->sizeSmall;
                    $sizeMedium = $column->sizeMedium;
                    $sizeLarge = $column->sizeLarge;
                    if(!$row->fullsize) {
                        $content .= "[column width_small='{$sizeSmall}' width_medium='{$sizeMedium}' width_large='{$sizeLarge}']";
                    }
                    switch($contentType){
                        case "text":
                            $content .= html_entity_decode( $column->value );
                            break;
                            
                        case "image":
                            $content .= $this->get_image_content($column->value);
                            break;
                            
                        case "slider":
                            $content .= $this->get_slider_content($column->value);
                            break;
                            
                        case "video":
                            $content .= $this->get_video_content($column->value);
                            break;
                            
                        case "empty":
                        default:
                            $content .= "";
                            break;
                    }
                    if(!$row->fullsize) {
                        $content .= "[/column]";
                    }
                }
                if(!$row->fullsize) {
                    $content .= "[/row]";
                }
            }
            
            return $content;
        }
        
        /**
         * publishes the content from generated meta data content
         *
         * @param string $content Data 
         *
         * @return $content
         */
        function publish_post_meta( $content ) {
            
            global $post, $allowedposttags;
            
            if( 'front-page' != $post->post_type ) {
              return $content;
            }
            
            $content = $this->generate_content_from_meta();
            
            return $content;
        }
        
        
    }
    
    //$interobangEditor = new interobangEditor();
}
$interobangEditor = new interobangEditor();