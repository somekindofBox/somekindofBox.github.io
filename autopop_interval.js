var interval = 0;

var loadJS = function(url, implementationCode, location){
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to 
    //insert the <script> element

    var scriptTag = document.createElement('script');
    scriptTag.src = url;

    scriptTag.onload = implementationCode;
    scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
};

function wrinkler_pop(e){
    for(let w of Game.wrinklers){
        if(w.type === 0) w.hp = -10;
    }
}

function toggle_interval(){
    if(interval === 0){
        interval = setInterval(wrinkler_pop, 45000);
        Game.Popup("Interval set (45s)");
    } else {
        clearInterval(interval);
        interval = 0;
    }
}

loadJS('https://somekindofbox.github.io/mousetrap.js', function(){
    Mousetrap.bind('p', wrinkler_pop);
    Mousetrap.bind('s', toggle_interval);
}, document.body);

// Game.Objects['Wizard tower'].minigame.castSpell( Game.Objects['Wizard tower'].minigame.spells["hand of fate"])
