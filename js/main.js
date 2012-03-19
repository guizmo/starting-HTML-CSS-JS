// Dynamic loading configuration
Modernizr.load([
    {
        load: 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
        complete: function () {
            if (!window.jQuery) {
                Modernizr.load('js/jquery-1.7.1.min.js');
            }
            
            Modernizr.load([
            	'js/jquery.validate.js'
            	'js/custom.js?v=01'
            ]);
            
        }
    },{
        load : 'ielt7!/js/DD_belatedPNG_0.0.8a-min.js',
        callback: function() {
            $(function() {
                DD_belatedPNG.fix('img, .png_bg');
            }); 
        }
    }
]);