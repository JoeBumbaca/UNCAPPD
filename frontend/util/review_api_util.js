export const create = (review) => (
  $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: {
      review
    }
  })
);

export const fetchReviews = () => (
  $.ajax({
    method: "GET",
    url: "/api/reviews",
  })
);


export const fetchReview = (id) => (
  $.ajax({
    method: "GET",
    url: `/api/reviews/${id}`
  })
);