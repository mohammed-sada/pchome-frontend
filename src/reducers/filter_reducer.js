import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);

      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
      };
    case SET_GRIDVIEW:
      return { ...state, gridView: true };
    case SET_LISTVIEW:
      return { ...state, gridView: false };
    case UPDATE_SORT:
      return { ...state, sort: action.payload };
    case SORT_PRODUCTS:
      const { filtered_products, sort } = state;
      let tempProducts = [...filtered_products];
      if (sort === "price-lowest") {
        tempProducts = filtered_products.sort((a, b) => a.price - b.price);
      }
      if (sort === "price-highest") {
        tempProducts = filtered_products.sort((a, b) => b.price - a.price);
      }
      if (sort === "name-a") {
        tempProducts = filtered_products.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }
      if (sort === "name-z") {
        tempProducts = filtered_products.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }
      return { ...state, filtered_products: tempProducts };

    case UPDATE_FILTERS:
      const { name, value } = action.payload;
      if (name === "category") {
        return {
          ...state,
          filters: { ...state.filters, [name]: value, subCategory: "all" },
        };
      }
      return { ...state, filters: { ...state.filters, [name]: value } };

    case FILTER_PRODUCTS:
      const { all_products } = state;
      const { text, category, subCategory, company, price } = state.filters;

      let temp_products = [...all_products];

      if (text)
        temp_products = temp_products.filter((p) =>
          p.name.toLowerCase().startsWith(text.toLowerCase())
        );

      if (category !== "all") {
        temp_products = temp_products.filter((p) => p.category === category);
      }

      if (subCategory !== "all") {
        temp_products = temp_products.filter(
          (p) => p.subCategory === subCategory
        );
      }

      if (company !== "all") {
        temp_products = temp_products.filter((p) => p.company === company);
      }

      temp_products = temp_products.filter((p) => p.price <= price);

      return { ...state, filtered_products: temp_products };

    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          price: state.filters.max_price,
        },
      };

    default:
      break;
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
