
var config = {
	data : 'site/blocks/block-video/barchart/data/barchart.json',
	schema : {
		type : "object",
		title : "Staafdiagram",
		"properties" : {
			"bars" : {
				"type" : "array",
				"title" : "Staven",
				"items" : {
					"type" : "object",
					"properties" : {
						"name" : {
							"type" : "string",
							"title" : "Naam",
							"default" : "bijv. twente"
						},
						"values" : {
							"type" : "string",
							"title" : "Waardes",
							"default" : "bijv. 10,20,30"
						}
					}
				}
			},
			"labels" : {
				"type" : "string",
				"title" : "Labels",
				"default" : "2012,2013,2014"
			},
			"scale" : {
				"type" : "string",
				"title" : "Schaal",
				"enum" : [ "numbers", "procent" ],
				"options": {
                	"enum_titles": [ "Nummers", "Procenten" ]
                },
				"default" : "numbers"
			},
			"title": {
                "type": "string",
                "title": "Blok titel"
            },
            "popup_title": {
                "type": "string",
                "title": "Popup titel"
            },
			"category1": {
                "type": "string",
                "title": "Categorie 1",
                "enum": [
                    "start-grow",
                    "innovate",
                    "settle",
                    "general",
                    "milestones"
                ],
                "options": {
                	"enum_titles": [
                        "Starten & Doorgroeien",
                        "Sneller Innoveren",
                        "Vestigen in Twente",
                        "Algemeen",
                        "Mijlpalen"
                     ]
                },
                "default": "start-grow"
            },
            "category2": {
                "type": "string",
                "title": "Categorie 2",
                "enum": [
                    "",
                    "start-grow",
                    "innovate",
                    "settle",
                    "general",
                    "milestones"
                ],
                "options": {
                	"enum_titles": [
                        "",
                        "Starten & Doorgroeien",
                        "Sneller Innoveren",
                        "Vestigen in Twente",
                        "Algemeen",
                        "Mijlpalen"
                     ]
                },
                "default": ""
            },
            "id": {
                "type": "string",
                "title": "ID"
            },
            "content": {
                "type": "string",
                "title": "Popup content",
                "format": "textarea"
            }
		}
	}
}

function init(step) {
	
    callback = function(editor) {
        $("<button type='button'>Toon content</button>").insertAfter("textarea");
        $("textarea").css("display", "none");
        $("button").on("click", function() {
            var textArea = $(this).prev();
            Core9.name = textArea.attr("name");
            var tmpName = Core9.name.replace('root[', '');
            tmpName = tmpName.substring(0, tmpName.length - 1);
            var name = editor.getEditor('root.' + tmpName);
            var data = {};
            if (name) {
                data = name.getValue();
            }
            
            // send to parent 
            Core9.parent.send({
                getwysiwyg: true,
                payload: data
            });
            
            // recieve from parent
            Core9.parent.receive(function(data, event) {
                var tmpName = Core9.name.replace('root[', '');
                tmpName = tmpName.substring(0, tmpName.length - 1);

                var name = editor.getEditor('root.' + tmpName);
                if (name) {
                    name.setValue(data.state.content);
                }
            });
        });
    }
    
    Wizard.run(step, config, callback);
}
