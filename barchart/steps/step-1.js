


var config = {
		data : 'site/blocks/block-video/barchart/data/barchart.json',
		schema : {
			type : "object",
			title : "Barchart",
			  "properties": {
			  	"bars": {
			  		"type": "array",
			  		"items": {
				  		"type": "object",
				  		"properties": {
				  			"name": {
				  				"type": "string",
				  				"default": "tw"
				  			},
				  			"values": {
				  				"type": "string",
				  				"default": "10,20,30"
				  			},
				  		},
				  	},
			  	},
			  	"id": {
	  				"type": "string"
			  	},
			  	"labels": {
	  				"type": "string",
	  				"default": "2012,2013,2014"
			  	},
			    "title": {
			      "type": "string",
			      "default": ""
			    },
			    "popup_title": {
			      "type": "string",
			      "default": ""
			    },
			    "category": {
					"type": "string",
					"enum": [
					"cat-one",
					"cat-two",
					"cat-three",
					"cat-four",
					"cat-five"
					],
					"default": "cat-one"
				},
			    "content": {
					"type": "string",
					"format": "html",
					"options": {
						"wysiwyg": true
					},
				}
			  }
		}
}


function init(step) {

	Wizard.run(step, config);
}


