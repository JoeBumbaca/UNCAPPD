export const create = (beer) => (
  $.ajax({
    method: "POST",
    url: "/api/beers",
    data: {
      beer
    }
  })
);

export const fetchBeers = data => (
  $.ajax({
    method: "GET",
    url: "/api/beers",
    data
  })
);

export const fetchBeer = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/beers/${id}`,
  })
);