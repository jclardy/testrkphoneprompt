
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const programmingCode = urlParams.get('code');

window.onload = function() {
    const codeLink = "<a href=\"telprompt:" + programmingCode + "\">Dial Programming Code</a>";
    document.getElementById('programmingCode').innerHTML = codeLink;
    location.href = "telprompt:" + programmingCode;
};