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
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/directives": [3],
		"/directives/multi": [4],
		"/validators": [5],
		"/validators/multi": [6],
		"/validators/multi/different": [7],
		"/validators/multi/doesnt-end-with": [8],
		"/validators/multi/doesnt-start-with": [9],
		"/validators/multi/ends-with": [10],
		"/validators/multi/required-if": [11],
		"/validators/multi/same": [12],
		"/validators/multi/starts-with": [13],
		"/validators/string": [14],
		"/validators/string/alpha-dash": [16],
		"/validators/string/alpha-num": [17],
		"/validators/string/alpha": [15],
		"/validators/string/ascii": [18],
		"/validators/string/lowercase": [19],
		"/validators/string/uppercase": [20],
		"/validators/string/url": [21]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';