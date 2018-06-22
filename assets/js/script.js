function displayRestDivision() {
  // Déclaration des variables
  var firstNumber = document.getElementById("firstNumber").value;
  var secondNumber = document.getElementById("secondNumber").value;
  var regex = /([\d]+) || ([\d]+[.]?[\d]+)/;
  // Vérifie que les inputs sont biens des integer ou des float
  if(regex.test(firstNumber) == true && regex.test(secondNumber) == true){
    // Récupération du reste de la division de firstNumber / secondNumber
    var result = firstNumber % secondNumber;
    // Affichage du reste de la division
    alert(result);
  } else {
    // Affiche un message si les inputs ne sont pas des nombres
    alert('Please enter numbers')
  }
}
