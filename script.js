fetch('http://localhost:3001/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, phone, message }),
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));