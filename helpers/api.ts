export const API = {
  products: {
    getThree: `${process.env.NEXT_PUBLIC_DOMAIN}/api/products/getTopThree`,
  },
  image: {
    get: `${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
  reviews: {
    getThree: `${process.env.NEXT_PUBLIC_DOMAIN}/api/reviews/getTop`,
  },
};
