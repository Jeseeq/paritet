
var App = function () {
   


    //Equal Height Columns    
    function handleEqualHeightColumns() {
        var EqualHeightColumns = function () {            
            jQuery(".equal-height-columns").each(function() {
                heights = [];              
                jQuery(".equal-height-column", this).each(function() {
                    jQuery(this).removeAttr("style");
                    heights.push(jQuery(this).height()); // write column's heights to the array
                });
                jQuery(".equal-height-column", this).height(Math.max.apply(Math, heights)); //find and set max
            });
        }

        EqualHeightColumns();        
        jQuery(window).resize(function() {
            EqualHeightColumns();
        });
        jQuery(window).load(function() {
            EqualHeightColumns("img.equal-height-column");
        });
    }    

   
   

    return {
        init: function () {
  
            handleEqualHeightColumns();
        },


        //Scroll Bar 
        initScrollBar: function () {
            jQuery('.mCustomScrollbar').mCustomScrollbar({
                theme:"minimal",
                scrollInertia: 200,
                scrollEasing: "linear"
            });
        }

    };

}();