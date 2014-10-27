


var config = {
		data : 'site/blocks/block-video/smallphoto/data/smallphoto.json',
		schema : {
			type : "object",
			title : "Photo",
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
				}
			}
		}
}


function init(step) {

	Wizard.run(step, config);
}
