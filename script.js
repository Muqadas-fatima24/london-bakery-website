// for signin
// // form authentication start
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login-form");
  const reset = document.querySelector(".login-button .justify");
  const button = document.querySelector(".login-button .btn");
  const backto = document.querySelector(".login-button .backto ");
  const emailLogin = document.querySelector(".email-login input");
  const passwordLogin = document.querySelector(".pass-login input");
  const emailLabel = document.querySelector(".email-login .form-label");
  const passLogin = document.querySelector(".pass-login");
  const error = document.querySelector(".login-form .error");
  const error1 = document.querySelector(".login-form .error1");
  const email = document.querySelector(".email-login input");
  const password = document.querySelector(".pass-login input");
  function resetForm() {
    passLogin.style.display = "none";
    emailLogin.placeholder = "";
    emailLabel.innerText = "Your Email";
    backto.style.display = "initial";
    reset.style.display = "none";
    button.innerText = "Reset Password";
    error.style.display = "none";
    error.innerText = "";
    error.innerText = "";
  }
  function buttonclick() {
    if (!email.value.includes("@") && email.value != 0) {
      error.style.display = "initial";
      error.innerText = "No account found for this login";
    }
  }
  button.addEventListener("click", buttonclick);
  reset.addEventListener("click", resetForm);

  // to validate email and password
  // email
  function validateForm() {
    error.style.display = "none";
    error.innerText = "";
    email.value.innerText = "";
    password.value.innerText = "";

    if (!email.value.includes("@")) {
      error.style.display = "initial";
      error.innerText = "Wrong login/Password";
      return false;
    } else {
      error.style.display = "none";
    }

    if (password.value.length < 5 || password.value.length > 10) {
      error.style.display = "initial";
      error.innerText = "Wrong login/Password";
      return false;
    } else {
      error.style.display = "initial";
      error.innerText = "No account found for this login";
      return false;
    }
  }
});


// // ================================contact
document.addEventListener("DOMContentLoaded", function () {
  let buttonS = document.querySelector(".submit button");
  const emailInput = document.querySelector(".email input");
  const nameInput = document.querySelector(".name input");
  const subjInput = document.querySelector(".subj input");
  let textInput = document.querySelector(".textarea textarea");
  let errorMsg = document.querySelector(".error-msg");
  let suberror = document.querySelector(".submit");

  function subfnx(event) {
    event.preventDefault(); // Prevent default form submission

    let isValid = true;

    if (
      !emailInput.value.includes("@") ||
      emailInput.value.indexOf(".") === -1
    ) {
      errorMsg.classList.add("show");
      suberror.classList.add("error-m");
      emailInput.style.border = "1px solid #CB3E3E";
      emailInput.classList.add("invalid");
      isValid = false;
    } else {
      errorMsg.classList.remove("show");
      suberror.classList.remove("error-m");
      emailInput.style.border = "";
      emailInput.classList.remove("invalid");
    }

    if (
      nameInput.value === "" ||
      subjInput.value === "" ||
      textInput.value === ""
    ) {
      errorMsg.classList.add("show");
      suberror.classList.add("error-m");
      nameInput.classList.add("invalid");
      subjInput.classList.add("invalid");
      textInput.classList.add("invalid");
      nameInput.style.border = "1px solid #CB3E3E";
      subjInput.style.border = "1px solid #CB3E3E";
      textInput.style.border = "1px solid #CB3E3E";
      isValid = false;
    } else {
      errorMsg.classList.remove("show");
      suberror.classList.remove("error-m");
      nameInput.classList.remove("invalid");
      subjInput.classList.remove("invalid");
      textInput.classList.remove("invalid");
      nameInput.style.border = "";
      subjInput.style.border = "";
      textInput.style.border = "";
    }

    // If all conditions are met, redirect to the "thank you" page
    if (isValid) {
      window.location.href = "thanku.html"; // Replace 'thankyou.html' with the actual URL of your "thank you" page
    }
  }

  buttonS.addEventListener("click", subfnx);

 });
  // //   // ==================================end contact

//   // // // ==============================calendar
  document.addEventListener("DOMContentLoaded", function () {
    const currentMonthYear = document.getElementById("currentMonthYear");
    const calendarDays = document.getElementById("calendarDays");
    const prevMonthButton = document.getElementById("prevMonth");
    const nextMonthButton = document.getElementById("nextMonth");
    const timezoneDisplay = document.getElementById("timezoneDisplay");
    const countrySelect = document.getElementById("countrySelect");
    const displayDiv = document.querySelector(".display"); // Select the div with class 'display'

    let currentDate = new Date(2025, 4);
    let selectedDate = null;
    let selectedTimezone = "Asia/Qatar";

    // Initially hide the 'display' div
    displayDiv.style.display = "none";

    function generateCalendar(date) {
      const year = date.getFullYear();
      const month = date.getMonth();

      currentMonthYear.textContent = new Date(year, month).toLocaleString(
        "default",
        { month: "long", year: "numeric" }
      );

      const firstDayOfMonth = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();

      let daysHtml = "";

      if (month === 2 || month === 3 || month === 7) {
        // March, April, or August
        daysHtml =
          '<div class="no-appointments"><img src="/assets/images/noappoint.jpg"><p>Sorry, we have no more slots available for this month.</p><p>Our first availability is</p><p class="appointP" style="color:#E81D2E">Monday 19 May 2025</p></div>';
      } else {
        for (let i = 0; i < firstDayOfMonth; i++) {
          daysHtml += "<div></div>";
        }

        for (let i = 1; i <= daysInMonth; i++) {
          const dayOfWeek = new Date(year, month, i).getDay();
          let dayClass = "";

          if (
            (month === 4 && [19, 27].includes(i)) ||
            (month === 5 && [2].includes(i)) ||
            (month === 6 && [14, 15, 21, 22, 28, 29].includes(i))
          ) {
            dayClass = "selectable pre-selected";
          }

          if (
            (month === 4 && [19, 27].includes(i)) ||
            (month === 5 && [2].includes(i)) ||
            (month === 6 && [14, 15, 21, 22, 28, 29].includes(i))
          ) {
            daysHtml += `<div class="${dayClass}" style="border:1px solid rgb(238, 223, 212); border-radius:5px;">${i}</div>`;
          } else if (dayOfWeek === 0 || dayOfWeek === 6) {
            daysHtml += `<div class="${dayClass}" style="background-color: rgb(253,240,230);">${i}</div>`;
          } else {
            daysHtml += `<div class="${dayClass}">${i}</div>`;
          }
        }
      }

      calendarDays.innerHTML = daysHtml;

      prevMonthButton.style.display = month <= 2 ? "none" : "block";
      nextMonthButton.style.display = month >= 7 ? "none" : "block";
    }

    prevMonthButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() - 1);
      if (currentDate.getMonth() < 2) {
        currentDate.setMonth(2);
      }
      generateCalendar(currentDate);
    });

    nextMonthButton.addEventListener("click", () => {
      currentDate.setMonth(currentDate.getMonth() + 1);
      if (currentDate.getMonth() > 7) {
        currentDate.setMonth(7);
      }
      generateCalendar(currentDate);
    });
    

    calendarDays.addEventListener("click", (event) => {
      if (
        event.target.tagName === "DIV" &&
        event.target.classList.contains("selectable")
      ) {
        document
          .querySelectorAll("#calendarDays div.selected")
          .forEach((el) => el.classList.remove("selected"));
        event.target.classList.add("selected");

        const day = parseInt(event.target.textContent);
        selectedDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          day
        );

        updateTimezoneDisplay();
      }
    });

    const defaultTimezone = "Asia/Qatar";
    const initialTime = new Date(
      new Date().toLocaleString("en-US", { timeZone: defaultTimezone })
    );
    initialTime.setMinutes(0);
    const initialTimeFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: defaultTimezone,
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    timezoneDisplay.textContent = initialTimeFormatter.format(initialTime);

    countrySelect.addEventListener("change", function () {
      selectedTimezone = this.value;
      updateTimezoneDisplay();
    });

    countrySelect.value = defaultTimezone;

    function updateTimezoneDisplay() {
      if (selectedDate && selectedTimezone) {
        const timeFormatter = new Intl.DateTimeFormat("en-US", {
          timeZone: selectedTimezone,
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        });
        const targetTime = new Date(
          selectedDate.toLocaleString("en-US", { timeZone: selectedTimezone })
        );
        targetTime.setHours(19, 0, 0, 0);
        timezoneDisplay.textContent = timeFormatter.format(targetTime);
        displayDiv.style.display = "block"; // Show the 'display' div
      } else {
        timezoneDisplay.textContent = "";
        displayDiv.style.display = "none"; // Hide the 'display' div
      }
    }
  

    timezoneDisplay.addEventListener("click", () => {
      if (selectedDate) {
        const formattedDate = selectedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });

        const formattedTime = timezoneDisplay.textContent;

        const url = `form.html?date=${encodeURIComponent(
          formattedDate
        )}&time=${encodeURIComponent(
          formattedTime
        )}&timezone=${encodeURIComponent(selectedTimezone)}`;
        window.open(url, "_blank");
      }
    });

    generateCalendar(currentDate);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get("date");
    const time = urlParams.get("time");
    const timezone = urlParams.get("timezone");

    const timedisplayDiv = document.querySelector(".timedisplay");
    if (timedisplayDiv) {

      timedisplayDiv.innerHTML= `<div class="flex-part icon">
                <i class="fa-solid fa-calendar-days"></i>
                <strong class="fw-bold">${date}</strong>
            </div>      
            <span>${time} </span>
            <span class="text-muted">${timezone} </span>`;
    }
    
  });


// end time part
const formH4Element = document.querySelector(".formh4");

if (formH4Element) { // Check if the element exists
  formH4Element.textContent = formH4Element.textContent.toUpperCase();
}










// ====================================================to form.html

// document.addEventListener("DOMContentLoaded", function () {
//   let inputn = document.querySelector(".nameI input");
//   let inpute = document.querySelector(".emailI input");
//   let inputp = document.querySelector(".phoneI input");
//   let inputnation = document.querySelector(".nationI input");
//   let inputage = document.querySelector(".ageI input");
//   let inputid = document.querySelector(".idI input");

//   window.validateForm1 = function () {
//       let isValid = true; // Initialize isValid to true
//       // Email Validation
//       if (!inpute.value.includes("@") || inpute.value.indexOf(".") === -1) {
//           inpute.style.outline = "5px solid rgb(243, 142, 150) !important";
//           inpute.style.border = ".3px solid red !important";
//           isValid = false;
//       } else {
//           inpute.style.outline = "";
//           inpute.style.border = "";
//       }

//       // Empty Field Validation
//       if (
//           inputn.value === "" ||
//           inputid.value === "" ||
//           inputage.value === "" ||
//           inputp.value === "" ||
//           inputnation.value === ""
//       ) {
//           if (inputn.value === "") {
//               inputn.style.outline = "5px solid rgb(243, 142, 150) !important";
//               inputn.style.border = ".3px solid red !important";
//           } else {
//               inputn.style.outline = "";
//               inputn.style.border = "";
//           }

//           if (inputid.value === "") {
//               inputid.style.outline = "5px solid rgb(243, 142, 150) !important";
//               inputid.style.border = ".3px solid red !important";
//           } else {
//               inputid.style.outline = "";
//               inputid.style.border = "";
//           }

//           if (inputage.value === "") {
//               inputage.style.outline = "5px solid rgb(243, 142, 150) !important";
//               inputage.style.border = ".3px solid red !important";
//           } else {
//               inputage.style.outline = "";
//               inputage.style.border = "";
//           }

//           if (inputp.value === "") {
//               inputp.style.outline = "5px solid rgb(243, 142, 150) !important";
//               inputp.style.border = ".3px solid red !important";
//           } else {
//               inputp.style.outline = "";
//               inputp.style.border = "";
//           }

//           if (inputnation.value === "") {
//               inputnation.style.outline = "5px solid rgb(243, 142, 150) !important";
//               inputnation.style.border = ".3px solid red !important";
//           } else {
//               inputnation.style.outline = "";
//               inputnation.style.border = "";
//           }

//           isValid = false; // Set isValid to false if any field is empty
//       } else {
//           // Clear borders if all fields are filled
//           inputn.style.outline = "";
//           inputn.style.border = "";
//           inputid.style.outline = "";
//           inputid.style.border = "";
//           inputage.style.outline = "";
//           inputage.style.border = "";
//           inputp.style.outline = "";
//           inputp.style.border = "";
//           inputnation.style.outline = "";
//           inputnation.style.border = "";
//       }
//       if (isValid) {
//         window.open("booked.html", "_blank"); // Open booked.html in a new tab/window
//     }
//       return isValid; // Return true if valid, false otherwise

//       //////////////////////////////////////////////////////////////
      
//   };
// });
// // ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp for booked.html







// mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
// to practice form html and booked html

  document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const date = urlParams.get("date");
    const time = urlParams.get("time");
    const timezone = urlParams.get("timezone");

    // Populate both timedisplay divs on page load
    const timedisplayDivComplex = document.querySelector(".complex .timedisplay");
    const timedisplayDivMain = document.querySelector("main .timedisplay");

    if (timedisplayDivComplex) {
        timedisplayDivComplex.innerHTML = `
            <div class="flex-part icon">
                <i class="fa-solid fa-calendar-days"></i>
                <strong class="fw-bold">${date}</strong>
            </div>  
            <span>${time}</span>
            <span class="text-muted">${timezone}</span>
        `;
    }

    if (timedisplayDivMain) {
        timedisplayDivMain.innerHTML = `
            <div class="flex-part icon">
                <strong class="fw-bold">${date}</strong><span>${time}</span>
            </div>  
            
            <span class="text-muted">(${timezone})</span>
        `;
    }

    // ... (rest of your code) ...

  let inputn = document.querySelector(".nameI input");
  let inpute = document.querySelector(".emailI input");
  let inputp = document.querySelector(".phoneI input");
  let inputnation = document.querySelector(".nationI input");
  let inputage = document.querySelector(".ageI input");
  let inputid = document.querySelector(".idI input");
  let complex = document.querySelector(".complex");
  let mainpart = document.querySelector("main");


  window.validateForm1 = function () {
      let isValid = true; // Initialize isValid to true
      // Email Validation
      event.preventDefault()
      if (!inpute.value.includes("@") || inpute.value.indexOf(".") === -1) {
          inpute.style.outline = "5px solid rgb(243, 142, 150) !important";
          inpute.style.border = ".3px solid red !important";
          isValid = false;
      } else {
          inpute.style.outline = "";
          inpute.style.border = "";
      }

      // Empty Field Validation
      if (
          inputn.value === "" ||
          inputid.value === "" ||
          inputage.value === "" ||
          inputp.value === "" ||
          inputnation.value === ""
      ) {
          if (inputn.value === "") {
              inputn.style.outline = "5px solid rgb(243, 142, 150) !important";
              inputn.style.border = ".3px solid red !important";
          } else {
              inputn.style.outline = "";
              inputn.style.border = "";
          }

          if (inputid.value === "") {
              inputid.style.outline = "5px solid rgb(243, 142, 150) !important";
              inputid.style.border = ".3px solid red !important";
          } else {
              inputid.style.outline = "";
              inputid.style.border = "";
          }

          if (inputage.value === "") {
              inputage.style.outline = "5px solid rgb(243, 142, 150) !important";
              inputage.style.border = ".3px solid red !important";
          } else {
              inputage.style.outline = "";
              inputage.style.border = "";
          }

          if (inputp.value === "") {
              inputp.style.outline = "5px solid rgb(243, 142, 150) !important";
              inputp.style.border = ".3px solid red !important";
          } else {
              inputp.style.outline = "";
              inputp.style.border = "";
          }

          if (inputnation.value === "") {
              inputnation.style.outline = "5px solid rgb(243, 142, 150) !important";
              inputnation.style.border = ".3px solid red !important";
          } else {
              inputnation.style.outline = "";
              inputnation.style.border = "";
          }

          isValid = false; // Set isValid to false if any field is empty
      } else {
          // Clear borders if all fields are filled
          inputn.style.outline = "";
          inputn.style.border = "";
          inputid.style.outline = "";
          inputid.style.border = "";
          inputage.style.outline = "";
          inputage.style.border = "";
          inputp.style.outline = "";
          inputp.style.border = "";
          inputnation.style.outline = "";
          inputnation.style.border = "";
      }
    if (isValid) {
      // ... (Hide the form container) ...
      complex.style.display ="none";
      const name = inputn.value;
        const email = inpute.value;
        const phone = inputp.value;
        const nationality = inputnation.value;
        const age = inputage.value;
        const QID = inputid.value;
      // Show the <main> section
      document.querySelector("main .consumer1 .mails .mail2 .user-mail").innerHTML=`${email}`;
      document.querySelector("main .consumer1 .easytask .easy2").innerHTML=`
                            <ul>
                              <!-- 1 -->
                            
                              <li class="list-part" id="phone"> Phone:${phone}</li>
                              <!-- 2 -->
                              <li class="list-part" id="email">Email:${email}</li>
                              <!-- 3 -->
                              <li class="list-part" id="nationality"> Nationality:${nationality}</li>
                              <!-- 4 -->
                              <li class="list-part" id="age">Age:${age}</li>
                              <!-- 5 -->
                              <li class="list-part" id="gender">Gender:555</li>
                              <!-- 6 -->
                              <li class="list-part" id="qid">QID number:${QID}</li>
                            </ul>`
      mainpart.style.display = "block";
      
  }

      return isValid; // Return true if valid, false otherwise

      //////////////////////////////////////////////////////////////
      
  };
});
// ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp for booked.html













// let html = document.querySelector("html");
// let searchIcon = document.querySelector(".sec-ul .search");
// let searchbar = document.querySelector(".search-bar");
// let overlay = document.querySelector(".overlay");
// let bodytag = document.querySelector("body");
// function searchpart()
// {
//   html.classList.add("hidden");
//   overlay.classList.add("active");
//   searchbar.classList.add("active");

// }
// searchIcon.addEventListener("click" , searchpart); 




let html = document.querySelector("html");
let searchIcon = document.querySelector(".sec-ul .search");
let searchbar = document.querySelector(".search-bar");
let searchbarInp = document.querySelector(".search-bar input");
let overlay = document.querySelector(".overlay");
let bodytag = document.querySelector("body");

function searchpart() {
  bodytag.classList.add("hidden");
  overlay.classList.add("active");
  searchbar.classList.add("active");
  searchbarInp.classList.add("active");
}

function closeSearch() {
  bodytag.classList.remove("hidden");
  overlay.classList.remove("active");
  searchbar.classList.remove("active");
  searchbarInp.classList.remove("active");
  dropdown.classList.remove("dropdown-active"); 
}

searchIcon.addEventListener("click", searchpart);
// 2nd
bodytag.addEventListener("click", function(event) {
  if (!searchbar.contains(event.target) && !searchIcon.contains(event.target)) {
    closeSearch();
  }
});
// 3rd

const searchInput = document.querySelector(".search-bar input");
const dropdown = document.querySelector(".dropdown");

searchInput.addEventListener("input", function() {
  if (searchInput.value.trim() !== "") {
    dropdown.classList.add("dropdown-active");
    searchInput.classList.add("write"); 
  } else {
    dropdown.classList.remove("dropdown-active");
    searchInput.classList.remove("write"); 
  }
});

searchInput.addEventListener("click", function(event) {
  if (event.target.classList.contains("write")) {
    searchInput.value = "";
    dropdown.classList.remove("dropdown-active");
    searchInput.classList.remove("write"); 

  }
});
// 4th
const searchcut = document.querySelector(".search-cut input");

searchcut.addEventListener("input", function() {
  if (searchcut.value.trim() !== "") {
    dropdown.classList.add("dropdown-active");
    searchcut.classList.add("write-cut"); 
  } else {
    dropdown.classList.remove("dropdown-active");
    searchcut.classList.remove("write-cut"); 
  }
});

searchcut.addEventListener("click", function(event) {
  if (event.target.classList.contains("write-cut")) {
    searchcut.value = "";
    dropdown.classList.remove("dropdown-active");
    searchcut.classList.remove("write-cut"); 
  }
});