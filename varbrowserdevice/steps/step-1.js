


var config = {
		data : 'site/blocks/block-video/varbrowserdevice/data/varbrowserdevice.json',
		schema : {
			type : "object",
			title : "varbrowserdevice",
			"properties" : {
				"url" : {
					"type" : "string",
					"format" : "url"
				},
	            "alt": {
	                "type": "string"
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
