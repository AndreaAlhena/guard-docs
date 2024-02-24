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
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35')
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
		"/directives/string/alpha-dash": [13],
		"/directives/string/alpha-num": [14],
		"/directives/string/alpha": [12],
		"/directives/string/ascii": [15],
		"/directives/string/lowercase": [16],
		"/directives/string/uppercase": [17],
		"/directives/string/url": [18],
		"/validators": [19],
		"/validators/multi": [20],
		"/validators/multi/different": [21],
		"/validators/multi/doesnt-end-with": [22],
		"/validators/multi/doesnt-start-with": [23],
		"/validators/multi/ends-with": [24],
		"/validators/multi/required-if": [25],
		"/validators/multi/same": [26],
		"/validators/multi/starts-with": [27],
		"/validators/string": [28],
		"/validators/string/alpha-dash": [30],
		"/validators/string/alpha-num": [31],
		"/validators/string/alpha": [29],
		"/validators/string/ascii": [32],
		"/validators/string/lowercase": [33],
		"/validators/string/uppercase": [34],
		"/validators/string/url": [35]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),

	reroute: (() => {})
};

export { default as root } from '../root.svelte';