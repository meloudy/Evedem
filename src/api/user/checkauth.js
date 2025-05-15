import Call from '../call';

export default async function checkauth() {
  try {
    const authkey = localStorage.getItem("$authkey")
    if (authkey === null) {
      return [false, ""]
    }

    const [_, error] = await Call("/v1/user/auth", "GET");
    if (error !== undefined) {
      console.error("User Check failed:", error);
      return [false, error];
    }

    return [true, ""];

  } catch (e) {
    console.error("User Check failed:", e);
    return [false, "User Check failed: " + e];
  }
}

