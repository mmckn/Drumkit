




function sound(x,y){
var key = document.getElementById(x);
var audio = document.getElementById(y);
key.addEventListener("click", function() {
audio.currentTime = 0;
audio.play();
key.className += "gold";
function remove(){
 key.classList.remove("gold");}
setTimeout(remove, 50);
})};


sound("sound1","audio1");
sound("sound2","audio2");
sound("sound3","audio3");
sound("sound4","audio4");
sound("sound5","audio5");
sound("sound6","audio6");
sound("sound7","audio7");
sound("sound8","audio8");
sound("sound9","audio9");




function keyboard (y,x, k) {
	var audio = document.getElementById(y);
	var key = document.getElementById(x);
document.addEventListener("keypress", function(event){
	if (event.keyCode == k){
        audio.currentTime = 0;
		audio.play();
	key.className += "gold";}
	function remove(){
key.classList.remove("gold");}
setTimeout(remove,50);

	
;})};
keyboard("audio1","sound1", 97);
keyboard("audio2","sound2",115);
keyboard("audio3","sound3",100);
keyboard("audio4","sound4",102);
keyboard("audio5","sound5",103);
keyboard("audio6","sound6",104);
keyboard("audio7","sound7",106);
keyboard("audio8","sound8",107);
keyboard("audio9","sound9",108);