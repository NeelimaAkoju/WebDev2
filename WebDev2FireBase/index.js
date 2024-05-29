
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import {getDatabase,
    ref,
    child,
    get,
    set,
    onValue} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDdcNXOACoQR238Gl9Fqb5l5n5KO62KziI",
    authDomain: "webdev5214sandbox.firebaseapp.com",
    projectId: "webdev5214sandbox",
    storageBucket: "webdev5214sandbox.appspot.com",
    messagingSenderId: "715923091314",
    appId: "1:715923091314:web:59bd798840dc36f18777eb",
    measurementId: "G-BEBR9NV368"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const database = getDatabase();
  const messages = ref(database, "messages"); //ref(databaseVariableName, <CollectionName>)
  onValue(messages, (snapshot) => {
        //console.log(snapshot);
        const ul = document.getElementById("messages");
        ul.replaceChildren();

        snapshot.forEach(childSnapShot => {
            console.log(childSnapShot.key,childSnapShot.val());
            const childData = childSnapShot.val();
            const text = document.createTextNode(childData.message + " " + childData.name);
            const li = document.createElement("li");

            li.appendChild(text);
            ul.appendChild(li);
        });
    }
  );
  //var formHandle = document.forms.save_form;
	//formHandle.onsubmit = processForm;
	//function processForm(){
    //    var inputMessage = formHandle.message.value;
    //    var inputName = formHandle.name.value;
    //    set(ref(database, 'messages/' + messageID), {
     //       message: inputMessage,
     //       name: inputName
      //    });
    //}
  
