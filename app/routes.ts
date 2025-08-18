import {
	type RouteConfig,
	index,
	layout,
	route,
} from '@react-router/dev/routes';

export default [
	layout('./layouts/main-layout/main-layout.tsx', [
		index('./pages/main-page/main-page.tsx'),
		route('posts', './pages/posts-list-page/posts-list-page.tsx'),
		route('users', './pages/users-list-page/users-list-page.tsx'),
		route('users/:userId', './pages/user-info-page/user-info-page.tsx'),
	]),
	route('*', './pages/not-found/not-found.tsx'),
] satisfies RouteConfig;
