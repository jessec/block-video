var config = {
    "data": "site/blocks/block-video/icon/data/icon.json",
    "schema": {
        "type": "object",
        "title": "Icon",
        "properties": {
            "title": {
            	"name": "Titel",
                "type": "string",
                "default": "",
                "propertyOrder": 1
            },
            "popup_title": {
            	"name": "Popup Titel",
                "type": "string",
                "default": "",
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
                    "flag",
                    "globe",
                    "hands",
                    "innovationprojects",
                    "innovationvouchers",
                    "knowlegdevouchers",
                    "lamp",
                    "lamps",
                    "milestone",
                    "money",
                    "patent",
                    "people",
                    "roadmap",
                    "rocket",
                    "scale",
                    "sign",
                    "speechballoon",
                    "suitcase",
                    "toparrangement"
                ],
                "default": "rocket",
                "propertyOrder": 4
            },
            "num": {
                "type": "number",
                "default": "",
                "propertyOrder": 5
            },
            "txt": {
                "type": "string",
                "default": "",
                "propertyOrder": 6
            },
            "content": {
                "type": "string",
                "format": "html",
                "options": {
                    "wysiwyg": true
                },
                "propertyOrder": 7
            }
        }
    }
}


function init(step) {

	Wizard.run(step, config);
}
