// ==UserScript==
// @name         mn3 - avantarji
// @version      0.1
// @description  Na strani joker.si/mn3njalnik omogoči prikaz animiranih avatarjev ob postu
// @author       DaMachk
// @match        http://www.joker.si/mn3njalnik/index.php?showtopic=*
// @grant        GM_xmlhttpRequest

// ==/UserScript==

var slikice = document.getElementsByClassName("ipsUserPhoto ipsUserPhoto_large");
var linkeci = document.getElementsByClassName("ipsUserPhotoLink");
var curr_i=0;
for(var i=0; i<slikice.length; i++) {
    if(slikice[i].src.substr(slikice[i].src.lastIndexOf(".")+1).search("gif")>=0){
        curr_i=i;
        var avantarcek= slikice[i].src.replace("photo-thumb-", "photo-");
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", avantarcek, false);
        xmlhttp.send(); 
        if(xmlhttp.status==200){
            slikice[i].src = avantarcek;
        }
        else{
            var avantarcek= slikice[i].src.replace("profile/photo-thumb-", "av-");
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open("GET", avantarcek, false);
            xmlhttp.send(); 
            if(xmlhttp.status==200){
                slikice[i].src = avantarcek;
            }
        }
    }
}      
