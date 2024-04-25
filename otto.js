document.addEventListener('DOMContentLoaded', function() {
    var lists = document.querySelectorAll('td');
    var classes = ['otto', 'otto2', 'otto3'];

    lists.forEach(function(list) {
        // Randomly pick a class and assign it to the list
        var randomClass = classes[Math.floor(Math.random() * classes.length)];
        list.classList.add(randomClass);
        list.classList.add("genericOtto");
    });
});
