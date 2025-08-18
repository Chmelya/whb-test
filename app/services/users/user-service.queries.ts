import { useQuery } from '@tanstack/react-query';
import { UserService } from './user-service';
import type { User } from '../../models/user';

export const useUsersQuery = () =>
	useQuery<User[]>({
		queryKey: ['users'],
		queryFn: () => UserService.getUsers(),
	});
