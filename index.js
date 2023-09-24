function checkForSpam(message) {
    let result;
    // Change code below this line
  if (message.toLowerCase().includes("sale") || message.toLowerCase().includes("spam")) {
    result = true
  } else {
    result = false
  }
    // Change code above this line
    return result;
  }

  console.log(checkForSpam("Latest technology news"))
  console.log(checkForSpam("Get best sale offers now!"))
  
  