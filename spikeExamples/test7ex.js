$('document').ready(() => {
    const repls = ["example1", "example2", "example3"];
    
    repls.forEach(id => {
        animateREPL(id)
    }); 

});


// Adds event listeners to all dropdown buttons
const animateREPL = (id) => {
    $("#" + id).click(function(){
        toggleREPL(id)
    });
}

// Triggers up/down animation for REPLs
const toggleREPL = (id) => {
    console.log(id + " clicked!")
    $("#" + id + "repl").animate({
        height: 'toggle'
    });
    if ($("#" + id + " > svg").hasClass("chevron-down")) {
        $("#" + id + " > svg > path").attr("d", "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z")
        $("#" + id + " > svg ").removeClass("chevron-down");
        $("#" + id + " > svg ").addClass("chevron-up");
    }
    else {
        $("#" + id + " > svg > path").attr("d", "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z")
        
        $("#" + id + " > svg ").removeClass("chevron-up");
        $("#" + id + " > svg ").addClass("chevron-down");
    }

}


