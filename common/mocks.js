module.exports = {
  generatePagination(values){
    return {
      content: [],
      pageable: "",
      totalPages: 10,
      numberOfElements: 10,
      totalElements: 100,
      last: false,
      sort: {
        unsorted: false,
        sorted: false,
        empty: false
      },
      first: false,
      size: 10,
      number: 1,
      empty: false,
      ...values
    }
  },
}
