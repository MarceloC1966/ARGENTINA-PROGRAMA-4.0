document.getElementById('cimatron').addEventListener('click', function(){
    window.open('https://www.cimatron.com/es');
    console.log("click sobre <li>");
})

document.getElementById('cimatron').addEventListener('mouseover', function(){
    document.getElementById("cimatron").style.color = '#1717FF';
    console.log("pasa sobre <li>");
})

document.getElementById('cimatron').addEventListener('mouseout', function(){
    document.getElementById("cimatron").style.color = 'white';
    console.log("se va de <li>");
})