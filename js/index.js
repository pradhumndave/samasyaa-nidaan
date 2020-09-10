var db = firebase.firestore();


var submitbtn = document.getElementById('submit');
submitbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    var fullName = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var address = document.getElementById('address').value;
    var question = document.getElementById('question').value;

<<<<<<< HEAD
    if (fullName!=='' && mobile!=='' && address!=='' && question!==''){
        db.collection('users').doc().set({
            fullName,
            mobile,
            address,
            question,
        }).then(()=>{location.assign('/index.html')})
            .catch((e)=>console.log(e))

    } else {
        alert('Check all the fields')
    }

=======
    db.collection('users').doc().set({
        fullName,
        mobile,
        address,
        question,
    }).then(()=>{location.assign('/')})
        .catch((e)=>console.log(e))
>>>>>>> e48132bb9d2c504eb262057f73a995c2e2b952c2
})
