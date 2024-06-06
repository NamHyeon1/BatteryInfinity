$(document).ready(function(){
    $("#compareForm").submit(function(e){
        e.preventDefault();
        let first = $("#firstM").val();
        let second = $("#secondM").val();
        // console.log(first);
        // alert(first + second);
        // alert('hello');

        // alert();

        let URL = window.location.pathname + "Post"
            
        let material = {
            "first" : first,
            "second" : second
        }

        // alert(typeof(material.first));
        // alert(typeof(material.first));

        alert(JSON.stringify(material));


        $.ajax({
            url: "/CathodePost",
            type: "post",
            contentType: "application/json",
            data: JSON.stringify(material),
            success: function (data, txtStatus, xhr) {
                alert("success!");
                window.location = window.location.pathname + "Comparison";
                
            },
            error: function (event) {
                alert("failed!");
                event.preventDefault();
                
            }
        });
        

    });
  });