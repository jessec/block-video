jQuery(document)
		.ready(
				function($) {

					function rightNow() {
						if (window['performance']
								&& window['performance']['now']) {
							return window['performance']['now']();
						} else {
							return +(new Date());
						}
					}

					var fps = 6, currentFrame = 0, totalFrames = 36, img = $("#cinemagraph")[0], currentTime = rightNow();

					// start();

					// slider
					$("#ess-banner").anythingSlider({
						buildNavigation : false,
						buildStartStop : false,
						buildArrows : true,
						resizeContents : true,
						hashTags : false,
						autoPlay : true,
						onInitialized : function(e, slider) {
							currentTime = rightNow();
						}
					})
					// Initialize video extension
					// see
					// https://developers.google.com/youtube/player_parameters?hl=en#Parameters
					// for a list of parameters
					.anythingSliderVideo({
						// video id prefix; suffix from
						// $.fn.anythingSliderVideo.videoIndex
						videoId : 'asvideo',
						// auto load YouTube api script
						wmode : "opaque",
						youtubeAutoLoad : true,
						// see:
						// https://developers.google.com/youtube/player_parameters#Parameters
						youtubeParams : {
							modestbranding : 1,
							iv_load_policy : 3,
							fs : 1
						}
					});
				});