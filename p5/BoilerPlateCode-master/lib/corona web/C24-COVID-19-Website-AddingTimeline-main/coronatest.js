

var firebaseConfig = {
     apiKey: "AIzaSyDhwKjto2tT7kEi8iXHPsVhOB_b8Iu38Zo",
     authDomain: "corona-website-b8dc8.firebaseapp.com",
     projectId: "corona-website-b8dc8",
     storageBucket: "corona-website-b8dc8.appspot.com",
     messagingSenderId: "216610952724",
     appId: "1:216610952724:web:c35d7b8e94672f1cfcf901"
   };

   firebase.initializeApp(firebaseConfig);
   var UserInputsRef= firebase.database().ref('UserInputs')
   document.getElementById('form').addEventListener("submit",submitform)
   function submitform(e){
     e.preventDefault();
     var fname= getInputVal('name');
     var profession= getInputVal('profession');
     var email= getInputVal('email');
     var dob= getInputVal('dob');
     var number= getInputVal('number');
     var state= getInputVal('state');
     state=state.toLowerCase()
     readState(state);
     var email= getInputVal('email');
     var emailstatus=validateEmail()
     var dateofbirth= getInputVal('dob');
     var profession= getInputVal('profession');
     var symptomsList=getSelectedCheckboxValues('symptoms');
     var selectedOption=document.querySelector('input[name=option]:checked').value;
     if(emailstatus)
     saveMessages( lname+""+fname , profession ,email , dob , number , state , selectedOption , symptomsList)

    }
    function readState(state){
      var centers;
      var ref =firebase.database().ref(state);
      ref.on('value',(data)=>{
        centers =data.val();
        document.getElementById('result').innerHTML="<br>"+centers.toUpperCase()
      })
    }
   
    function getInputVal(id){
      return document.getElementById(id).value
    }

    function saveMessages(name,profession,email,dob,number,state,selectedOption,symptomsList){
      var newuserInputsRef = UserInputsRef.push();
      newuserInputsRef.set({
        name:name,
        profession:profession,
        email:email,
        dob:dob,
        number:number,
        state:state,
        selectedOption:selectedOption,
        symptomsList:symptomsList
      })
      alert("Thank You, find the list of centers nearbby!");
    }

    function getSelectedCheckboxValues(name){
      const checkboxes=document.querySelectorAll(`input[name="${name}"]:checked`);
      let values= [ ];
      checkboxes.forEach((checkbox) =>{
        values.push(checkbox.value);
      });
      return values;
    }

    function validateEmail()
    {
      if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(testForm.email.value))
      {
        return (true)
      }
      alert("you have entered an invalid email address")
      return (false)
    
  }
      

    