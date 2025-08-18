import apiClient from '../../api/apiClient';
import type { Post } from '../../models/post';
import type { Comment } from '../../models/comment';
import { ROUTES } from '../../routes/paths';

export class PostsService {
	static getPosts = async () => {
		const res = await apiClient.get<Post[]>(ROUTES.posts);
		return res.data;
	};

	static getCommentsByPostId = async (postId: number) => {
		const response = await apiClient.get<Comment[]>(ROUTES.getComments(postId));
		return response.data;
	};
}
