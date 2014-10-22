


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
			    "text" : {
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