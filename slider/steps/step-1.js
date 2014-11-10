var test = {};


var config = {
		data : 'site/blocks/block-video/slider/data/slider.json',
		schema : {
			type : "object",
			title : "Slider",
			"properties" : {
				"url1" : { "type" : "string" , "format": "url"},
				"url2" : { "type" : "string" , "format": "url"},
				"url3" : { "type" : "string" , "format": "url"},
				"url4" : { "type" : "string" , "format": "url"}
			}
		}
}


function init(step) {

	callback = function(editor){



		$('input[type=url]').on('dblclick', function(){
			console.log(this);
			test.name = $(this).attr("name");
			Core9.parent.send({
				geturlservice : true
			});

			Core9.parent.receive(function(data, event) {
				console.log('Callback recieved data message : ');
				console.log(data.state.url);

				var tmpName = test.name.replace('root[','');
				tmpName = tmpName.substring(0, tmpName.length - 1);

				var name = editor.getEditor('root.'+tmpName);
				if(name) {
				  name.setValue(data.state.url);
				  console.log(name.getValue());
				}

			});

		});

	}


	Wizard.run(step, config, callback);
}
