const que=document.querySelectorAll(".que");

for(let i=0;i<que.length;i++){
    que[i].addEventListener('click',function(){
        let ans=document.querySelector("#ans"+(i+1));
        console.log("#ans"+(i+1));
        let icon=document.querySelector("#large_icon"+(i+1));
        if(ans.style.display!='none'){
            ans.style.display='none';
            icon.style.transform="rotate(0deg)";      
        }
        else{
            ans.style.display='block'
            icon.style.transform="rotate(45deg)";        
        }
    })
}
