var db = firebase.firestore();


var submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var fullName = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var question = document.getElementById('question').value;

    db.collection('users').doc().set({
        fullName,
        mobile,
        address,
        question,
    }).then(()=>{location.assign('/')})
        .catch((e)=>console.log(e))
})
