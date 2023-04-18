async function logowanie() {
  const inputl = document.getElementById("inputl").value;
  const inputh = document.getElementById("inputh").value;

  const data = await fetch(`${baseurl}/checkpassword/${inputl}/${inputh}`).then(
    (response) => response.text()
  );
  console.log(data);
  if (data == "admin") {
    localStorage.setItem("login", "admin");
  } else if (data == "user") {
    localStorage.setItem("login", "user");
  } else {
    localStorage.setItem("login", "nie zalogowano");
  }
}
function checklogin() {
  if (localStorage.getItem("login") != "admin") {
    window.location.href = "index.html";
  }
}
function checkuser() {
  if (localStorage.getItem("login") == "nie zalogowano") {
    window.location.href = "index.html";
  }
}
