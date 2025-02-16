function calculateSavings() {
  const goal = parseFloat(document.getElementById("goal").value);
  const months = parseFloat(document.getElementById("months").value);
  const monthlySavings = goal / months;
  document.getElementById(
    "result"
  ).innerText = `You need to save #${monthlySavings.toFixed(2)} per month.`;
}

// Sign-Up Function
function signUp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (name && email && password) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Save user's name to Firestore (optional)
        const user = userCredential.user;
        return firebase.firestore().collection("users").doc(user.uid).set({
          name: name,
          email: email,
        });
      })
      .then(() => {
        alert("Account created successfully!");
        window.location.href = "index.html"; // Redirect to dashboard
      })
      .catch((error) => {
        alert(error.message);
      });
  } else {
    alert("Please fill in all fields.");
  }
}
