const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


const firebaseConfig = {
  apiKey: "AIzaSyDDsGb23-vQKX6XXryV6rfWLMtUsJ8nAZQ",
  authDomain: "ar-rs-b533e.firebaseapp.com",
  databaseURL: "https://ar-rs-b533e-default-rtdb.firebaseio.com",
  projectId: "ar-rs-b533e",
  storageBucket: "ar-rs-b533e.appspot.com",
  messagingSenderId: "128761492922",
  appId: "1:128761492922:web:c5ed060192f9742aec1983",
};


firebase.initializeApp(firebaseConfig);

//ref for database 
const PaperDetailsDB=firebase.database().ref('AR-RS');


const getEachDetail = (id) => {
  return document.getElementById(id).value;
};


const submitPaperDetails = (e) => {
  e.preventDefault();

  let Name=getEachDetail('Name');
  let PRN=getEachDetail('Prn');
  let RFID=getEachDetail('RFID');
  
  saveDetailsToDB(Name,PRN,RFID);

  // enabling alert

  document.querySelector(".alert").style.display="block";

  // remove alert
  setTimeout(()=>{
    document.querySelector(".alert").style.display = "None";
  },3000);

  //reseting form
  paper.reset();
};

const saveDetailsToDB=(Name,PRN,RFID)=>{
  let newPaperDetail=PaperDetailsDB.push();

  newPaperDetail.set({
    Name,PRN,RFID
    
  });
}
const paper=document.getElementById('storePaper');

paper.addEventListener('submit',submitPaperDetails);
