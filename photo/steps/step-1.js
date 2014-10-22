


var config = {
		data : 'site/blocks/block-video/photo/data/photo.json',
		schema : {
			type : "object",
			title : "Photo",
			"properties" : {
				"url" : {
					"type" : "url"
				},
				"content" : {
				  	"type": "string",
		    	  	"format": "html",
		    	  	"options": {
		    	    "wysiwyg": true
		    	  	}
				}
			}
		}
}


function init(step) {

	Wizard.run(step, config);
}
