document.getElementById("submitButton").addEventListener("click", function(e) {
    e.preventDefault();
    var number = document.getElementById("numberInput").value;
    var date = new Date();
    var dateString = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    var timeString = date.getHours() + ":" + date.getMinutes();
    var randCOD = randomStringGenerator()

    function randomStringGenerator() {
        let result = '';
        let characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let charactersLength = characters.length;
        for (let i = 0; i < 7; i++) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
    localStorage.setItem("number", number);
    localStorage.setItem("date", dateString);
    localStorage.setItem("time", timeString);
    localStorage.setItem("cod", randCOD)
  });
  