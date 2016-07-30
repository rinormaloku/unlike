chrome.runtime.sendMessage({action: "show"});
// chrome.runtime.sendMessage({action: "alertConsole"});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'executeConsoleMessage') {
        console.debug('Button clicked message triggered');
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == "listenForMe") {
        console.debug('Apply On Page JS: We are listening.');
    }
});