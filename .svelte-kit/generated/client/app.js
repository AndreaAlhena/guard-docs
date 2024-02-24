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
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/directives": [3],
		"/directives/multi": [4],
		"/directives/multi/different": [5],
		"/directives/multi/doesnt-end-with": [6],
		"/directives/multi/doesnt-start-with": [7],
		"/directives/multi/ends-with": [8],
		"/directives/multi/required-if": [9],
		"/directives/multi/same": [10],
		"/directives/multi/starts-with": [11],
		"/validators": [12],
		"/validators/multi": [13],
		"/validators/multi/different": [14],
		"/validators/multi/doesnt-end-with": [15],
		"/validators/multi/doesnt-start-with": [16],
		"/validators/multi/ends-with": [17],
		"/validators/multi/required-if": [18],
		"/validators/multi/same": [19],
		"/validators/multi/starts-with": [20],
		"/validators/string": [21],
		"/validators/string/alpha-dash": [23],
		"/validators/string/alpha-num": [24],
		"/validators/string/alpha": [22],
		"/validators/string/ascii": [25],
		"/validators/string/lowercase": [26],
		"/validators/string/uppercase": [27],
		"/validators/string/url": [28]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';