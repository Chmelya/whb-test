import { useQuery } from '@tanstack/react-query';
import { UserService } from './user-service';
import type { User } from '../../models/user';

export const useUsersQuery = () =>
	useQuery<User[]>({
		queryKey: ['users'],
		queryFn: () => UserService.getUsers(),
	});

export const useUserInfoQuery = (userId: number) =>
	useQuery<User>({
		queryKey: ['user', userId],
		queryFn: () => UserService.getUserInfo(userId),
	});
