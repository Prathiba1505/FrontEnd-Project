function appendValue(value) {
    const display = document.getElementById("result");
    display.value += value;
  }

  function clearResult() {
    const display = document.getElementById("result");
    display.value = "";
  }

  function deleteLast() {
    const display = document.getElementById("result");
    display.value = display.value.slice(0, -1);
  }
  
  function calculateResult() {
    const display = document.getElementById("result");
    try {
      display.value = eval(display.value);
    } catch (error) {
      alert("Invalid expression!");
      display.value = "";
    }
  }
  