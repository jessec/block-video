var config = {
    "data": "site/blocks/block-video/icon/data/image.json",
    "schema": {
        "type": "object",
        "title": "Image",
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
            "id": {
                "type": "string",
                "propertyOrder": 4
            },
            "img": {
                "type": "string",
                "propertyOrder": 5
            },
            "content": {
                "type": "string",
                "format": "html",
                "options": {
                    "wysiwyg": true
                },
                "propertyOrder": 6
            }
        }
    }
}


function init(step) {

	Wizard.run(step, config);
}
