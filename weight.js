







function calc(){
    var k = document.getElementById('pounds').value;

    if(isNaN(k)){
        alert("Entry must be a number!");
    }
    else{
    var result = (k / 2.2);
    var result = parseFloat(result).toFixed(2);
    alert(result + " kilograms");
    console.log(result);
    }
}

