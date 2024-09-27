let count = 0;

function increaseCount(){
    count++;
    displayCount();
    document.getElementById('countDisplay').addEventListener('click',function(){
        alert("Button clicked ");
    });
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML=count;
}
