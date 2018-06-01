window.onload = function(evt){
    console.log(`js loaded`);

    const chilledOutImage = document.getElementById('chilledOut');
    console.log(chilledOutImage);






    let lastPosition = window.scrollY;

    window.addEventListener('scroll', function(e) {
      
    
        let scrollY = window.scrollY;
        console.log('scrollY', scrollY);
        let scrollDirection = scrollY > lastPosition ? 'up' : 'down';
        console.log(`The window is scrolling ${scrollDirection}`);
        

        // HUMAN RESOURCES PANNEL:
        let hrTitle = document.getElementById('hrTitle');
        let chilledOutBoss = document.getElementById('chilledOutBoss');
        let applyNowButton = document.getElementById('applyNow');
        let blockquote = document.getElementsByTagName('blockquote')[0];
        console.log('chilledOut', chilledOutBoss);
        if(scrollY > 1300) {
            hrTitle.classList.add('fadeIn');
        }
        if(scrollY > 1400) {
            chilledOutBoss.classList.add('chilledOutBossFadeIn');
            applyNowButton.classList.add('applyNowAnimation');
            blockquote.classList.add('applyNowAnimation');
        } else if (scrollDirection === 'up' && scrollY < 1400){
            // chilledOutBoss.classList.remove('chilledOutBossFadeIn');
            // chilledOutBoss.classList.add('chilledOutBossFadeOut');
        }
        
        
       
    });




    var animateButton = function(e) {

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');
        
        e.target.classList.add('animate');
        setTimeout(function(){
          e.target.classList.remove('animate');
        },700);
      };
      
      var bubblyButtons = document.getElementsByClassName("bubbly-button");
      
      for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
      }



}