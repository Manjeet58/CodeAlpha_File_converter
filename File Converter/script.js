document.getElementById("convertButton").addEventListener("click",function(){
    var fileInput=document.getElementById("fileInput");
    fileInput.click();
});

document.getElementById("fileInput"). addEventListener("change",function(){
    var file=this.files[0];
    var reader=new FileReader();
    reader.onload=function(e){
        var convertedText=convertFile(file);
        displayConvertedText(convertedText);
    };
    reader.readAsText(file)
 });


 function convertFile(file){
    return "Converted document:\n" + file.name;
 }
 function displayConvertedText(text){
    var outputDiv = document.getElementById("output");
    outputDiv.innerText=text;
    outputDiv.style.display="block";

 }
   