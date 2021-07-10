export const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
};

export const getUniqueValues = (data, type) => {
  let items = data.map((p) => p[type]);
  if (type === "colors") items = items.flat();
  return ["all", ...new Set(items)];
};
