import Call from '../call';

export default async function fetchprod(catId, after = undefined, before = undefined) {
  try {
    const body = { cat_id : catId, before : before, after : after };
    const [data, error] = await Call("/v1/categories/products", "POST", body, false);
    if (error !== undefined) {
      console.error("Call Fail:", error);
      return [false, error];
    }

    if (data && data.Error !== undefined) {
      return [undefined, "Failure to fetch " + data.error]
    } else {
      return [data, undefined]
    }
  } catch (e) {
    console.error("Product Fetch failed:", e);
    return [false, "Product Fetch failed: " + e];
  }
}

