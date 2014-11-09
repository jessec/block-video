


var config = {
		data : 'site/blocks/block-video/slider/data/slider.json',
		schema : {
			type : "object",
			title : "Slider",
			"properties" : {
				"url1" : { "type" : "string" , "format": "url"},
				"url2" : { "type" : "string" , "format": "url"},
				"url3" : { "type" : "string" , "format": "url"},
				"url4" : { "type" : "string" , "format": "url"}
			}
		}
}


function init(step) {

	callback = function(){


		$('input[type=url]').on('click', function(){
			console.log(this);
		});

	}

	Wizard.run(step, config, callback);
}
