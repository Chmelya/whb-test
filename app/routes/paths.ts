//TODO separate routes  to api and local
export const ROUTES = {
	main: '/',
	signIn: '/signIn',
	signUp: '/signUp',
	posts: '/posts',
	users: '/users',

	getUserInfo: (userId: number) => `/users/${userId}`,
	getComments: (postId: number) => `/posts/${postId}/comments`,
};
