declare function require(name: string): any;

const Reveal:any = require('../../node_modules/reveal/index.js');

Reveal.initialize({
	transition: 'linear',
	slideNumber: true,
	history: true,
	mouseWheel: true
});