var config = {
		data : 'site/blocks/block-video/menus/data/menus.json',
		schema : {
			"title": "menus",
            "type": "object",
            "properties": {
                "menus": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "heading": {
                                "type": "string"
                            },
                            "items": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "link": {
                                            "type": "string"
                                        },
                                        "title": {
                                            "type": "string"
                                        }
                                    }
                                }
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

