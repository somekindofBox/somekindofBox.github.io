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

loadJS('https://github.com/somekindofBox/wrinkle_pop/mousetrap.js', function(){
    Mousetrap.bind('p',
        function(e){
            for(let w of Game.wrinklers){
                if(w.type === 0) w.hp = -10;
            }
        }
);
    }, document.body);

