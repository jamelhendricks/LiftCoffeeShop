window.onload=fadePageIn();

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
});

function openCoffeeModal() {
    var body = document.getElementById("content");

    var cover = document.createElement("div");
    cover.setAttribute('id', 'modal-cover');
    cover.setAttribute('onclick', 'closeCoffeeModal()');
    $(cover).hide().appendTo(body).fadeIn(200);

    var modal = document.createElement("div");
    modal.setAttribute('id', 'coffee-modal');

    var coffeeContainer = document.createElement('div');
    coffeeContainer.setAttribute('id', 'coffeecontainer');
    $(coffeeContainer).appendTo(modal);

    var coffeeHeader = document.createElement('p');
    coffeeHeader.setAttribute('id', 'coffeeHeader');
    coffeeHeader.innerHTML = "Coffee Catering Key";
    $(coffeeHeader).appendTo(coffeeContainer);

    var coffeeTable = document.createElement('table');
    coffeeTable.setAttribute('id', 'coffeeTable');
    coffeeTable.setAttribute('align', 'center');
    $(coffeeTable).appendTo(coffeeContainer);

    var headRow = document.createElement('tr');
    $(headRow).appendTo(coffeeTable);

    var toGoHead = document.createElement('th');
    toGoHead.innerHTML = "<p>coffee to go</p";
    var justHead = document.createElement('th');
    justHead.innerHTML = "<p>just coffee</p>";
    var withHead = document.createElement('th');
    withHead.innerHTML = "<p>the works</p>";

    $(toGoHead).appendTo(headRow);
    $(justHead).appendTo(headRow);
    $(withHead).appendTo(headRow);

    var onePot = document.createElement('tr');
    $(onePot).appendTo(coffeeTable);


    var a1 = document.createElement('td');
    a1.innerHTML = "<p>1 airpot<br><i>serves 7-10</i><p>";
    var b1 = document.createElement('td');
    b1.innerHTML = "<p>$12.95<p>";
    var c1 = document.createElement('td');
    c1.innerHTML = "<p>$16.95<br><i>service for 10</i><p>";

    $(a1).appendTo(onePot);
    $(b1).appendTo(onePot);
    $(c1).appendTo(onePot);

    var twoPot = document.createElement('tr');
    $(twoPot).appendTo(coffeeTable);


    var a2 = document.createElement('td');
    a2.innerHTML = "<p>3 airpots<br><i>serves 21-30</i><p>";
    var b2 = document.createElement('td');
    b2.innerHTML = "<p>$38.85<p>";
    var c2 = document.createElement('td');
    c2.innerHTML = "<p>$50.85<br><i>service for 30</i><p>";

    $(a2).appendTo(twoPot);
    $(b2).appendTo(twoPot);
    $(c2).appendTo(twoPot);


    var threePot = document.createElement('tr');
    $(threePot).appendTo(coffeeTable);


    var a3 = document.createElement('td');
    a3.innerHTML = "<p>5 airpots<br><i>serves 35-50</i></p>";
    var b3 = document.createElement('td');
    b3.innerHTML = "<p>$64.75</p>";
    var c3 = document.createElement('td');
    c3.innerHTML = "<p>$84.75<br><i>service for 50</i></p>";

    $(a3).appendTo(threePot);
    $(b3).appendTo(threePot);
    $(c3).appendTo(threePot);

    b1.setAttribute('class', 'dark-back-text');
    b2.setAttribute('class', 'dark-back-text');
    b3.setAttribute('class', 'dark-back-text');


    $(b1).css('background-color', 'rgba(64, 56, 49, .5)');
    $(b1).css('box-shadow', 'inset 0px 0px 20px rgba(0, 0, 0, .35)');
    $(b2).css('background-color', 'rgba(64, 56, 49, .8)');
    $(b2).css('box-shadow', 'inset 0px 0px 20px rgba(0, 0, 0, .35)');
    $(b3).css('background-color', 'rgba(64, 56, 49, 1)');
    $(b3).css('box-shadow', 'inset 0px 0px 20px rgba(0, 0, 0, .35)');

    $(c1).css('background-color', 'rgba(207, 224, 153, .5)');
    $(c1).css('box-shadow', 'inset 0px 0px 20px rgba(0, 0, 0, .35)');
    $(c2).css('background-color', 'rgba(207, 224, 153, .8)');
    $(c2).css('box-shadow', 'inset 0px 0px 20px rgba(0, 0, 0, .35)');
    $(c3).css('background-color', 'rgba(207, 224, 153, 1)');
    $(c3).css('box-shadow', 'inset 0px 0px 20px rgba(0, 0, 0, .35)');

    $(coffeeTable).appendTo(coffeeContainer);
    $('<br>,<br>').appendTo(modal);

    $(modal).hide().appendTo(body).fadeIn(200);


}

function closeCoffeeModal() {

    $("#modal-cover").fadeOut("normal", function () {
        $(this).remove()
    });
    $("#coffee-modal").fadeOut("normal", function () {
        $(this).remove()
    });
}


function openCaterModal() {
    var body = document.getElementById("content");

    var cover = document.createElement("div");
    cover.setAttribute('id', 'modal-cover');
    cover.setAttribute('onclick', 'closePdfModal()');
    $(cover).hide().appendTo(body).fadeIn(200);

    var modal = document.createElement("div");
    modal.setAttribute('id', 'pdf-modal');

    var pdfcontainer = document.createElement('div');
    pdfcontainer.setAttribute('id', 'pdfcontainer');
    $(pdfcontainer).appendTo(modal);

    var cateringHeader = document.createElement('p');
    cateringHeader.setAttribute('id', 'cateringHeader');
    cateringHeader.innerHTML = "Placing your catering order couldn't be easier";
    $(cateringHeader).appendTo(pdfcontainer);

    var cateringAbout = document.createElement('p');
    cateringAbout.setAttribute('id', 'cateringAbout');
    cateringAbout.innerHTML = "Download the appropriate forms, fill them out and fax them in. We'll take care of the rest.<br><b>* Please be sure to include a cover sheet with your order! *</b><br><b>* Failure to include a cover sheet may result in your order not being fulfilled. *</b>";
    $(cateringAbout).appendTo(pdfcontainer);

    var coverSheet = document.createElement('div');
    coverSheet.setAttribute('class', 'pdf');
    $(coverSheet).appendTo(pdfcontainer);

    var coverSheetLink = document.createElement('a');
    coverSheetLink.setAttribute('href', "catering-forms/cover-sheet.pdf");
    coverSheetLink.setAttribute("target", "_blank");
    coverSheetLink.innerHTML = "Cover Sheet Form";
    $(coverSheetLink).appendTo(coverSheet);

    var coffeeForm = document.createElement('div');
    coffeeForm.setAttribute('class', 'pdf');
    $(coffeeForm).appendTo(pdfcontainer);

    var coffeeFormLink = document.createElement('a');
    coffeeFormLink.setAttribute('href', "catering-forms/coffee-order-form.pdf");
    coffeeFormLink.setAttribute("target", "_blank");
    coffeeFormLink.innerHTML = "Coffee Order Form";
    $(coffeeFormLink).appendTo(coffeeForm);

    var lunchForm = document.createElement('div');
    lunchForm.setAttribute('class', 'pdf');
    $(lunchForm).appendTo(pdfcontainer);

    var lunchFormLink = document.createElement('a');
    lunchFormLink.setAttribute('href', "catering-forms/lunch-order-form.pdf");
    lunchFormLink.setAttribute("target", "_blank");
    lunchFormLink.innerHTML = "Lunch Order Form";
    $(lunchFormLink).appendTo(lunchForm);

    var lunchPlatForm = document.createElement('div');
    lunchPlatForm.setAttribute('class', 'pdf');
    $(lunchPlatForm).appendTo(pdfcontainer);

    var lunchPlatFormLink = document.createElement('a');
    lunchPlatFormLink.setAttribute('href', "catering-forms/lunchplat-order-form.pdf");
    lunchPlatFormLink.setAttribute("target", "_blank");
    lunchPlatFormLink.innerHTML = "Lunch Platter Order Form";
    $(lunchPlatFormLink).appendTo(lunchPlatForm);

    var pastryForm = document.createElement('div');
    lunchPlatForm.setAttribute('class', 'pdf');
    $(pastryForm).appendTo(pdfcontainer);

    var pastryFormLink = document.createElement('a');
    pastryFormLink.setAttribute('href', "catering-forms/pastry-order-form2.pdf");
    pastryFormLink.setAttribute("target", "_blank");
    pastryFormLink.innerHTML = "Pastry Order Form";
    $(pastryFormLink).appendTo(pastryForm);

    var closebt = document.createElement("div");
    closebt.setAttribute('id', 'close-modal');
    closebt.setAttribute('onclick', 'closePdfModal()');
    $(closebt).appendTo(modal);

    var closetext = document.createElement('p');
    closetext.setAttribute('id', 'closetext');
    closetext.innerHTML = "CLOSE";
    $(closetext).appendTo(closebt);


    $(modal).hide().appendTo(body).fadeIn(200);
}

function closePdfModal() {

    $("#modal-cover").fadeOut("normal", function () {
        $(this).remove()
    });
    $("#pdf-modal").fadeOut("normal", function () {
        $(this).remove()
    });
}

function hideMenus() {
    $(".menu-item").css("visibility", "hidden").fadeOut("normal");
    $(".menu-header").css("width", "90%");

}

function showBreakfast() {
    hideMenus();
    $(".breakfast-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");
}

function showBagels() {
    hideMenus();
    $(".bagel-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function showOdds() {
    hideMenus();
    $(".odd-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function showOatmeal() {
    hideMenus();
    $(".oatmeal-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function showPanini() {
    hideMenus();
    $(".panini-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function showSandwich() {
    hideMenus();
    $(".sandwich-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function showSalad() {
    hideMenus();
    $(".salad-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function showSoup() {
    hideMenus();
    $(".soup-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function showSide() {
    hideMenus();
    $(".side-items").css("visibility", "visible").fadeIn(200);
    $(".menu-header").css("width", "40%");

}

function fadePageOut(path) {
    var page = document.querySelector('body');
    var coverDiv = document.createElement('div');
    $(coverDiv).css('height', '1200%');
    $(coverDiv).css('width', '1200%');
    $(coverDiv).css('background-color', 'white');
    $(coverDiv).css('position', 'absolute');
    $(coverDiv).css('top', '0');
    $(coverDiv).css('left', '0');
    $(coverDiv).css('z-index', '10');

    $(coverDiv).hide().appendTo(page).fadeIn(200, function () {
        changePage(path)
    });

}

function fadePageIn() {
    var page = document.querySelector('body');
    var coverDiv = document.createElement('div');
    $(coverDiv).css('height', '1200%');
    $(coverDiv).css('width', '1200%');
    $(coverDiv).css('background-color', 'white');
    $(coverDiv).css('position', 'absolute');
    $(coverDiv).css('top', '0');
    $(coverDiv).css('left', '0');
    $(coverDiv).css('z-index', '10');

    $(coverDiv).appendTo(page);
    $(coverDiv).fadeOut(200);
    $(coverDiv).remove;

}

function changePage(path) {
    window.location.href = path;
    fadePageIn();

}
