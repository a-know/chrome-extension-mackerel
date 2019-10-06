chrome.runtime.onMessage.addListener(function(msg) {
    document.getElementById("metric-loadavg").setAttribute("title","これはloadavg5の\n説明です。");
});
