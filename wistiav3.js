// This here's a JavaScript file. Write any JavaScript you'd like to! It gets included in `views/index.html`.
// This project is already configured to use Browserify, so you can `require()` any node modules you include in package.json.

// Here's where we set up some embed options and do things with the player API when the video with id "df2872v5dr" is ready.
window._wq = window._wq || [];
_wq.push({
  // The id of the video embedded in `views/index.html`
  id: "df2872v5dr",

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

    video.bind("secondchange", (s) => {
      // maybe add some interactive goodness to the page?
    });

    video.bind("end", () => {
      // cellll-e-brate good times COME ON! 🎉
      console.log("The video ended");
    });
    
    // There are many other interesting events you can bind to: https://wistia.com/doc/player-api#events 
  }
});
