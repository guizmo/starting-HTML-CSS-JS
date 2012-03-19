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

if(!Modernizr.input.placeholder){
	$('[placeholder]').focus(function() {
	  var input = $(this);
	  if (input.val() == input.attr('placeholder')) {
		input.val('');
		input.removeClass('placeholder');
	  }
	}).blur(function() {
	  var input = $(this);
	  if (input.val() == '' || input.val() == input.attr('placeholder')) {
		input.addClass('placeholder');
		input.val(input.attr('placeholder'));
	  }
	}).blur();
	$('[placeholder]').parents('form').submit(function() {
	  $(this).find('[placeholder]').each(function() {
		var input = $(this);
		if (input.val() == input.attr('placeholder')) {
		  input.val('');
		}
	  })
	});

}