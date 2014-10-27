var config = {
		data : 'site/blocks/block-video/text/data/text.json',
		schema : {
			type : "object",
			title : "Text",
			  "properties": {
			    "title": {
			      "type": "string",
			      "default": "nieuwe title",
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

