import apiClient from '../../api/apiClient';
import type { User } from '../../models/user';
import { ROUTES } from '../../routes/paths';

export class UserService {
	static getUsers = async () => {
		const res = await apiClient.get<User[]>(ROUTES.users);
		return res.data;
	};

	static getUserInfo = async (userId: number) => {
		const res = await apiClient.get<User>(ROUTES.userInfo(userId));
		return res.data;
	};
}
