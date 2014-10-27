var config = {
    "data": "site/blocks/block-video/vimeo/data/vimeo.json",
    "schema": {
        "type": "object",
        "title": "Video",
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
            "video": {
                "type": "string",
                "propertyOrder": 5
            },
            "img": {
                "type": "string",
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
