let checkAge_Btn = document.getElementById("Check_age");
checkAge_Btn.addEventListener("click",()=>{
    let dobInp = document.querySelector("#dob").value;
    let result = document.querySelector("#result");

    if(!dobInp){
          result.innerText = "Please enter your Date of Birth!";
        return;
    }

    const dob = new Date(dobInp);
    const today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate()
      if (days < 0) {
    months--; // month not completed
    // get days from previous month
    let prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }

  if (months < 0) {
    years--; // year not completed
    months += 12;
  }
    
    
    
  result.innerText = `You are ${years} years, ${months} months, and ${days} days old.`;

   // 🎉 Celebration!
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });

})