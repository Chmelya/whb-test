import apiClient from '../api/apiClient';
import type { Post } from '../models/post';
import { ROUTES } from '../routes/paths';

export class PostsService {
	static getPosts = async () => {
		const res = await apiClient.get<Post[]>(ROUTES.posts);
		return res.data;
	};
}
