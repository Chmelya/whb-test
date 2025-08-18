import { useQuery } from '@tanstack/react-query';
import { PostsService } from './post-service';
import type { Post } from '../../models/post';

export const usePostsQuery = () =>
	useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: () => PostsService.getPosts(),
	});

export const useCommentsQuery = (postId: number) => {
	return useQuery({
		queryKey: ['comments', postId],
		queryFn: () => PostsService.getCommentsByPostId(postId),
		enabled: !!postId,
	});
};
