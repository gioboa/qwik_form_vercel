import { component$ } from '@builder.io/qwik';
import { routeAction$, type DocumentHead, Form } from '@builder.io/qwik-city';

export const useAddUser = routeAction$(async (user) => {
	console.log('user', user);
	return {
		success: true,
		userID: Math.random(),
	};
});

export default component$(() => {
	const action = useAddUser();
	return (
		<Form action={action}>
			<input name='name' />
			<button type='submit'>Add user</button>
			{action.value?.success && <p>User added successfully</p>}
		</Form>
	);
});

export const head: DocumentHead = {
	title: 'Welcome to Qwik',
	meta: [
		{
			name: 'description',
			content: 'Qwik site description',
		},
	],
};
