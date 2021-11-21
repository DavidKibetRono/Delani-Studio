$(document).ready(function() {

    $("#mydesign").on("click", (e) => {
        e.preventDefault()
        $("#design").show();

        $("#design").addClass("projectDesign");

        $("span").addClass("mySpan");

        $(".container").addClass("newContainer");

        $("#mydesign").hide();

    });

    $("#mydevelopment").on("click", (e) => {
        e.preventDefault()

        $("#development").show();
        $("#development").addClass("projectDevelopment");
        $("span").addClass("mySpan");
        $(".container").addClass("newContainer");
        $("#mydevelopment").hide();

    });

    $("#myproduct").on("click", (e) => {
        e.preventDefault()
        $("#product-management").show();
        $("#product-management").addClass("projectProduct");
        $("span").addClass("mySpan");
        $(".container").addClass("newContainer");
        $("#myproduct").hide()
    });


    //work4
    $("#work4").on({
        mouseover: function() {
            $("#fadeImage4").show();
        },
        mouseout: function() {
            $("#fadeImage4").hide();
        }
    })
     
    $("#fadeImage4").hover(function(){
        $("#fadeImage4").toggle()
    })

    //work3
    $("#work3").on({
        mouseover: function() {
            $("#fadeImage3").show();
        },
        mouseout: function() {
            $("#fadeImage3").hide();
        }
    })
    $("#fadeImage3").hover(function(){
        $("#fadeImage3").toggle()
    })

    //work2
    $("#work2").on({
        mouseover: function() {
            $("#fadeImage2").show();
        },
        mouseout: function() {
            $("#fadeImage2").hide();
        }
    })
    $("#fadeImage2").hover(function(){
        $("#fadeImage2").toggle()
    })

    //work1
    $("#work1").on({
        mouseover: function() {
            $("#fadeImage1").show();
        },
        mouseout: function() {
            $("#fadeImage1").hide();
        }
    })
    $("#fadeImage1").hover(function(){
        $("#fadeImage1").toggle()
    })

    //work5
    $("#work5").on({
        mouseover: function() {
            $("#fadeImage5").show();
        },
        mouseout: function() {
            $("#fadeImage5").hide();
        }
    })
    $("#fadeImage5").hover(function(){
        $("#fadeImage5").toggle()
    })

    //work6
    $("#work6").on({
        mouseover: function() {
            $("#fadeImage6").show();
        },
        mouseout: function() {
            $("#fadeImage6").hide();
        }
    })
    $("#fadeImage6").hover(function(){
        $("#fadeImage6").toggle()
    })

    //work7
    $("#work7").on({
        mouseover: function() {
            $("#fadeImage7").show();
        },
        mouseout: function() {
            $("#fadeImage7").hide();
        }
    })
    $("#fadeImage7").hover(function(){
        $("#fadeImage7").toggle()
    })

    //work8
    $("#work8").on({
            mouseover: function() {
                $("#fadeImage8").show();
            },
            mouseout: function() {
                $("#fadeImage8").hide();
            }
        })
        $("#fadeImage8").hover(function(){
            $("#fadeImage8").toggle()
        })

        //user message feedback from the form
    $("#forms").on('keypress', (e) => {

        if (e.which == 13) {

            e.preventDefault();
            var name = $("#name").val();
            var email = $("#email").val();
            var message = $("#message").val();
            if (name == "") {

                alert("Name field cannot be empty")

            } else if (email == "") {

                alert("Email field cannot be empty")

            } else if (message == "") {

                alert("message textarea field cannot be empty")

            } else {

                alert(`${name} we have received your message. Thank you for reaching out to us.`)
                $('#forms').submit();
                $("#name").val("");
                $("#email").val("");
                $("#message").val("");

            }
        }

    })
})