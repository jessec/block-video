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
				console.log(data);
				console.log('Callback recieved url data : ');
				console.log(data.state.url);
				console.log("name : " + test.name);

				var tmpName = test.name.replace('root[','');
				tmpName = tmpName.substring(0, tmpName.length - 1);


				//$("input[name='"+name+"']").val(data.state.url).trigger("change");
				//$("input[name='"+name+"']").trigger("change");

				var name = editor.getEditor('root.'+tmpName);

				// `getEditor` will return null if the path is invalid
				if(name) {
				  name.setValue(data.state.url);

				  console.log(name.getValue());
				}

			});

		});

	}

	callback2 = function(editor){

	}

	//Wizard.run(step, config, callback);
	Wizard.run(step, config, callback);
}
