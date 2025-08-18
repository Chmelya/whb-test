import { useQuery } from '@tanstack/react-query';
import { PostsService } from './post-service';
import type { Post } from '../../models/post';

export const usePostsQuery = () =>
	useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: () => PostsService.getPosts(),
	});
