function replaceAll() {
    let str1 = document.getElementById("txtInput").value;
    console.log(str1);
 

    let newStr = str1.replaceAll(' ','');
    document.getElementById("txtResult").innerHTML = newStr;

}

function search(){
    let str2 = document.getElementById("txtInput2").value;
    console.log(str2);

    if(str2.includes("JavaScript is easy easy")){
        console.log("Found");
        document.getElementById("txtResult1").textContent = "Found";
    }else{
        console.log("Not Found")
        document.getElementById("txtResult1").textContent = "Not Found";
    }

    
}