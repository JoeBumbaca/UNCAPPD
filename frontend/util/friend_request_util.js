export const createRequest = friend_request => (
  $.ajax({
    method: "POST",
    url: "/api/friend_requests",
    data: {
      friend_request
    }
  })
);


export const deleteRequest = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/friend_requests/${id}`
  })
)

