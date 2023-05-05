// This here's a JavaScript file. Write any JavaScript you'd like to! It gets included in `views/index.html`.
// This project is already configured to use Browserify, so you can `require()` any node modules you include in package.json.
  // (function(t,e,s,n){var o,a,c;t.SMCX=t.SMCX||[],e.getElementById(n)||(o=e.getElementsByTagName(s),a=o[o.length-1],c=e.createElement(s),c.type="text/javascript",c.async=!0,c.id=n,c.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd0pE80EByZ6GyDCQKegLsg78YapLmKwYtEB5LXeALSdt.js",a.parentNode.insertBefore(c,a))})(window,document,"script","smcx-sdk");



//(function(t,e,s,o){var n,c,l;t.SMCX=t.SMCX||[],e.getElementById(o)||(n=e.getElementsByTagName(s),c=n[n.length-1],l=e.createElement(s),l.type="text/javascript",l.async=!0,l.id=o,l.src="https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd0pE80EByZ6GyDCQKegLsg5yyEXe68KNbFh_2BHZq9JnJq.js",c.parentNode.insertBefore(l,c))})(window,document,"script","smcx-sdk");
// Here's where we set up some embed options and do things with the player API when the video with id "df2872v5dr" is ready.
window._wq = window._wq || [];
_wq.push({
  // The id of the video embedded in `views/index.html`
  id: "fe8502f5qi",

  // You can use Embed Options to customize the appearance and functionality of the video player.
  // Try uncommenting a few options below.
  // See the docs for more info: https://wistia.com/doc/embed-options 
  options: {
    // autoPlay: true,
    // controlsVisibleOnLoad: false,
    // email: "lennythedog@wistia.com",
    // endVideoBehavior: "loop",
    // fullscreenButton: false,
    // googleAnalytics: true,
    // playButton: false,
    playerColor: "#54bbff",
    // seo: true,
    // stillUrl: "https://my-awesome-website.com/my-thumbnail-url.jpg",
    // volume: 0.5,
    wmode: "transparent"
  },

  // When the video becomes ready, we can run a function here, using `video` as a handle to the Player API.
  // See all available events and methods at https://wistia.com/doc/player-api.
  onReady: function (video) {
    video.bind("play", function () {
      var playAlertElem = document.createElement("div");
      playAlertElem.style.padding = "20px";
      playAlertElem.innerHTML = `You played the video! Its name is ${video.name()}.`;
      document.body.appendChild(playAlertElem);
      return video.unbind;
    });

    let activeSurvey = null;
    const iframe = document.getElementById('iframe');
    const iframe_container = document.getElementById('iframe-container');
    
    video.bind("timechange", function(t) {
        let openSecond = 3;
        let closeSecond = 6;
        let surveyURL = 'https://es.surveymonkey.com/r/ZZZ5GB9'
        if(t > openSecond && t < openSecond + 1){
          if(!activeSurvey){
            activeSurvey = surveyURL;
            iframe.src = surveyURL;
            iframe_container.classList.add('visible');
          }

        }
        if(t > closeSecond && t < closeSecond + 1){
          if(activeSurvey === surveyURL){
            activeSurvey = null;
            iframe.src = activeSurvey;
            iframe_container.classList.remove('visible');
          }

        }
    });
    
  
    

    video.bind("end", () => {
      // cellll-e-brate good times COME ON! 🎉
      console.log("Opening survey");

      
    });
    
    // There are many other interesting events you can bind to: https://wistia.com/doc/player-api#events 
  }
});
