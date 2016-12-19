<script>
function getdetails(){
	 var x = document.getElementById("register-form");
    var txt = "";
    var i;
    for (i = 0; i < x.length; i++) {
        txt = txt + x.elements[i].value + "<br>";
    }
    load(txt);
}
function load(txt1){
	document.getElementById("p1").innerHTML=txt1;

}
</script>