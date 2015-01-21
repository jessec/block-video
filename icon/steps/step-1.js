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
                "format": "textarea",
                "propertyOrder": 8
            }
        }
    }
}


function init(step) {

	callback = function(editor){

		var test = {};

		$('textarea').on('dblclick', function(){
			
			// send to parent
			console.log("get wysywig");
			console.log(this);
			test.name = $(this).attr("name");
			Core9.parent.send({
				getwysiwyg : true
			});

			
			// send to parent 
			
			// recieve from parent.
			
			Core9.parent.receive(function(data, event) {

				console.log("form is recieving data : ");
				console.log(data);
				
				/*				console.log('Callback recieved data message : ');
				console.log(data.state.url);

				var tmpName = test.name.replace('root[','');
				tmpName = tmpName.substring(0, tmpName.length - 1);

				var name = editor.getEditor('root.'+tmpName);
				if(name) {
				  name.setValue(data.state.url);
				  console.log(name.getValue());
				}*/

			});

		});

	}
	
	Wizard.run(step, config, callback);
}
