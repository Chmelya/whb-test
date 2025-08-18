export const ROUTES = {
	main: '/',
	signIn: '/signIn',
	signUp: '/signUp',
	posts: '/posts',
	users: '/users',
	userInfo: (userId: number) => `/users/${userId}`,
};
