export const API = {
  products: {
    getThree: `${process.env.NEXT_PUBLIC_DOMAIN}/api/products/getTopThree`,
    getColors: `${process.env.NEXT_PUBLIC_DOMAIN}/api/products/getColors`,
  },
  image: {
    get: `${process.env.NEXT_PUBLIC_DOMAIN}`,
  },
  reviews: {
    getThree: `${process.env.NEXT_PUBLIC_DOMAIN}/api/reviews/getTop`,
    getAll: `${process.env.NEXT_PUBLIC_DOMAIN}/api/reviews/getAll`,
    addReview: `${process.env.NEXT_PUBLIC_DOMAIN}/api/reviews/create`,
  },
  delivery: {
    getAddresses: `${process.env.NEXT_PUBLIC_DOMAIN}/api/delivery/getAdresses`,
    getWarehouses: `${process.env.NEXT_PUBLIC_DOMAIN}/api/delivery/getWarehouses`,
  }
};
