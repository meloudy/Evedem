import Call from '../call';

export default async function productnew(name, height, width, depth, quantity, price, categoryId, color, description, picture) {
  try {
    const body = {
      name: name,
      height: height,
      width: width,
      depth: depth,
      quantity: quantity,
      price: price,
      categoryId: categoryId,
      color: color,
      description: description,
      picture: picture,
    };
    const [data, error] = await Call("/v1/products", "POST", body, true); // Adjust the endpoint to match products_post
    if (error !== undefined) {
      console.error("Call Fail:", error);
      return [false, error];
    }

    if (data && data.Error !== undefined) {
      return [undefined, "Failure to create product " + data.error]
    } else {
      return [data, undefined]
    }
  } catch (e) {
    console.error("Product Creation failed:", e);
    return [false, "Product Creation failed: " + e];
  }
}
