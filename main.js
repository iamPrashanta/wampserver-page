
$('#header-inner #header-group #navigation #nav li h2').click(function () {
    if ($(this).hasClass('current')) {
        $(this).removeClass('current');
    } else {
        $('#header-inner #header-group #navigation #nav li h2').removeClass('current');
        $(this).addClass('current');
    }
});
$('#header-inner #header-group #navigation #nav #foho').click(function () {
    if ($(this).hasClass('curroth')) {
        $(this).removeClass('curroth');
    } else {
        $('#header-inner #header-group #navigation #foho').removeClass('curroth');
        $(this).addClass('curroth');
    }
});



//document.querySelector('#header-inner #header-group #navigation #nav li h2')
