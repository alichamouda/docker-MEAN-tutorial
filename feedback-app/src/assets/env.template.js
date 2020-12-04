(function(window) {
    window["env"] = window["env"] || {};
  
    // Environment variables
    window["env"]["BACKEND_ADDRESS"] = "${BACKEND_ADDRESS}";
    window["env"]["BACKEND_PORT"] = "${BACKEND_PORT}";
  })(this);