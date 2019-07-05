export const create = (beer) => (
  $.ajax({
    method: "POST",
    url: "/api/beers",
    data: {
      beer
    }
  })
);

export const fetchBeers = () => (
  $.ajax({
    method: "GET",
    url: "/api/beers",
  })
);

export const fetchBeer = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/beers/${id}`,
  })
);