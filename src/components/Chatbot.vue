<template>
    <h1>
      test
    </h1>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
   
    method: {
      
      },
    mounted(){
       
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"21b2d89b5999bb78279f4dc43c442a3e8","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */
      
    }
}
  </script>
  
  <style>
  .chatbot {
    width: 300px;
    border: 1px solid #ccc;
    padding: 10px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }
  .chatbox {
    height: 200px;
    overflow-y: auto;
  }
  .user {
    text-align: right;
    color: blue;
  }
  .bot {
    text-align: left;
    color: green;
  }
  </style>
  