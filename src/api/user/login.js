import Call from '../call'; 

async function login(email, password) {
  try {
    const body = { email: email, password: password };
    const [data, error] = await Call("/v1/user/auth", "POST", body, false); 
    if (error !== undefined ) {
      console.error("Login failed:", error);
      return [false, error ]; 
    }

    if (data && data.login === "success") {
      if (data.authkey) {
        localStorage.setItem("$authkey", data.authkey);
        return [true, "Login successful"]; 
      } else {
        console.error("Login successful, but authkey is missing in response.");
        return [false, "Login successful, but authkey is missing."]; 
      }
    } else {
      console.error("Login failed:", data);
      return [false, data || "Login failed"];
    }
  } catch (e) {
    console.error("Login failed:", e);
    return [false, "Login failed: " + e];
  }
}

export default login;
