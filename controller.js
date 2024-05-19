

document.getElementById("removeGrid").addEventListener('click', function (e) {
    e.preventDefault();
    removeGrid = true;
});

document.getElementById("styleTH").addEventListener('click', function(e){
    e.preventDefault();
    choice_filter = 'THRESHOLD';
});

document.getElementById("styleGR").addEventListener('click', function(e){
    e.preventDefault();
    choice_filter = 'GRAY';
});

document.getElementById("reset").addEventListener('click', function(e){
    location.reload();
});
