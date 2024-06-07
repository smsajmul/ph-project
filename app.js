function form(x) {
    
    const name = x.target.name.value;
    const email = x.target.email.value;
    const message = x.target.message.value;

    const successMsg = document.getElementById('success');
    
    const para = document.createElement('p');
    para.innerText = `Your name is ${name}.`;
    
    const emailPara = document.createElement('p');
    emailPara.innerText = `Your email : ${email}`;
    
    const msgPara = document.createElement('p');
    msgPara.innerText = `Your message : ${message}.`;
    
    successMsg.appendChild(para);
    successMsg.appendChild(emailPara);
    successMsg.appendChild(msgPara);

    return false;
    }


