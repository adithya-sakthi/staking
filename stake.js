function increment(id) {
    var element = document.getElementById(id);
    var value = parseInt(element.value);
    element.value = value + 1;
  }
  function decrement(id) {
    var element = document.getElementById(id);
    var value = parseInt(element.value);
    if (value > 0) {
      element.value = value - 1;
    }
  }