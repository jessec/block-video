var config = {
		data : 'site/blocks/block-video/video/data/video.json',
		schema : {
			type : "object",
			title : "Video",
			  "properties": {
			    "title": {
			      "type": "string",
			      "default": "nieuwe title"
			    },
			    "url": {
				      "type": "string",
				      "default": "//www.youtube.com/embed/CwqSbBxUMpY"
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

