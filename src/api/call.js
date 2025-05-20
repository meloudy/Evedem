export const apihost = "https://ea.asdr.one";

export default async function Call(
  Route,
  Method,
  body,
  auth = true, 
  json = true
) {
  var value = "";
  if (auth) {
    value = localStorage.getItem("$authkey");
    if (value === null || value.length <= 0) {
      return [undefined, "login"];
    }
  }
  let fet
  try {
    fet = await fetch(apihost + Route, {
      method: Method,
      headers: auth
        ? {
          Authorization: value,
          'Content-Type': json ? 'application/json' : 'multipart/form-data'
        }
        : {
          'Content-Type': json ? 'application/json' : 'multipart/form-data' 
        },
      body: json ?  JSON.stringify(body) : body,
    });
  } catch (error) {
    return [undefined, "Unable to connect to server."]
  }

  try {
    if (fet.status === 204) {
      return ["", undefined]
    }
    const res = await fet.json();
    if (fet.status < 200 && fet.status >= 300) {
      console.error("Status " + fet.status + " " + fet.statusText)
      return [res, res];
    }
    if (auth && fet.status == 403) {
      localStorage.clear()
      location.href = "/login"
    }



    return [res, undefined];
  } catch (error) {
    return [undefined, error];
  }
}
