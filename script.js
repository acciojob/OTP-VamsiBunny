const code=document.getElementsByClassName('code');
const codeContainer=document.getElementsByClassName('code-container')

for(let i=0;i<code.length;i++){
	code[i].addEventListener('input',function(){
		 this.value = this.value.replace(/[^0-9]/g, "");
		if(this.value.length===1){
			if(i<code.length-1){
				code[i+1].focus();
			}
		}
	})

	code[i].addEventListener('keydown', function(e){
		if(e.key=='Backspace'){
			if(this.value.length===''){
				if(i>0){
					code[i-1].focus();
					code[i-1].value="";
				}
			}
			else{
				this.value==='';
			}
		}
	})
}
