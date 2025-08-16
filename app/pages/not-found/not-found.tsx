import { Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/paths';

const NotFound = () => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				minHeight: '100vh',
				textAlign: 'center',
				p: 3,
				backgroundColor: 'background.default',
			}}
		>
			<Typography
				variant='h1'
				sx={{ fontSize: '4rem', mb: 2, fontWeight: 'bold' }}
			>
				404
			</Typography>
			<Typography variant='h4' sx={{ mb: 3 }}>
				Page Not Found
			</Typography>
			<Typography variant='body1' sx={{ mb: 4, maxWidth: '500px' }}>
				The page you're looking for doesn't exist or has been moved.
			</Typography>

			<Button
				component={Link}
				to={ROUTES.main}
				variant='contained'
				size='large'
				sx={{
					px: 4,
					py: 2,
					fontSize: '1.1rem',
					textTransform: 'none',
				}}
			>
				Go to Home
			</Button>
		</Box>
	);
};

export default NotFound;
