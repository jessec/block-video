var config = {
		data : 'site/blocks/block-video/video/data/video.json',
		schema : {
			type : "object",
			title : "Video",
			  "properties": {
			    "title": {
			      "type": "string",
			      "default": "nieuwe title",
			    },
			    "height": {
				      "type": "string",
			    },
				"width": {
			      "type": "string",
				},
			    "url": {
				      "type": "string",
				      "default": "//www.youtube.com/embed/CwqSbBxUMpY",
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

