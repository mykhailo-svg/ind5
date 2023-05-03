const preloaderIt = document.querySelector('.preloader');

window.addEventListener('load', function ()  {
    console.log("load");
    preloaderIt.classList.add('prel_stop');
});



let lazyImg = document.querySelectorAll('.lazy-load');

console.log(lazyImg);
const windowHeight = document.documentElement.clientHeight;

let lazyImagesPositions = [];

if(lazyImg.length>0){
    lazyImg.forEach(img =>{
       
            lazyImagesPositions.push(img.getBoundingClientRect().top + pageYOffset);
            lazyScrollCheck();
            
        
    })
}
console.log(lazyImagesPositions);



function lazyScrollCheck() {
    let imgIndex = lazyImagesPositions.findIndex(
        item => pageYOffset >item - windowHeight * 1.3
    );
    
    if (imgIndex >= 0) {
        console.log("dffd");
            if (lazyImg[imgIndex].tagName == 'IMG') {
                console.log("defin");
                lazyImg[imgIndex].setAttribute("src", lazyImg[imgIndex].dataset.src);
                lazyImg[imgIndex].removeAttribute('data-src');
            }
            else{
                lazyImg[imgIndex].setAttribute("style", lazyImg[imgIndex].dataset.bg);
                lazyImg[imgIndex].removeAttribute('data-bg');
            }
            console.log( lazyImg[imgIndex].tagName);
            
            
           
            lazyImg[imgIndex].addEventListener('load', function ()  {
                lazyImg[imgIndex].parentElement.classList.remove('skeleton__img');
            });
       
       delete lazyImagesPositions[imgIndex];
    }
   
    
}

window.addEventListener('scroll', function ()  {
    lazyScrollCheck();
});




const videoPlayer = document.querySelector('.video__player');

const videoPlayerMedia = document.querySelector('.watch__video__item');
console.log(videoPlayerMedia);


const videoPlayerSources = videoPlayer.getElementsByTagName('source');
console.log(videoPlayerSources[1].src);
const videoPlayerButtons = document.getElementsByClassName('start__video_preview');

videoPlayer.addEventListener('click', function ()  {
    videoPlayer.classList.toggle('video_pl__hide');
    videoPlayerMedia.pause();
});

for (let i = 0; i < videoPlayerButtons.length; i++) {
    videoPlayerButtons[i].addEventListener('click', function ()  {
        videoPlayer.classList.toggle('video_pl__hide');
        videoPlayerSources[0].src =  videoPlayerButtons[i].getAttribute('webm');
        videoPlayerSources[1].src =  videoPlayerButtons[i].getAttribute('mp4');
        videoPlayerMedia.load();
        videoPlayerMedia.play();
        videoPlayerMedia.volume=0.3;
    });
    
}




const dropButtons = document.getElementsByClassName('stat__drop__button');
const popDowns = document.getElementsByClassName('stat__drop__content');
for (let i = 0; i < dropButtons.length; i++) {
    dropButtons[i].addEventListener('click', function ()  {
        for (let a = 0; a < dropButtons.length; a++) {
           
            if (!dropButtons[a].isEqualNode(this)) {
                    dropButtons[a].classList.remove('drop__show');
                    popDowns[a].classList.remove('drop__show');
                    console.log("yre");
            }
 
            
        }
            popDowns[i].classList.toggle('drop__show');
            dropButtons[i].classList.toggle('drop__show');
            
       
       
        
        
    });
    
    
}