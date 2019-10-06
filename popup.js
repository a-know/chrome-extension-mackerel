document.addEventListener("DOMContentLoaded", function(){
    var enableDescriptionFunc = function(){
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {});
        });
    }
    document.getElementById("enable-description").addEventListener("click", enableDescriptionFunc);
});
