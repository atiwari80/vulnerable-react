// Before: serialize.unserialize(user);
// After: JSON.parse(user);
function serializeUser(user) {
	if (!user || typeof user !== 'string') {
		return null;
	}
	try {
		return JSON.parse(user);
	} catch (e) {
		console.error(e);
		throw e;
	}
}

// Before: serialize.unserialize(users);
// After: JSON.parse(users);
function serializeUsers(users) {
	if (!users || typeof users !== 'string') {
		return null;
	}
	try {
		return JSON.parse(users);
	} catch (e) {
		console.error(e);
		throw e;
	}
}
