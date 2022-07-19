$('#top').on('click', function () {
    console.log('クリックされました.');

    $('#top').animate({
        'fontSize': '100px',
    },1000,'swing').animate({
        'fontSize': '64px',
    },700, 'swing')

})


$(function () {
    $('button').on('click', function () {
    $('.show').fadeToggle(1000);
    });
});


