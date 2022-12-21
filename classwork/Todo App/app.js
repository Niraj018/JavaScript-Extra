function show() {
    var input = document.querySelector("input");
    var body = document.querySelector("body");
    var p = document.createElement("p");
    var button1 = document.createElement('button');
    var button2 = document.createElement('button');

    p.textContent = input.value;
    body.appendChild(p);    
    input.value = "";
    button1.removeChild(p);
    button2.replaceChild(p);
  }
  