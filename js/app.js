var form = document.getElementById("mainForm");

var xhr = new XMLHttpRequest();
xhr.open("post", "/questions.json");
xhr.responseType = "json";

xhr.addEventListener("readystatechange", function () {
    if (this.readyState !== 4) {
        return;
    }
    for (var i = 0; i <= this.response.length; i++) {
        var question = document.createElement("label");
        var inputType = document.createElement(this.response[i].type);

        if (inputType.tagName !== "INPUT") {
            for (var j = 0; j < this.response[i].answers.length; j++) {
                var answer = document.createElement("option");
                answer.innerText = this.response[i].answers[j];
                inputType.appendChild(answer);
            }
        }
        question.innerHTML = this.response[i].question;
        question.appendChild(inputType);
        form.appendChild(question);
    }
});

xhr.send();