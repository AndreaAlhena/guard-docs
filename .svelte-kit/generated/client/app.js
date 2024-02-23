export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/directives": [3],
		"/directives/multi": [4],
		"/validators": [5],
		"/validators/multi": [6],
		"/validators/string": [7],
		"/validators/string/alpha-dash": [9],
		"/validators/string/alpha-num": [10],
		"/validators/string/alpha": [8],
		"/validators/string/ascii": [11],
		"/validators/string/lowercase": [12],
		"/validators/string/uppercase": [13],
		"/validators/string/url": [14]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';