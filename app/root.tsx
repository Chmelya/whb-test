import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from '@tanstack/react-query';
import { useEffect } from 'react';
import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router-dom';

const queryClient = new QueryClient();

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Outlet />
		</QueryClientProvider>
	);
}

export const TestQuery = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['test'],
		queryFn: async () => {
			console.log('Запрос выполняется!');
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts/1'
			);
			return response.json();
		},
	});

	useEffect(() => {
		// Тест базового fetch
		fetch('https://jsonplaceholder.typicode.com/posts/1')
			.then((res) => console.log('RAW FETCH:', res.status, res.ok))
			.catch((err) => console.error('RAW FETCH ERROR:', err));

		// Тест работы Promise
		new Promise((resolve) => {
			console.log('PROMISE TEST');
			resolve('WORKING');
		}).then(console.log);
	}, []);

	console.log({ data, isLoading, isError });

	return (
		<div>
			<h2>Тест запроса</h2>
			{isLoading && <p>Загрузка...</p>}
			{isError && <p>Ошибка!</p>}
			<pre>{JSON.stringify(data, null, 2)}</pre>
		</div>
	);
};
