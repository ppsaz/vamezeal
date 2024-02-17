// async-script.js

// Load an external script asynchronously using the "defer" attribute
// This script won't block the page rendering
// It will execute after the DOM is fully built
// You can replace the URL with the actual path to your script
loadScript("/path/to/your/external-script.js");

// Example function to load a script
function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  script.async = true; // Set to "true" for asynchronous loading
  document.body.append(script);
}

// Other code or functions specific to your project can follow here
// ...
// Adsense Ad blocking recovery
<script async src="https://fundingchoicesmessages.google.com/i/pub-9324524444765938?ers=1"
  nonce="1i5Za73HUzAgT2OV9vjKgQ"></script>
<script
  nonce="1i5Za73HUzAgT2OV9vjKgQ">(function () { function signalGooglefcPresent() { if (!window.frames['googlefcPresent']) { if (document.body) { const iframe = document.createElement('iframe'); iframe.style = 'width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;'; iframe.style.display = 'none'; iframe.name = 'googlefcPresent'; document.body.appendChild(iframe); } else { setTimeout(signalGooglefcPresent, 0); } } } signalGooglefcPresent(); })();</script>

  <script>
function m1Function() {
  var input, filter, div, div, b, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase();
  div = document.getElementsByClassName("filterDiv")
  div = document.getElementById("global_V");
  div = div.getElementsByTagName("div");
  for (i = 0; i < div.length; i++) {
    b = div[i].getElementsByTagName("b")[0];
    txtValue = b.textContent || b.innerText;
    if (txtValue.toLowerCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
</script>

<script>
function sFunction() {
  var input, filter, div, div, b, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toLowerCase();
  div = document.getElementsByClassName("filterDiv")
  div = document.getElementById("shop_M");
  div = div.getElementsByTagName("div");
  for (i = 0; i < div.length; i++) {
    b = div[i].getElementsByTagName("b")[0]; txtValue = b.textContent || b.innerText; if
      (txtValue.toLowerCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
</script>

<script>
function dFunction() {
  var input, filter, div, div, b, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementsByClassName("filterDiv")
  div = document.getElementById("netizen_G");
  div = div.getElementsByTagName("div");
  for (i = 0; i < div.length; i++) {
    b = div[i].getElementsByTagName("b")[0];
    txtValue = b.textContent || b.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      div[i].style.display = "";
    } else {
      div[i].style.display = "none";
    }
  }
}
</script>

<script>
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    sRemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) sAddClass(x[i], "show");
  }
}

// Show filtered elements
function sAddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function sRemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnmiddle = document.getElementById("myBtnmiddle");
var btns = btnmiddle.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>

<script>
var data = { q: 'images/vamezeallogo.png' }
var key = "d84dfe494c6a60d9197b3e4b66dc5a67"

fetch('https://api.linkpreview.net', {
  method: 'POST',
  headers: {
    'X-Linkpreview-Api-Key': key,
  },
  mode: 'cors',
  body: JSON.stringify(data),
})
  .then(res => res.json())
  .then(response => {
    document.getElementById("mytitle").innerHTML = response.title
    document.getElementById("mydescription").innerHTML = response.description
    document.getElementById("myimage").src = response.image
    document.getElementById("myurl").innerHTML = response.url
  })
</script>