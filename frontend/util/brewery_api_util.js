export const fetchAllBreweries = () => {
  return $.ajax({
    url: `/api/breweries`,
    method: 'GET'
  })
};

export const fetchSingleBrewery = (id) => {
  return $.ajax({
    url: `/api/breweries/${id}`,
    method: 'GET'
  })
}