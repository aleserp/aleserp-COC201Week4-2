function checkCreds() {
  console.log("checkCreds() function started");
  var firstName = document.getElementById("fName").value;
  var lastName = document.getElementById("lName").value;
  var badgeNum = document.getElementById("badgeID").value;
  var fullName = firstName + " " + lastName;

  console.log("FullName is: " + fullName + ", and Badge ID is: " + badgeNum);
// creates length requirements for # of characters allowed in fullName
  if (fullName.length > 20 || fullName.length < 2 ) {
    document.getElementById("loginStatus").innerHTML =
      "Invalid full name. Please try again.";
// if character requirements are met: check if badgeNum falls below the value of 999 but above -999
  } else if (badgeNum > 999 || badgeNum < -999 ) {
    document.getElementById("loginStatus").innerHTML =
      "Invalid badge number. Please try again.";
  }else{
      alert("Access granted. Welcome " + fullName);
      location.replace("UATSpacePage.html")
  }
}
