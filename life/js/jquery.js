$('#top').on('click', function () {
    console.log('クリックされました.');

    $('#top').animate({
        'fontSize': '100px',
    },1000,'swing').animate({
        'fontSize': '64px',
    },700, 'swing')

})

$('#money').on('click', function () {
    console.log('クリックされました.');

    $('#money').animate({
        'fontSize': '60px',
    },1000,'swing').animate({
        'fontSize': '30px',
    },700, 'swing')

})

$('#money-1').on('click', function () {
    console.log('クリックされました.');

    $('#money-1').animate({
        'fontSize': '40px',
    },1000,'swing').animate({
        'fontSize': '30px',
    },700, 'swing')

})