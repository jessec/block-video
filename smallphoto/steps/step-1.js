


var config = {
		data : 'site/blocks/block-video/smallphoto/data/smallphoto.json',
		schema : {
			type : "object",
			title : "Small Photo",
			"properties" : {
				"photourl" : {
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
