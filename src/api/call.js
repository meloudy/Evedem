const hostname = "http://abdelhadiseddar:3416";

export default async function Call(
  Route,
  Method,
  body,
  auth = true
) {
  var value = "";
  if (auth) {
    value = localStorage.getItem("$authkey");
    if (value === null || value.length <= 0) {
      return [undefined, "login"];
    }
  }
  try {
    const fet = await fetch(hostname + Route, {
      method: Method,
      headers: auth
        ? {
            Authorization: value,
            'Content-Type': 'application/json'
          }
        : {
          'Content-Type': 'application/json'
        },
      body: JSON.stringify(body),
    });
    if ( fet.status === 204 ) {
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
