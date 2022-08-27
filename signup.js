let arr = JSON.parse(localStorage.getItem('UserData'))||[];
let getData=()=>{
let obj = {
     name : document.getElementById('name').value,
     email : document.getElementById('email').value,
     pass : document.getElementById('password').value
}
if(obj.name==""||obj.email==""||obj.pass==""){
    alert('Invaild details')
}
else{
   arr.push(obj)
   localStorage.setItem('UserData',JSON.stringify(arr))
   alert('Sign up sucessfull')
   window.location.replace('info.html')
}

}