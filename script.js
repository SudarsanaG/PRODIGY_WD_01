var button=document.getElementById("btn");
    var content=document.getElementById("content");
    button.onclick=function()
    {
        if (content.classList.contains("open"))
         {
            // hide the content
            content.classList.remove("open");
            button.innerHTML = "Show";
        } 
        else 
        {
            // show the content
            content.classList.add("open");
            button.innerHTML = "Hide";
        }
    };