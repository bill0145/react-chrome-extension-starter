chrome.runtime.onMessage.addListener(async function (
    request,
    sender,
    sendResponse
  ) {
      sendResponse(window.location.href)
  })
