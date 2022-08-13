var submit=document.querySelector('input[type="submit"]');
var username=document.querySelector('input[type="text"]');
var password0=document.querySelector('#psw0');
var password1=document.querySelector('#psw1');
var login=document.querySelector('#login');
var register=document.querySelector('#register');
var logkapcs=false;
var regkapcs= true;
var logsum=1;
var regsum=0;
var nametext=document.querySelector('#nametext');
var passwordtext=document.querySelector('#passtext');
var arrow1=document.querySelector('#left1');
var arrow2=document.querySelector('#left2');
var szem1=document.querySelector('#szem1');
var szem2=document.querySelector('#szem2');
var condcheck=document.querySelector('#condcheck');
var container0=document.querySelector('span:nth-child(3)');
var container1=document.querySelector('#container1');
var container2=document.querySelector('span:nth-child(4)');


// login-register gombok slideeres mukodese,funkcioi

function switchButton(summ,nullazo,num1,num2,num3,num4) {
    document.querySelector('form').classList.add("fadein"); 
    summ++;
    nullazo=0;
    if(summ==1){
        if(login.className==`buttonAnimation${num1}` && register.className==`buttonAnimation${num2}`){
                login.classList.remove(`buttonAnimation${num1}`);
                register.classList.remove(`buttonAnimation${num2}`); 
        }
        login.classList.toggle(`buttonAnimation${num3}`);
            register.classList.toggle(`buttonAnimation${num4}`);
    }
    console.log(`buttonAnimation${num1}`)
    console.log(`buttonAnimation${num2}`)
    console.log(`buttonAnimation${num3}`)
    console.log(`buttonAnimation${num4}`)
    setTimeout(()=>{document.querySelector('form').classList.remove("fadein"); },700)
}


register.addEventListener("click", ()=>{
    //switchButton(regsum,logsum,1,2,3,4);
    document.querySelector('form').classList.add("fadein"); 
    regsum++;
    logsum=0;
    if(regsum==1){
        if(login.className=="buttonAnimation1" && register.className=="buttonAnimation2"){
                login.classList.remove("buttonAnimation1");
                register.classList.remove("buttonAnimation2"); 
        }
        login.classList.toggle("buttonAnimation3");
            register.classList.toggle("buttonAnimation4");
    }

    container0.style.display="inline-flex";    
    container1.style.display="inline-flex";
    container2.style.display="none"; 
    setTimeout(()=>{document.querySelector('form').classList.remove("fadein"); },700)
})


login.addEventListener("click", ()=>{

    //switchButton(logsum,regsum,3,4,1,2);
    document.querySelector('form').classList.add("fadein"); 
    logsum++;
    regsum=0;
    if(logsum==1){
        if(login.className=="buttonAnimation3" && 
        register.className=="buttonAnimation4" ){
        login.classList.remove("buttonAnimation3");
        register.classList.remove("buttonAnimation4"); 
    }
        
        login.classList.toggle("buttonAnimation1");
        register.classList.toggle("buttonAnimation2");  
    }
    if(container0.style.display="inline-flex"){
        container0.style.display="none";
        container1.style.display="none";
        container2.style.display="inline-flex";
        /*container0.classList.add("fadeout2");    
        container1.classList.add("fadeout2");    
        container2.classList.add("fadein");  */
        
    }
    setTimeout(()=>{document.querySelector('form').classList.remove("fadein"); },700)
})

//belepes helyessegenek a tesztelese submit eseten

    var nameReg= /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    var passwordReg=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function errorbox(arrow,textbox,input1,input2){
    input1.classList.add("shake");
    arrow.style.display="inline";
    textbox.style.display="inline"; 
    arrow.classList.add("fadeout");
    textbox.classList.add("fadeout"); 
    setTimeout(()=>{
        arrow.style.display="none";
        textbox.style.display="none";
    },5000)
 }

submit.addEventListener("click",(e)=>{

    if(!condcheck.checked&&regsum==1){
        document.querySelector("#terms").style.display="inline-block";
    }else  document.querySelector("#terms").style.display="none";
    
    e.preventDefault();

    if(password0.value.trim()==""||!passwordReg.test(password0.value)){
        errorbox(arrow2,passwordtext,password0)

    }else if(password0.value!==password1.value && regsum === 1){
        passwordtext.textContent = "Nem egyezik a két jelszó!";
        errorbox(arrow2,passwordtext,password0);
    }else{
        arrow2.style.display="none";
        passwordtext.style.display="none";
    }
    setTimeout(()=>{
        password0.classList.remove("shake");
    },500)


    if(username.value.trim()==""||!nameReg.test(username.value)){

        errorbox(arrow1,nametext,username)

    }else{
        arrow1.style.display="none";
        nametext.style.display="none";
    }
    setTimeout(()=>{
        username.classList.remove("shake");
    },500)


})

function visible(event){
    var x = event.target.previousElementSibling;
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

if(condcheck.checked){
    console.lof(yes)
}



    


