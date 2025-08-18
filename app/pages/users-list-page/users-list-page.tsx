import {
	Box,
	Typography,
	List,
	ListItem,
	ListItemText,
	CircularProgress,
	Alert,
	TextField,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useUsersQuery } from '../../services/users/user-service.queries';
import { ROUTES } from '../../routes/paths';
import { useState, useMemo } from 'react';

const UsersListPage = () => {
	const { data: users, isLoading, isError } = useUsersQuery();
	const [searchTerm, setSearchTerm] = useState('');

	const filteredUsers = useMemo(() => {
		if (!users) return [];
		return users.filter(
			(user) =>
				user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.address.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
				user.address.street.toLowerCase().includes(searchTerm.toLowerCase())
		);
	}, [users, searchTerm]);

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

			<TextField
				fullWidth
				variant='outlined'
				placeholder='Search users...'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				sx={{ mb: 3 }}
			/>

			<List sx={{ width: '100%', bgcolor: 'background.paper' }}>
				{filteredUsers.length > 0 ? (
					filteredUsers.map((user) => (
						<ListItem
							key={user.id}
							divider
							component={Link}
							to={ROUTES.getUserInfo(user.id)}
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
					))
				) : (
					<Typography variant='body1' sx={{ p: 2, textAlign: 'center' }}>
						No users found matching your search
					</Typography>
				)}
			</List>
		</Box>
	);
};

export default UsersListPage;
