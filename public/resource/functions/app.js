document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        var href = this.getAttribute("href");
        var elem = document.querySelector(href)||document.querySelector("a[name="+href.substring(1, href.length)+"]");
        //gets Element with an id of the link's href 
        //or an anchor tag with a name attribute of the href of the link without the #
        window.scroll({
            top: elem.offsetTop, 
            left: 0, 
            behavior: 'smooth' 
        });
        //if you want to add the hash to window.location.hash
        //you will need to use setTimeout to prevent losing the smooth scrolling behavior
       //the following code will work for that purpose
       /*setTimeout(function(){
            window.location.hash = this.hash;
        }, 2000); */
    });
});