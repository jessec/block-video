
var config = {
	data : 'site/blocks/block-video/barchart/data/barchart.json',
	schema : {
		type : "object",
		title : "Barchart",
		"properties" : {
			"bars" : {
				"type" : "array",
				"items" : {
					"type" : "object",
					"properties" : {
						"name" : {
							"type" : "string",
							"default" : "tw"
						},
						"values" : {
							"type" : "string",
							"default" : "10,20,30"
						}
					}
				}
			},
			"id" : {
				"type" : "string"
			},
			"labels" : {
				"type" : "string",
				"default" : "2012,2013,2014"
			},
			"scale" : {
				"type" : "string",
				"enum" : [ "numbers", "procent" ],
				"default" : "numbers"
			},
			"title" : {
				"type" : "string",
				"default" : ""
			},
			"popup_title" : {
				"type" : "string",
				"default" : ""
			},
			"category" : {
				"type" : "string",
				"enum" : [
                    "start-grow",
                    "innovate",
                    "settle",
                    "general",
                    "milestones"
                ],
				"default" : "start-grow"
			},
			"content" : {
				"type" : "string",
				"format": "textarea"
			}
		}
	}
}

var test = {};
function init(step) {

	callback = function(editor){
		$("<button type='button'>Show Content</button>").insertAfter("textarea");
		$("textarea").css("display", "none");
		$("button").on("click", function(){
			var textArea = $(this).prev();
			Core9.name = textArea.attr("name");
				var tmpName = Core9.name.replace('root[','');
				tmpName = tmpName.substring(0, tmpName.length - 1);
				var name = editor.getEditor('root.'+tmpName);
				var data = {};
				if(name) {
				  data = name.getValue();
				}

			Core9.parent.send({
				getwysiwyg : true,
				payload : data
			});

			
			// send to parent 
			
			// recieve from parent.
			
			Core9.parent.receive(function(data, event) {

				console.log("form is recieving data : ");
				console.log(data);
				var tmpName = Core9.name.replace('root[','');
				tmpName = tmpName.substring(0, tmpName.length - 1);

				var name = editor.getEditor('root.'+tmpName);
				if(name) {
				  name.setValue(data.state.content);
				}

			});

		});

	}
	
	Wizard.run(step, config, callback);
}
