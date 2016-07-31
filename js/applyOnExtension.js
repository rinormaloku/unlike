/**
 * Created by rmaloku on 19/07/2016.
 */

window.onload = function () {
    var hateToggler = document.getElementById('hateToggler');


    /*
    * Reads last state of hate. and sets the UI of the plugin
    * */
    chrome.storage.local.get("hateTogglerState", function (result) {
        hateToggler.checked = result.hateTogglerState;
    });


    /*
    * This event listener saves changes of the state to chrome local storage and
    * sends turnHateOn message which will be listened by applyOnPage.js (content script)
    * */
    hateToggler.addEventListener("click", function () {
        var updatedHateState = hateToggler.checked;
        chrome.storage.local.set({hateTogglerState: updatedHateState}, function () {});

        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "turnHateOn"});
        });
    });
};