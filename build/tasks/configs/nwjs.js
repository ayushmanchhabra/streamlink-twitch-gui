const platforms = require( "../common/platforms" );

const srcDir = [
	"<%= dir.tmp_prod %>/**"
];
const ignoreBinWin32 = "!<%= dir.tmp_prod %>/bin/win32/**";
const ignoreBinWin64 = "!<%= dir.tmp_prod %>/bin/win64/**";

const winIco = "<%= dir.resources %>/icons/icon-16-32-48-256.ico";
const macIcns = "<%= dir.resources %>/icons/icon-1024.icns";


module.exports = {
	options: {
		cacheDir: "<%= dir.cache %>",
		flavor  : "normal",
		zip     : false
	},

	win32: {
		options: Object.assign( {}, platforms.getNwBuildTarget( "win32" ), {
			version: "0.83.0",
			outDir : "<%= dir.releases %>/<%= package.name %>/win32",
			srcDir : [
				...srcDir,
				ignoreBinWin64
			],
			app: {
				icon: winIco
			}
		})
	},
	win64: {
		options: Object.assign( {}, platforms.getNwBuildTarget( "win64" ), {
			version: "0.83.0",
			outDir : "<%= dir.releases %>/<%= package.name %>/win64",
			srcDir : [
				...srcDir,
				ignoreBinWin32
			],
			app: {
				icon: winIco
			}
		})
	},

	osx64: {
		options: Object.assign( {}, platforms.getNwBuildTarget( "osx64" ), {
			version: "0.83.0",
			outDir : "<%= dir.releases %>/<%= package.name %>/osx64",
			srcDir : [
				...srcDir,
				ignoreBinWin32,
				ignoreBinWin64
			],
			app: {
				icon               : macIcns,
				CFBundleIdentifier : "<%= main['app-identifier'] %>",
				CFBundleName       : "<%= main['display-name'] %>",
				CFBundleDisplayName: "<%= main['display-name'] %>"
			}
		})
	},

	linux32: {
		options: Object.assign( {}, platforms.getNwBuildTarget( "linux32" ), {
			version: "0.83.0",
			outDir : "<%= dir.releases %>/<%= package.name %>/linux32",
			srcDir : [
				...srcDir,
				ignoreBinWin32,
				ignoreBinWin64
			]
		})
	},
	linux64: {
		options: Object.assign( {}, platforms.getNwBuildTarget( "linux64" ), {
			version: "0.83.0",
			outDir : "<%= dir.releases %>/<%= package.name %>/linux64",
			srcDir : [
				...srcDir,
				ignoreBinWin32,
				ignoreBinWin64
			]
		})
	}
};
