function login(e){
    e.preventDefault();
    console.log(e.target.name);
    const loginDetails = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    console.log(loginDetails);
    axios.post('http://localhost:3000/user/login',loginDetails)
        .then( response => {
            alert(response.data.message)
        }).catch(err => {
            console.log(JSON.St0ringfy(err));
            document.body.innerHTML += `<div style="color:red;">${err.message}<div>`
        })
}
