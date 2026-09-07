module.exports = function( grunt ) {
	function taskNwjs() {
		const done = this.async();
		const options = this.options();

		if ( this.flags.debug ) {
			options.flavor = "sdk";
		}

		options.mode = "build";

		import( "nw-builder" )
			.then( ( { default: nwbuild } ) => nwbuild( options ) )
			.then( () => {
				grunt.log.ok( "NW.js application created." );
				done();
			}, grunt.fail.fatal );
	}

	grunt.registerMultiTask(
		"nwjs",
		"Create an NW.js build of the application",
		taskNwjs
	);
};
