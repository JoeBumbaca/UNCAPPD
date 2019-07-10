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
    url: `/api/beers/${id}`
  })
);

export const updateBeer = (beer) => (
  $.ajax({
    method: "PATCH",
    url: `/api/beers/${beer.id}`,
    data: {
      beer
    }
  })
);

export const deleteBeer = (beer) => (
  $.ajax({
    method: "DELETE",
    url: `api/beers/${beer.id}`
  })
)