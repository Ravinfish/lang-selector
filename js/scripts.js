function hideResults() {
    document.getElementById("java").setAttribute("class", "hidden");
    document.getElementById("rust").setAttribute("class", "hidden");
    document.getElementById("groovy").setAttribute("class", "hidden");
    document.getElementById("noCode").setAttribute("class", "hidden");
  }


window.onload = function () {
  let form = document.querySelector("form#q5");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    hideResults();
    const q1 = document.querySelector("select#q1").value;
    const q3 = document.querySelector("select#q3").value;
    const q4 = document.querySelector("input#meal").value;
    const q5 = document.querySelector("select#q5").value;

    if (q1 === "monstera") {
      java.removeAttribute("class");
    } else if (q1 === "ponytailPalm") {
      rust.removeAttribute("class");
    } else if (q1 === "spider") {
      groovy.removeAttribute("class");
    } else if (q1 === "noPlant") {
      noCode.removeAttribute("class");
    }

  });
};