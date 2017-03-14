export const fetchBenches = (data) => {
  // debugger;
  return $.ajax({
    method: "GET",
    url: `api/benches`,
    data
  });
};
