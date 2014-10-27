


var config = {
		data : 'site/blocks/block-video/smalltext/data/smalltext.json',
		schema : {
			type : "object",
			title : "Text",
			  "properties": {
			    "title": {
			      "type": "string",
			      "default": "nieuwe title",
			    },
			    "subtitle": {
				      "type": "string",
				      "default": "nieuwe sub title",
				},
			    "text" : {
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