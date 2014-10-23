var config = {
		data : 'site/blocks/block-video/icon/data/icon.json',
		schema : {
			type : "object",
			title : "Icon",
			"properties" : {
				"title" : {
					"type" : "string",
					"default" : "",
				},
				"content" : {
					"type" : "string",
					"format" : "html",
					 "options": {
						"wysiwyg": true
					}
				},
				"icon" : {
					"type" : "string",
					"enum" : [ "building", "eastholland", "flag", "globe", 
						   "hands", "innovationprojects",
						   "innovationvouchers", "knowlegdevouchers",
						   "lamp", "lamps", "milestone", "money", "patent",
						   "people", "roadmap", "rocket", "scale", "sign", 
						   "speechballoon", "suitcase", "toparrangement"
						],
					"default" : "rocket",
				},
				"category" : {
					"type" : "string",
					"enum" : [ "cat-one", "cat-two", "cat-three",
							"cat-four", "cat-five" ],
					"default" : "cat-one",
				},
				"num" : {
					"type" : "number",
					"default" : 0,
				},
				"txt" : {
					"type" : "string",
					"default" : "",
				}
			}
		}
}


function init(step) {

	Wizard.run(step, config);
}
