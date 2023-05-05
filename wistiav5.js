document.addEventListener("DOMContentLoaded", function(event) {
    const wistiaVideoId = "fe8502f5qi";

let wistiaEmbed = document.getElementById('wistia_embed');

console.log(wistiaEmbed)

wistiaEmbed.classList.add('wistia_async_'+wistiaVideoId)


window._wq = window._wq || [];
_wq.push({
  id: wistiaVideoId,
  options: {
    playerColor: "#54bbff",
    wmode: "transparent",
    fullscreenButton: false,
  },
  
  onReady: function (video) {

    let activeSurvey = null;
    const iframe = document.getElementById('survey');
    const iframe_container = document.getElementById('survey-container');
    
    video.bind("timechange", function(t) {
        let openSecond = 3;
        let closeSecond = 6;
        let surveyURL = 'https://es.surveymonkey.com/r/ZZZ5GB9'
        if(t > openSecond && t < closeSecond){
          if(!activeSurvey){
            activeSurvey = surveyURL;
            iframe.src = surveyURL;
            iframe_container.classList.add('visible');
          }

        }
        if(t > closeSecond){
          if(activeSurvey === surveyURL){
            activeSurvey = null;
            iframe.src = 'https://unipymelatam.com/emailImages/logo-unipyme-blanco.png';
            iframe_container.classList.remove('visible');
          }

        }
    });
    
        video.bind("timechange", function(t) {
        let openSecond = 13;
        let closeSecond = 16;
        let surveyURL = 'https://es.surveymonkey.com/r/8JCJZD3'
        if(t > openSecond && t < closeSecond){
          if(!activeSurvey){
            activeSurvey = surveyURL;
            iframe.src = surveyURL;
            iframe_container.classList.add('visible');
          }

        }
        if(t > closeSecond){
          if(activeSurvey === surveyURL){
            activeSurvey = null;
            iframe.src = 'https://unipymelatam.com/emailImages/logo-unipyme-blanco.png';
            iframe_container.classList.remove('visible');
          }

        }
    });
    
  }
});
});

