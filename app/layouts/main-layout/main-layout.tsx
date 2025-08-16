import React, { type ReactNode } from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<AppBar position='static' className='shadow-sm'>
				<Toolbar>
					<Typography
						variant='h6'
						component={Link}
						to='/'
						sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
					>
						My App
					</Typography>
					<Box sx={{ display: 'flex', gap: 2 }}>
						<Typography
							component={Link}
							to='/'
							color='inherit'
							sx={{ textDecoration: 'none' }}
						>
							Home
						</Typography>
						<Typography
							component={Link}
							to='/about'
							color='inherit'
							sx={{ textDecoration: 'none' }}
						>
							About
						</Typography>
						<Typography
							component={Link}
							to='/users'
							color='inherit'
							sx={{ textDecoration: 'none' }}
						>
							Users
						</Typography>
					</Box>
				</Toolbar>
			</AppBar>

			<Container maxWidth='lg' className='flex-grow py-6'>
				{children}
			</Container>

			<footer className='bg-gray-100 py-4 mt-auto'>
				<Container maxWidth='lg'>
					<Typography variant='body2' color='text.secondary' align='center'>
						© {new Date().getFullYear()} My App - All rights reserved
					</Typography>
				</Container>
			</footer>
		</div>
	);
};

export default MainLayout;
