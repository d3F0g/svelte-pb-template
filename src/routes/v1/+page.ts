import {redirect} from '@sveltejs/kit';

export const load = () => {
	throw redirect(303, '/v1/dashboard');
};
