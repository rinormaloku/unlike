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