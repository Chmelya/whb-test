import {
	type RouteConfig,
	index,
	layout,
	route,
} from '@react-router/dev/routes';

export default [
	layout('./layouts/main-layout/main-layout.tsx', [
		index('./pages/main-pages/main-page.tsx'),
	]),
	route('*', './pages/not-found/not-found.tsx'),
] satisfies RouteConfig;
