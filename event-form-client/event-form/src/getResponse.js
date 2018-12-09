const apiUrl = "http://localhost:4200/participants";

async function getResponse(participant) {
  await fetch(apiUrl, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(participant)
  })
    .then(response => {
      if (response.status === 200) {
        return window.alert('Success!');
      } else if (response.status === 400) {
        return window.alert('Incorrect or incomplete data was sent.');
      } else if (response.status === 404) {
        return window.alert('An URL was invalid or server is down.');
      } else {
        return window.alert('Unknown error occured.');
      }
    }).catch(err => window.alert("Server is probably unavailable.\n" + err));
}

export default getResponse;