The following corrected code demonstrates proper handling of asynchronous operations:

```javascript
// Correct data handling
firebase.database().ref('users/' + userId).once('value').then(function(snapshot) {
  if (snapshot.exists()) {
    const userData = snapshot.val();
    // Correct: using userData after it is fully fetched
    displayUserData(userData);
  } else {
    console.log('User data not found');
  }
}).catch(function(error) {
  console.error('Error fetching data:', error);
});

function displayUserData(user) {
  console.log(user.name); //This will now work correctly
}
```

This revised code uses promises to ensure that `displayUserData` is only called after the data has been successfully fetched from the database, resolving the potential error.