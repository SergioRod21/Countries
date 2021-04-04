const $FilterDiv = document.getElementsByClassName('Filter');
const $search = document.getElementById('search');
const $form = document.getElementById('Filter__form');

$form.addEventListener('submit', () => {
    let path = window.location.href.split('?')[0]
    window.location.href = path + '#/' + $search.value
    $form.reset();
})

