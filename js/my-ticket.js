window.addEventListener("load", function() {
    var number = localStorage.getItem("number");
    var date = localStorage.getItem("date");
    var time = localStorage.getItem("time");
    var cod = localStorage.getItem("cod")
    document.getElementById("number").innerHTML = number;
    document.getElementsByClassName("data")[0].innerHTML = date;
    document.getElementsByClassName("data-time")[0].innerHTML = time;
    document.getElementsByClassName("text-number")[0].innerHTML = cod ;

  });
