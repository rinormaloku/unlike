chrome.runtime.sendMessage({action: "show"});


chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'executeConsoleMessage') {
        console.debug('Button clicked message triggered');
    }
});