document.addEventListener('DOMContentLoaded', function() {
    var today;
    if (new Date().getDay() == 0) {
        today = 6;
    } else {
        today = new Date().getDay() - 1;
    }
    const scheduleItems = document.querySelectorAll('#schedule li');
    scheduleItems.forEach((item, index) => {
        if (index === today) {
            item.innerHTML = 'Hoy: ' + item.innerHTML.split(': ')[1];
            item.classList.add('today');
        }
    });
});

