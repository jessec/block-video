


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

	callback = function(){

		var name;

		$('input[type=url]').on('click', function(){
			console.log(this);
			name = $(this).attr("name");
			Core9.parent.send({
				geturlservice : true
			});

			Core9.parent.receive(function(data, event) {
				console.log('Callback recieved data message : ');
				console.log(data);
				console.log('Callback recieved url data : ');
				console.log(data.state.url);
				console.log("name : " + name);
				$("input[name='"+name+"']").val(data.state.url);
				console.log('Callback recieved event message : ');
				console.log(event);
			});

		});

	}

	Wizard.run(step, config, callback);
}
