
var config = {
	data : 'site/blocks/block-video/piechart/data/piechart.json',
	schema : {
		type : "object",
		title : "Piechart",
		  "properties": {
		  	"id": {
					"type": "string"
		  	},
		  	"labels": {
					"type": "string",
					"default": "tw,nl,de",
		  	},
		  	"values": {
					"type": "string",
					"default": "10,20,10",
		  	},
		    "title": {
		      "type": "string",
		      "title": "Titel"
		    },
		    "popup_title": {
		      "type": "string"
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
				"default": "cat-one"
			},
			"content": {
				"type": "string",
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
