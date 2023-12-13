let box=document.getElementsByClassName('box');
let ab=0;
let arr=['','','','','','','','',''];
console.log(arr[8]);
for(i of box)
{
    i.addEventListener('click',eve)
    function eve() {
        if(ab==0){
         this.innerHTML='<div class="inner">&#x274c;</div>';
         ab=10;
         this.removeEventListener('click',eve);
         
         let a=this.id;
         let b=Number(a);
         arr.splice(b-1,1,'x');
        won(arr);    
    }
    else{
        this.innerHTML='<div class="inner-o">o</div>';
        ab=0;
        this.removeEventListener('click',eve);
        let a=this.id;
         let b=Number(a);
         arr.splice(b-1,1,'o');
        
         won(arr);    
    }
    }

    function won(arr){
      if((arr[0]=='x' && arr[1]=='x' && arr[2]=='x') || 
         (arr[3]=='x' && arr[4]=='x' && arr[5]=='x') ||
         (arr[6]=='x' && arr[7]=='x' && arr[8]=='x') ||
         (arr[0]=='x' && arr[3]=='x' && arr[6]=='x') ||
         (arr[1]=='x' && arr[4]=='x' && arr[7]=='x') ||
         (arr[2]=='x' && arr[5]=='x' && arr[8]=='x') ||
         (arr[0]=='x' && arr[4]=='x' && arr[8]=='x') ||
         (arr[2]=='x' && arr[4]=='x' && arr[6]=='x') )
      {
            alert('X won');
      }
      else if((arr[0]=='o' && arr[1]=='o' && arr[2]=='o') || 
      (arr[3]=='o' && arr[4]=='o' && arr[5]=='o') ||
      (arr[6]=='o' && arr[7]=='o' && arr[8]=='o') ||
      (arr[0]=='o' && arr[3]=='o' && arr[6]=='o') ||
      (arr[1]=='o' && arr[4]=='o' && arr[7]=='o') ||
      (arr[2]=='o' && arr[5]=='o' && arr[8]=='o') ||
      (arr[0]=='o' && arr[4]=='o' && arr[8]=='o') ||
      (arr[2]=='o' && arr[4]=='o' && arr[6]=='o') )
    {
        alert('O won');
    }
}
}