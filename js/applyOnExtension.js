/**
 * Created by rmaloku on 19/07/2016.
 */

window.onload = function () {
    var initButton = document.getElementById('initConsoleMessage');

    initButton.addEventListener("click", function () {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "executeConsoleMessage"});
        });
    });

};


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "listenForMe") {
        console.debug('Apply On Extension JS: We are listening.');
    }
});