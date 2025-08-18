import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	CircularProgress,
	Alert,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useUsersQuery } from '../../services/users/user-service.queries';
import { ROUTES } from '../../routes/paths';

const UsersListPage = () => {
	const { data: users, isLoading, isError } = useUsersQuery();

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
				Error loading users
			</Alert>
		);
	}

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant='h4' component='h1' gutterBottom>
				Users List
			</Typography>

			<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
				{users?.map((user) => (
					<ListItem
						key={user.id}
						divider
						component={Link}
						to={ROUTES.userInfo(user.id)}
						sx={{
							textDecoration: 'none',
							color: 'inherit',
							'&:hover': { bgcolor: 'action.hover' },
						}}
					>
						<ListItemText
							primary={user.name}
							secondary={
								<>
									<Typography component='span' display='block'>
										@{user.username}
									</Typography>
									<Typography
										component='span'
										display='block'
										color='text.secondary'
									>
										{user.email}
									</Typography>
									<Typography component='span' display='block'>
										{user.address.city}, {user.address.street}
									</Typography>
								</>
							}
						/>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default UsersListPage;
