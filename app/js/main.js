let btn = document.getElementById('btn-green');
let picContainer = document.getElementById('gallery-container');



//Добавление галереи

btn.addEventListener('click', function () {
    let myRequest = new XMLHttpRequest();
    myRequest.open('GET', 'https://jsonplaceholder.typicode.com/photos');
    myRequest.onload = function () {
        let myData = JSON.parse(myRequest.responseText);
        renderHTML(myData);
    };
    myRequest.send();
});


function renderHTML(data) {
    let htmlPic = '';

    let lastId = Number(picContainer.lastElementChild.id);


    for (let i = 0; i < 4; i++) {
        lastId++;
        htmlPic += `<div class="col-6 col-md-3" id="` + lastId + `">` + `<div class="cont"><a data-fancybox="gallery" href="` + data[lastId - 1].url + `"><img src="` + data[lastId - 1].url + `" alt="` + data[lastId - 1].title + `"></a>` +
            `<div class="checkbox"><label><input type="checkbox" id="checkbox` + lastId + `" class="checkbox" onclick="checkboxFunc(this.id)"><i class="fas fa-heart" id="fa` + lastId + `"></i></label></div></div></div>`;
    }


    picContainer.insertAdjacentHTML('beforeend', htmlPic);
    console.log('Done');
};


// Чекбоксы

function checkboxFunc(currentId) {

    let checkbox = document.getElementById(currentId);
    if (checkbox.checked == true) {
        checkbox.nextElementSibling.classList.add('fa-checked');
    } else {
        checkbox.nextElementSibling.classList.remove('fa-checked');
    }
}


//bg pattern gallery

$(document).ready(function () {

    $('#btn-green').click(function () {

        if ($("#gallery").height() > 300) {
            $('.gallery-cover').css("display", "block");
        } else {

        }
    });

})


//collapse menu

let collapseMenu = document.getElementById('navbarToggleExternalContent');

$(document).ready(function () {

    $(window).on('load resize', function () {
        if ($(window).width() < 768) {
            $("#navbarToggleExternalContent").addClass('collapse');
        } else {
            $("#navbarToggleExternalContent").removeClass('collapse');
        }
    });

})

$(document).ready(function () {
    $('#nav-toggle').click(function () {
        $(this).toggleClass('active');
    });
});



// Respons bgcircle

$(document).ready(function () {

    $(window).on('load resize', function () {
        let bgc = "#bg-circle";
        if ($(window).width() < 768) {
            $(bgc).css();
        } else {
            $("#navbarToggleExternalContent").removeClass('collapse');
        }
    });

})