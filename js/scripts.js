$(document).ready(function(){

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


})