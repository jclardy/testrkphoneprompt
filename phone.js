
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const programmingCode = urlParams.get('code');

window.onload = function() {
    const codeLink = "<a href=\"telprompt:" + programmingCode + "\">Dial Programming Code</a>";
    document.getElementById('programmingCode').innerHTML = codeLink;

};

let tId = setTimeout(function() {
    window.location.href = "telprompt:" + programmingCode;
    window.clearTimeout(tId);
}, 3000);