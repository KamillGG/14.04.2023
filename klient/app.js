async function logowanie(){
    const inputl = document.getElementById("inputl").value
    const inputh = document.getElementById("inputh").value

    const data = await fetch(`${baseurl}/checkpassword/${inputl}/${inputh}`)
    var json = data.json()
    console.log(json)
}