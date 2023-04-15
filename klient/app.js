async function logowanie() {
  const inputl = document.getElementById("inputl").value;
  const inputh = document.getElementById("inputh").value;

  const data = await fetch(`${baseurl}/checkpassword/${inputl}/${inputh}`).then(
    (response) => response.text()
  );
  console.log(data);
  if (data == "access") {
    localStorage.setItem("login", "zalogowano");
  } else {
    localStorage.setItem("login", "nie zalogowano");
  }
}
function checklogin() {
  if (localStorage.getItem("login") != "zalogowano") {
    window.location.href = "index.html";
  }
}
