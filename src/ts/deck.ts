declare function require(name: string): any;

const Reveal:any = require('../../node_modules/reveal/index.js');

Reveal.initialize({
	width: 1080,
	transition: 'linear',
	slideNumber: 'c/t',
	history: true,
	mouseWheel: true,
	hideAddressBar: true
});