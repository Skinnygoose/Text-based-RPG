// Function to register a new user
export function registerUser(username, password) {
  fetch('http://localhost:5000/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }), // Send user data as JSON
  })
  .then(response => response.json())
  .then(data => {
    if (data.message) {
      console.log('User registered:', data.message);
    } else {
      console.log('Error:', data);
    }
  })
  .catch(error => {
    console.error('Error registering user:', error);
  });
}

// Function to fetch all users
export function fetchUsers() {
  fetch('http://localhost:5000/users')
    .then(response => response.json())
    .then(data => {
      console.log('Users:', data);
      // You can display this data in your UI if necessary
    })
    .catch(error => {
      console.error('Error fetching users:', error);
    });
}
