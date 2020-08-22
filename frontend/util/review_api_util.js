export const create = (formData) => (
  $.ajax({
    method: "POST",
    url: "/api/reviews",
    data: formData,
    contentType: false,
    processData: false
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