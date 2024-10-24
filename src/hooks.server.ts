import { createPbInstance } from '$lib/pocketbase';
import {redirect, type Handle} from '@sveltejs/kit';
import {sequence} from '@sveltejs/kit/hooks';

export const authentication: Handle = async ({event, resolve}) => {
	event.locals.pb = createPbInstance();

	// load the store data from the request cookie string
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	const model = event.locals.pb.authStore.model;

	try {
		// get an up-to-date auth store state by verifying and refreshing the loaded auth model (if any)
		if (event.locals.pb.authStore.isValid) {
			await event.locals.pb.collection('users').authRefresh();
			event.locals.user = structuredClone(model);
		}
	} catch {
		// clear the auth store on failed refresh
		event.locals.pb.authStore.clear();
		event.locals.user = null;
	}

	const response = await resolve(event);

	// send back the default 'pb_auth' cookie to the client with the latest store state
	// TODO: Remove secure:false during production
	response.headers.append('set-cookie', event.locals.pb.authStore.exportToCookie({secure: false}));

	return response;
};

const unprotectedPrefix = ['/login'];

export const authorization: Handle = async ({event, resolve}) => {
	// Protect any routes under /authenticated
	if (
		!unprotectedPrefix.some((path) => event.url.pathname.startsWith(path)) &&
		event.url.pathname !== '/'
	) {
		const loggedIn = await event.locals.pb.authStore.model;
		if (!loggedIn) {
			throw redirect(303, '/login');
		}
	}

	// If the request is still here, just proceed as normally
	const result = await resolve(event);
	return result;
};

export const handle = sequence(authentication, authorization);
