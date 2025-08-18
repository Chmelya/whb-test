import { useState } from 'react';
import {
	Box,
	Typography,
	Card,
	CardContent,
	CardHeader,
	Avatar,
	CircularProgress,
	Alert,
	TextField,
	Pagination,
	Stack,
} from '@mui/material';
import { usePostsQuery } from '../../services/posts/post-service.queries';

const PostsListPage = () => {
	const [page, setPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState('');
	const postsPerPage = 10;

	const { data: posts, isLoading, isError } = usePostsQuery();

	if (isLoading) {
		return (
			<Box display='flex' justifyContent='center' mt={4}>
				<CircularProgress />
			</Box>
		);
	}

	if (isError) {
		return (
			<Alert severity='error' sx={{ mt: 2 }}>
				Something went wrong...
			</Alert>
		);
	}

	const filteredPosts =
		posts?.filter(
			(post) =>
				post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
				post.body.toLowerCase().includes(searchTerm.toLowerCase())
		) || [];

	const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
	const paginatedPosts = filteredPosts.slice(
		(page - 1) * postsPerPage,
		page * postsPerPage
	);

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant='h4' component='h1' gutterBottom>
				Posts
			</Typography>

			<TextField
				fullWidth
				label='Search'
				variant='outlined'
				value={searchTerm}
				onChange={(e) => {
					setSearchTerm(e.target.value);
					setPage(1);
				}}
				sx={{ mb: 3 }}
			/>

			<Stack spacing={3}>
				{paginatedPosts.map((post) => (
					<Card key={post.id} elevation={3}>
						<CardHeader
							avatar={
								<Avatar sx={{ bgcolor: 'primary.main' }}>{post.userId}</Avatar>
							}
							title={post.title}
						/>
						<CardContent>
							<Typography variant='body1' color='text.secondary'>
								{post.body}
							</Typography>
						</CardContent>
					</Card>
				))}
			</Stack>

			{totalPages > 1 && (
				<Box display='flex' justifyContent='center' mt={4}>
					<Pagination
						count={totalPages}
						page={page}
						onChange={(_, value) => setPage(value)}
						color='primary'
					/>
				</Box>
			)}
		</Box>
	);
};

export default PostsListPage;
