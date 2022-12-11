var tagname = document.getElementsByTagName('p');
console.log(tagname)
for(i=0;i<tagname.length;i++){
    tagname[i].style.backgroundColor = "red";
    tagname[i].style.color = "black";
}