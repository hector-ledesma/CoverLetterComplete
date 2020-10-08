// const { charFromHexCode } = require("pdf-lib");

chrome.runt

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM Content Loaded")

    var button = document.getElementById('checkPage');
    button.addEventListener('click', function() {
        
        chrome.tabs.getSelected(null, function(tab) {
            d = document;
            t = tab;

            chrome.tabs.executeScript(tab.id, {code: `(function test() {
                console.log("Hello from extension");
                 return 'Hello World'
                })();`}, function(result) {
                console.log("Done executing shit.")
                console.log(result)
                window.open('http://localhost:8080', '_blank');
            })
        })

    } ,false)
}, false)

    // console.log("DOM Content Loaded")

    // let button = document.getElementById("checkPage");
    // button.onclick = function(element) {
    //     console.log("sadfdasfadsf")
    //     // alert("wow")
    // }
