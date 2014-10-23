var config = {
    "data": "site/blocks/block-video/icon/data/icon.json",
    "schema": {
        "type": "object",
        "title": "Icon",
        "properties": {
            "title": {
                "type": "string",
                "default": "",
                "propertyOrder": 1
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
                "propertyOrder": 2
            },
            "content": {
                "type": "string",
                "format": "html",
                "options": {
                    "wysiwyg": true
                },
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
                "default": 0,
                "propertyOrder": 5
            },
            "txt": {
                "type": "string",
                "default": "",
                "propertyOrder": 6
            }
        }
    }
}


function init(step) {

	Wizard.run(step, config);
}
