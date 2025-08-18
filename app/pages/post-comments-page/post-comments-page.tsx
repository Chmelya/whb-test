import {
	Box,
	Typography,
	List,
	ListItem,
	Avatar,
	ListItemText,
	Divider,
	CircularProgress,
	Alert,
	TextField,
	Button,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';
import { useCommentsQuery } from '../../services/posts/post-service.queries';

const PostCommentsPage = () => {
	const { postId } = useParams<{ postId: string }>();
	const {
		data: comments,
		isLoading,
		isError,
	} = useCommentsQuery(Number(postId));
	const [newComment, setNewComment] = useState('');

	const handleAddComment = () => {
		setNewComment('');
	};

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
				Error loading comments
			</Alert>
		);
	}

	return (
		<Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
			<Typography variant='h4' component='h1' gutterBottom>
				Comments for Post #{postId}
			</Typography>

			<Box sx={{ mb: 4 }}>
				<TextField
					fullWidth
					multiline
					rows={4}
					variant='outlined'
					placeholder='Write your comment...'
					value={newComment}
					onChange={(e) => setNewComment(e.target.value)}
					sx={{ mb: 2 }}
				/>
				<Button
					variant='contained'
					onClick={handleAddComment}
					disabled={!newComment.trim()}
				>
					Add Comment
				</Button>
			</Box>

			<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
				{comments?.map((comment) => (
					<Box key={comment.id}>
						<ListItem alignItems='flex-start'>
							<Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
								<PersonIcon />
							</Avatar>
							<ListItemText
								primary={
									<>
										<Typography variant='subtitle1' component='span'>
											{comment.name}
										</Typography>
										<Typography
											variant='body2'
											color='text.secondary'
											sx={{ ml: 1 }}
										>
											({comment.email})
										</Typography>
									</>
								}
								secondary={
									<Typography variant='body1' color='text.primary'>
										{comment.body}
									</Typography>
								}
							/>
						</ListItem>
						<Divider variant='inset' component='li' />
					</Box>
				))}
			</List>
		</Box>
	);
};

export default PostCommentsPage;
