

var config = {
		data : 'site/blocks/block-video/smallvideo/data/smallvideo.json',
		schema : {
			type : "object",
			title : "Video",
			  "properties": {
			    "title": {
			      "type": "string",
			      "default": "nieuwe title",
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
