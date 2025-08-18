import { useParams } from 'react-router-dom';
import {
	Box,
	Typography,
	Card,
	CardContent,
	Avatar,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	CircularProgress,
	Alert,
	Divider,
	Chip,
} from '@mui/material';
import { Email, Phone, Language, Home, Business } from '@mui/icons-material';
import { useUserInfoQuery } from '../../services/users/user-service.queries';

const UserDetailPage = () => {
	const { userId } = useParams<{ userId: string }>();

	const { data: user, isLoading, isError } = useUserInfoQuery(Number(userId));

	if (isLoading) {
		return (
			<Box display='flex' justifyContent='center' mt={4}>
				<CircularProgress />
			</Box>
		);
	}

	if (isError || !user) {
		return (
			<Alert severity='error' sx={{ mt: 2 }}>
				Error loading user data
			</Alert>
		);
	}

	return (
		<Box sx={{ p: 3, maxWidth: 800, mx: 'auto' }}>
			<Card elevation={3}>
				<CardContent>
					<Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
						<Avatar
							sx={{ width: 80, height: 80, mr: 3, bgcolor: 'primary.main' }}
						>
							{user.name.charAt(0)}
						</Avatar>
						<Box>
							<Typography variant='h4' component='h1'>
								{user.name}
							</Typography>
							<Chip
								label={`@${user.username}`}
								variant='outlined'
								sx={{ mt: 1 }}
							/>
						</Box>
					</Box>

					<Divider sx={{ my: 2 }} />

					<List>
						<ListItem>
							<ListItemIcon>
								<Email color='primary' />
							</ListItemIcon>
							<ListItemText primary='Email' secondary={user.email} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Phone color='primary' />
							</ListItemIcon>
							<ListItemText primary='Phone' secondary={user.phone} />
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Language color='primary' />
							</ListItemIcon>
							<ListItemText
								primary='Website'
								secondary={
									<a
										href={`https://${user.website}`}
										target='_blank'
										rel='noopener noreferrer'
									>
										{user.website}
									</a>
								}
							/>
						</ListItem>

						<ListItem>
							<ListItemIcon>
								<Home color='primary' />
							</ListItemIcon>
							<ListItemText
								primary='Address'
								secondary={`${user.address.street}, ${user.address.suite}, 
                                    ${user.address.city}, ${user.address.zipcode}`}
							/>
						</ListItem>

						{user.company && (
							<ListItem>
								<ListItemIcon>
									<Business color='primary' />
								</ListItemIcon>
								<ListItemText
									primary='Company'
									secondary={
										<>
											<Typography component='span' display='block'>
												{user.company.name}
											</Typography>
											<Typography
												component='span'
												display='block'
												fontStyle='italic'
											>
												{user.company.catchPhrase}
											</Typography>
										</>
									}
								/>
							</ListItem>
						)}
					</List>
				</CardContent>
			</Card>
		</Box>
	);
};

export default UserDetailPage;
