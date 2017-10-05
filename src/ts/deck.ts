declare function require(name: string): any;

const Reveal:any = require('../../node_modules/reveal/index.js');

(<any>window).Reveal = Reveal;

Reveal.initialize({
	width: 1080,
	transition: 'linear',
	slideNumber: 'c/t',
	history: true,
	mouseWheel: true,
	hideAddressBar: true
});