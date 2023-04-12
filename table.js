function colorirData(){
    let day= document.getElementById('day').value;
    let color= document.getElementById('color').value;
    let calendar= document=getElementById('calendar');
//forma 1 - solução
    let putColor = calendar.getElementsByTagName('td')[parseInt(day)+5];
    putColor.style.backgroundColor = color;
}