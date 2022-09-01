const mainUrl = 'https://api.tvmaze.com';
const involvementMainUrl =
  'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const apiId = 'iagFZ6Xd4kMX1u8bmGvZ';
const lookupFetch = async (showId) => {
  const url = `${mainUrl}/shows/${showId}`;
  let show = await fetch(url);
  show = await show.json();
  return show;
};
const fetchComments = async (showId) => {
  const url = `${involvementMainUrl}/${apiId}/comments?item_id=${showId}`;
  let comments = await fetch(url);
  comments = await comments.json();
  return comments;
};
const showCommentsInApi = async (showId, name, insight) => {
  const url = `${involvementMainUrl}/${apiId}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: `${showId}`,
      username: name,
      comment: insight,
    }),
  });
  return response.json();
};
export { lookupFetch, fetchComments, showCommentsInApi };
