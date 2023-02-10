function ShowAndHide() {
    var x = document.getElementById('telling1');
    if (x.style.visibility == 'hidden') {
        x.style.display = 'block';
    } else {
        x.style.visibility = 'hidden';
    }
}