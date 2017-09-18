var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //Make a request to the counter end-point
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE);
        //Take some action
        if(request.status == 200) {
            var counmter = request.responseTExt;
            var span = documenr.getElementById('count');
            span.innerHTML = Counter.toString();
        }
    };

    request.open('GET' ,'http://harisharaju1.imad.hasura-app.io', true);
    request.send(null);
};