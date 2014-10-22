


var config = {
		data : 'site/blocks/block-video/icon/data/icon.json',
		schema : {
			type : "object",
			title : "Icon",
			"properties" : {
				"title" : {
					"type" : "string"
				},
				"icon" : {
					"type" : "string",
					"enum" : [ "rocket", "sign",
							"flag", "office",
							"employees", "hands",
							"bubble", "money", "lamp",
							"patent", "scale",
							"milestone", "roadmap" ],
					"default" : "rocket",
				},
				"background" : {
					"type" : "string",
					"enum" : [ "green", "blue", "red",
							"purple", "pink" ],
					"default" : "green",
				},
				"categories" : {
					"type" : "string",
					"default" : "cat-one cat-all"
				},
				"num" : {
					"type" : "number",
					"default" : 12,
				},
				"txt" : {
					"type" : "string",
					"default" : "",
				},
				"width" : {
					"type" : "number",
					"default" : 340,
				},
				"height" : {
					"type" : "number",
					"default" : 340,
				}
			}
		}
}


function init(step) {

	Wizard.run(step, config);
}