
var config = {
	data : 'site/blocks/block-video/varbrowserdevice/data/varbrowserdevice.json',
	schema : {
		type : "object",
		title : "varbrowserdevice",
		"properties" : {

			"browsers" : {
				"type" : "array",
				"format" : "table",
				"title" : "Browsers",
				"uniqueItems" : true,
				"items" : {
					"type" : "object",
					"title" : "Browser",
					"properties" : {
						"case" : {
							"type" : "string",
							"enum" : [ "is", "is_not" ],
							"default" : "is"
						},
						"type" : {
							"type" : "string",
							"enum" : [ "cat", "dog", "bird", "reptile", "other" ],
							"default" : "dog"
						}
					}
				}
			}
		}
	}
}

function init(step) {

	Wizard.run(step, config);
}
