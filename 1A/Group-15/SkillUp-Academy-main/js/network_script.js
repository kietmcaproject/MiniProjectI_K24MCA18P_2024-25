//check for network connections
function checkNetworkStatus() {
    const networkStatusPopup = document.getElementById('network-status-popup');
    if (!navigator.onLine) {
      networkStatusPopup.textContent = "Please connect to a network.";
      networkStatusPopup.classList.add('show');
      return false;
    } else {
      networkStatusPopup.classList.remove('show');
      return true;
    }
  }
  
  window.addEventListener('load', checkNetworkStatus);
  
  window.addEventListener('online', checkNetworkStatus);
  window.addEventListener('offline', checkNetworkStatus);
  