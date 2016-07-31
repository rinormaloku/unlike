/*
* This script is executed when match is made ->
* If page in domain facebook.com/* then show the extension
* */
chrome.runtime.sendMessage({action: "show"});

function changeAllLikesTo(text) {
    var likesToHate = document.querySelectorAll('a[data-testid="fb-ufi-likelink"]');
    for (var i = 0; i < likesToHate.length; i++) {
        likesToHate[i].text = text;
    }
}

function hate() {
    changeAllLikesTo('Hate');
}

var mainContent = document.querySelector("div[id^='topnews_main_stream']");
var config = {childList: true, subtree: true};
var observer = new MutationObserver(function (mutations) {
    hate();
});

function setUpLikeAbility() {
    chrome.storage.local.get("hateTogglerState", function (result) {
        if (result.hateTogglerState) {
            document.styleSheets[0].insertRule('a[data-testid="fb-ufi-likelink"]{pointer-events: none !important;}', 0);

        } else {
            document.styleSheets[0].removeRule(0);
        }
        hate();
        observer.observe(mainContent, config);
    });
}

/*
* Call to set up the state according to last settings.
* Meaning: Extreme hate on or off.
* */
setUpLikeAbility();

/*
* Listener for messages from applyOnExtension.js
* */
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'turnHateOn') {
        setUpLikeAbility();
    }
});