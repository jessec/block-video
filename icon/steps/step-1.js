var config = {
    "data": "site/blocks/block-video/icon/data/icon.json",
    "schema": {
        "type": "object",
        "title": "Icon",
        "properties": {
            "title": {
                "type": "string",
                "propertyOrder": 1
            },
            "popup_title": {
                "type": "string",
                "propertyOrder": 2
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
                "default": "cat-one",
                "propertyOrder": 3
            },
            "icon": {
                "type": "string",
                "enum": [
                    "building",
                    "eastholland",
                    "events",
                    "globe",
                    "hands",
                    "innovationprojects",
                    "innovationvouchers",
                    "knowledgevouchers",
                    "lamp",
                    "lamps",
                    "milestone",
                    "money",
                    "patent",
                    "people",
                    "twente",
                    "rocket",
                    "scale",
                    "sign",
                    "speechbubble",
                    "suitcase",
                    "toparrangement"
                ],
                "default": "rocket",
                "propertyOrder": 4
            },
            "id": {
                "type": "string",
                "propertyOrder": 5
            },
			"num": {
			    "type": "number",
			    "propertyOrder": 6
			},
            "txt": {
                "type": "string",
                "propertyOrder": 7
            },
            "content": {
                "type": "string",
                "format": "html",
                "options": {
                    "wysiwyg": true
                },
                "propertyOrder": 8
            }
        }
    }
}


function init(step) {

	Wizard.run(step, config);
}
