var button = document.getElementById('counter');

button.onclick = function() {
    //Make a request to the counter end-point
    var request = new XMLHttpRequest();
    
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
        //Take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //Make a request
    request.open('GET', 'http://harisharaju1.imad.hasura-app.io/counter', true);
    request.send(null);
};

/*var comment = document.getElementById('comment_btn');
comment.onclick = function() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
      if(request.readyState === XMLHttpRequest.DONE) {
          if(requeset.status == 200) {
              var content = request.responseText;
              content = JSON.parse(content);
              var para = document.getElementById('paragraph');
              para.innerHTML = content;
          }
      }
  };
  var commentInput = document.getElementById('filly');
  var filly = commentInput.value;
  request.send(null);
};*/


//Submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
     var request = new XMLHttpRequest();
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
        //Take some action
            if(request.status == 200) {
               var names = request.responseText;
               names = JSON.parse(names);
                var list = '';
                for (var i = 0; i < names.length; i++) {
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist'); 
                ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://harisharaju1.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
}; 