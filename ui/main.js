var button = document.getElementById('counter');

button.onclick = function() {
    //Make a request to the counter end-point
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
        //Take some action
            if(request.status == 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };

    request.open('GET', 'http://harisharaju1.imad.hasura-app.io/counter', true);
    request.send(null);
};