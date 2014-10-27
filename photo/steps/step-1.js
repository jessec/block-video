


var config = {
		data : 'site/blocks/block-video/photo/data/photo.json',
		schema : {
			type : "object",
			title : "Photo",
			"properties" : {
				"url" : {
					"type" : "string",
					"format" : "url"
				},
				"content" : {
				  	"type": "string",
		    	  	"format": "html",
		    	  	"options": {
		    	    "wysiwyg": true
		    	  	}
				},
				"position": {
	                "type": "string",
	                "enum": [
	                    "left",
	                    "right"
	                ]
				}
			}
		}
}


function init(step) {

	Wizard.run(step, config);
}
