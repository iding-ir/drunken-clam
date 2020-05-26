export default [
  {
    display: "All",
    query: `?page=1&per_page=${process.env.REACT_APP_ITEM_PER_PAGE}`,
  },
  {
    display: "Pizza",
    query: `?page=1&per_page=${process.env.REACT_APP_ITEM_PER_PAGE}&food=pizza`,
  },
  {
    display: "Steak",
    query: `?page=1&per_page=${process.env.REACT_APP_ITEM_PER_PAGE}&food=steak`,
  },
];
