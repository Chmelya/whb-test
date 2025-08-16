import apiClient from '../api/apiClient';
import { ROUTES } from '../routes/paths';

export class PostsService {
	static getPosts = async () => {
		const res = await apiClient.get<object>(ROUTES.posts);
		return res;
	};
}
