const firebaseConfig = {
    apiKey: 'AIzaSyCNC1yjuoELuUQWxx-ighlrk66_eXWF_ZU',
    authDomain: 'test-form-a0a91.firebaseapp.com',
    projectId: 'test-form-a0a91',
    storageBucket: 'test-form-a0a91.appspot.com',
    messagingSenderId: '96671365146',
    appId: '1:96671365146:web:2322d520a88ee50f8379a3',
};

firebase.initializeApp(firebaseConfig);


const contactInfo = firebase.database().ref("infos");

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let email = document.querySelector(".email").value;
    let sub = document.querySelector(".sub").value;
    let message = document.querySelector(".message").value;
    console.log(email, sub, message);

    saveContactInfo(email, sub, message);

    document.querySelector(".contact-form").reset();

    sendEmail(email, sub, message);
}

function saveContactInfo(email, sub, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        email: email,
        sub: sub,
        message: message,
    });
    retrieveInfos();
}

function retrieveInfos() {
    let ref = firebase.database().ref("infos");
    ref.on("value", gotData);
}

function gotData(data) {
    let info = data.val();
    let keys = Object.keys(info);

    for (let i = 0; i < keys.length; i++) {
        let i = keys[i];
        let email = info[i].email;
        let sub = info[i].sub;
        let message = info[i].message;
        console.log(email, sub, message);

        let infosResults = document.querySelector(".infosResults");

        infosResults.innerHTML += `<div>
        <p><strong>Name:</strong>${email}<br/>
        <a><strong>Email:</strong>${sub}<br/>
        <a><strong>Message:</strong>${message}<br/>
        </p>
        </div>`;

    }
}

retrieveInfos();

function sendEmail(name, email, message) {
    Email.send({
            Host: 'smtp.gmail.com',
            Username: 'himalaya1612jaabi@gmail.com',
            Password: 'sfhwfvbmnvuaxjrw',
            To: 'prashanthnani9999@gmail.com',
            From: 'himalaya1612jaabi@gmail.com',
            Subject: '${name}sent you a message',
            Body: 'Name:${name}<br/>Email:${email}<br/>Message:${message}'

        })
        .then((message) => alert('mail sent successfully'))
}