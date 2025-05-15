import Call from '../call';

export default async function logout() {
  try {
    const authkey = localStorage.getItem("$authkey")
    if (authkey === null) {
      return [false, undefined]
    }

    const [_, error] = await Call("/v1/user/auth", "DELETE");
    if (error !== undefined) {
      console.error("User Check failed:", error);
      return [false, undefined];
    }

    localStorage.clear()
    return [true, ""];
  } catch (e) {
    console.error("User Check failed:", e);
    return [false, "User Check failed: " + e];
  }
}

