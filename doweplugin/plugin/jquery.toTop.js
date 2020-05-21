/**
 *  Plugin Name: jQuery toTop for smoothly Scroll back to Top
 *  Plugin URL: https://github.com/mmkjony/jQuery.toTop
 *  Version: 1.1
 *  Author: MMK Jony
 *  Author URL: https://github.com/mmkjony
 *  License: Licensed under MIT
 **/

/* 页面调用 Html: <a class="to-top">Top &uarr;</a>
<script> js:
$('.to-top').toTop({
  //options with default values
  autohide: true, //自动隐藏
  offset: 420,//距离顶部多少距离时自动隐藏按钮
  speed: 500, //滚动持续时间
  position: true, //如果设置为 false，则需要手动在 css 中设置“按钮”的位置
  right: 15,//右侧距离
  bottom: 30//底部距离
});
</script>
 */


(function( $ ){
    'use strict';
 $.fn.toTop = function(opt){
        
        //variables
        var elem = this;
        var win = $(window);
        var doc = $('html, body');
        
        //Extended Options
        var options = $.extend({
            autohide: true, offset: 420,
            speed: 500,
            position: true,
            right: 15,
            bottom: 30
        }, opt);
        
        elem.css({
            'cursor': 'pointer'
        });
        
        if(options.autohide){
            elem.css('display', 'none');
        }
        
        if(options.position){
            elem.css({
                'position': 'fixed',
                'right': options.right,
                'bottom': options.bottom,
            });
        }
        
        elem.click(function(){
            doc.animate({scrollTop: 0}, options.speed);
        });
        
        win.scroll(function(){
            var scrolling = win.scrollTop();
            
            if(options.autohide){
                if(scrolling > options.offset){
                    elem.fadeIn(options.speed);
                }
                else elem.fadeOut(options.speed);
            }
            
        });
        
    };
    
}( jQuery ));
