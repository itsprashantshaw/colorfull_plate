const color_button=document.querySelectorAll('.content')
const set_color=document.querySelector('.screen')
for(let i=0;i<color_button.length;i++){
    color_button[i].addEventListener('click',(e)=>{
        
        // const getcolor = e.target.getAtrribute();
        // document.getElementById("screen").style.backgroundColor=getcolor;
        console.log(e.target.id);
        const get_color=e.target.id;
        set_color.style.backgroundColor=get_color;
    });
}
// const get_color=document.getElementsByClassName('content').style.backgroundColor;
// document.getElementById('screen').style.backgroundColor=get_color;
    
