import Call from '../call';

export default async function fetchinfo(users, limit = undefined) {
  try {
    const body = { users: users, limit: limit === undefined ? 5 : limit };
    const [data, error] = await Call("/v1/user/fetch", "POST", body, true);
    if (error !== undefined) {
      console.error("Login failed:", error);
      return [false, error];
    }

    if (data && data.Error !== undefined) {
      return [undefined, "Failure to fetch " + data.error]
    } else {
      return [data, undefined]
    }
  } catch (e) {
    console.error("User Fetch failed:", e);
    return [false, "User Fetch failed: " + e];
  }
}

