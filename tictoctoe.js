var btn = "O";
var tie = 0;

function tic(button) {
    tie++;
    if (btn == "O") {
        btn = "X";
        setcol(button, btn);
        document.getElementById("p1").style.visibility = "hidden";
        document.getElementById("p2").style.visibility = "visible";

    } else if (btn == "X") {
        btn = "O";
        setcol(button, btn);
        document.getElementById("p2").style.visibility = "hidden";
        document.getElementById("p1").style.visibility = "visible";
    }
}

function setcol(x, btn) {
    if (x == 1) {
        var y = document.getElementById("1");
        y.value = btn;
        y.disabled = true;
    } else if (x == 2) {
        var y = document.getElementById("2");
        y.value = btn;
        y.disabled = true;
    } else if (x == 3) {
        var y = document.getElementById("3");
        y.value = btn;
        y.disabled = true;
    } else if (x == 4) {
        var y = document.getElementById("4");
        y.value = btn;
        y.disabled = true;
    } else if (x == 5) {
        var y = document.getElementById("5");
        y.value = btn;
        y.disabled = true;
    } else if (x == 6) {
        var y = document.getElementById("6");
        y.value = btn;
        y.disabled = true;
    } else if (x == 7) {
        var y = document.getElementById("7");
        y.value = btn;
        y.disabled = true;
    } else if (x == 8) {
        var y = document.getElementById("8");
        y.value = btn;
        y.disabled = true;
    } else if (x == 9) {
        var y = document.getElementById("9");
        y.value = btn;
        y.disabled = true;
    }

    play();
}


function play() {

    var t1 = document.getElementById("1").value;
    var t2 = document.getElementById("2").value;
    var t3 = document.getElementById("3").value;
    var t4 = document.getElementById("4").value;
    var t5 = document.getElementById("5").value;
    var t6 = document.getElementById("6").value;
    var t7 = document.getElementById("7").value;
    var t8 = document.getElementById("8").value;
    var t9 = document.getElementById("9").value;


    //1st row 
    if ((t1 == "X" || t1 == "O") && (t1 == t2) && (t2 == t3)) {
        result(t1);

    }
    //first coloumn
    else if ((t1 == "X" || t1 == "O") && (t1 == t4) && (t4 == t7)) {
        result(t1);

    }
    //last row
    else if ((t9 == "X" || t9 == "O") && (t9 == t8) && (t8 == t7)) {
        result(t9);

    }
    //last coloumn
    else if ((t9 == "X" || t9 == "O") && (t9 == t6) && (t6 == t3)) {
        result(t9);

    }
    //4th row
    else if ((t4 == "X" || t4 == "O") && (t4 == t5) && (t5 == t6)) {
        result(t4);

    }
    //2nd coloumn
    else if ((t2 == "X" || t2 == "O") && (t2 == t5) && (t5 == t8)) {
        result(t2);

    }
    //first diagonal
    else if ((t1 == "X" || t1 == "O") && (t1 == t5) && (t5 == t9)) {
        result(t1);

    }
    //second diagonal
    else if ((t7 == "X" || t7 == "O") && (t7 == t5) && (t5 == t3)) {
        result(t1);

    } else if (tie == 9) {

        popuptext = document.getElementById("text");
        popuptext.innerHTML = "game tie";
        var pop = document.getElementById("popup");
        pop.style.visibility = "visible";
    }
}


function result(winner) {

    buttonselect();

    popuptext = document.getElementById("text");
    popuptext.innerHTML = winner + " " + "wins";

    var pop = document.getElementById("popup");
    var overlay = document.getElementById("overlay");

    pop.style.visibility = "visible";
    overlay.style.visibility = "visible";
}

function buttonselect() {

    var t1 = document.getElementById("1");
    var t2 = document.getElementById("2");
    var t3 = document.getElementById("3");
    var t4 = document.getElementById("4");
    var t5 = document.getElementById("5");
    var t6 = document.getElementById("6");
    var t7 = document.getElementById("7");
    var t8 = document.getElementById("8");
    var t9 = document.getElementById("9");

    t1.disabled = true;
    t2.disabled = true;
    t3.disabled = true;
    t4.disabled = true;
    t5.disabled = true;
    t6.disabled = true;
    t7.disabled = true;
    t8.disabled = true;
    t9.disabled = true;
    t1.disabled = true;

}


function reset() {

    var t1 = document.getElementById("1");
    var t2 = document.getElementById("2");
    var t3 = document.getElementById("3");
    var t4 = document.getElementById("4");
    var t5 = document.getElementById("5");
    var t6 = document.getElementById("6");
    var t7 = document.getElementById("7");
    var t8 = document.getElementById("8");
    var t9 = document.getElementById("9");

    t1.value = "";
    t2.value = "";
    t3.value = "";
    t4.value = "";
    t5.value = "";
    t6.value = "";
    t7.value = "";
    t8.value = "";
    t9.value = "";

    t1.disabled = false;
    t2.disabled = false;
    t3.disabled = false;
    t4.disabled = false;
    t5.disabled = false;
    t6.disabled = false;
    t7.disabled = false;
    t8.disabled = false;
    t9.disabled = false;

    document.getElementById("popup").style.visibility = "hidden";
    document.getElementById("overlay").style.visibility = "hidden";

}
