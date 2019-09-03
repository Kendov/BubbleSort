const amount = document.getElementById('size');
const speed = document.getElementById('speed');
const mix = document.getElementById('mix');
const start = document.getElementById('start');
const content = document.getElementById('content');

var sound = new Audio('sound.mp3');

var div=[];

amount.oninput = ()=>{mix.click()};

mix.addEventListener('click', ()=>{
    
    console.log(amount.value);
    content.innerHTML = '';
    for(var i = 0; i < amount.value; i++){
        div[i] = document.createElement("div");
        var rand = Math.floor(Math.random() * 100) + 1;
        div[i].setAttribute('data-value', rand.toString());
        div[i].style.height = (rand).toString()+"%";
        
        if(amount.value <= 30)
            div[i].innerHTML = rand;

        console.log((Math.floor(Math.random() * 90) + 1).toString());
        content.appendChild(div[i]);
        console.log('new div');
    }
    
    //console.log(div);
})


start.addEventListener('click', ()=>{
    var swipe = true;
    var cantimeoute = true;
    var temp;
    console.log(parseInt(div[3].getAttribute('data-value')) );
    while(swipe){
        swipe = false;

        (function Loop () {
            setTimeout(function () {
                for(var i = 0; i < div.length - 1;i++){
                    //console.log("test "+ getValue(i) + " " + getValue(i+1) + " " + typeof(getValue(i)));
    
                    if(getValue(i) > getValue(i+1)){
                        temp = getValue(i);
                        div[i].style.height = div[i+1].style.height;
                        div[i].setAttribute('data-value', div[i+1].getAttribute('data-value'));
                        //div[i].style.backgroundColor = "#adaeff";
                    
                        div[i+1].style.height = temp.toString() + "%";
                        div[i+1].setAttribute('data-value', temp.toString());
                        
                        if(amount.value <= 30){
                            div[i].innerHTML = div[i+1].innerHTML;
                            div[i+1].innerHTML = temp;
                        }
    
                        swipe = true;
                        cantimeoute = true;

                        //sound.volume = getValue(i)/100;
                        sound.playbackRate = speed.value < 100 ? speed.value * 0.16 : 1;
                        sound.currentTime = 0;
                        sound.play();
                        //div[i].style.backgroundColor = "#0004ff";
                        
                    }
                    
                }
                
                
                if (cantimeoute) {          
                    console.log("test");
                    cantimeoute = false;
                    Loop();       
                }
            }, speed.value);
        })();
        
        cantimeoute = false;
    }
    console.log("done");
    

})
function getValue(index){
    
    //console.log("from function" + parseInt(variable.getAttribute('data-value')));
    return parseInt(div[index].getAttribute('data-value'));
}







// start.addEventListener('click', ()=>{
//     var swipe = true;
//     var temp;
//     console.log(parseInt(div[3].getAttribute('data-value')) );
//     while(swipe){
//         swipe = false;

//         for(var i = 0; i < div.length - 1;i++){
//             //console.log("test "+ getValue(i) + " " + getValue(i+1) + " " + typeof(getValue(i)));

//             if(getValue(i) > getValue(i+1)){
//                 temp = getValue(i);
//                 div[i].style.height = div[i+1].style.height;
//                 div[i].setAttribute('data-value', div[i+1].getAttribute('data-value'));
            
//                 div[i+1].style.height = temp.toString() + "%";
//                 div[i+1].setAttribute('data-value', temp.toString());
                
//                 if(amount.value < 30){
//                     div[i].innerHTML = div[i+1].innerHTML;
//                     div[i+1].innerHTML = temp;
//                 }

//                 swipe = true;
                
                
//             }
            
//         }
        
        
//     }
//     console.log("done");

// })