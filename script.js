document.getElementById("bold").addEventListener('click',function(){
    const text_value=document.getElementById('text');
    text_value.style.fontWeight = "900"; 
});
document.getElementById("underline").addEventListener('click',function(){
    const text_value=document.getElementById('text');
    text_value.style.textDecoration = "underline"; 
});
document.getElementById("italic").addEventListener('click',function(){
    const text_value=document.getElementById('text');
    text_value.style.fontStyle = "italic"; 
});
document.getElementById('font_size').addEventListener('click',function(){
    const text_value=document.getElementById('text');
    const number_value=document.getElementById('font_size').value;
    text_value.style.fontSize=`${number_value}px`;
});
document.getElementById('text-justify').addEventListener('click',function(){
    const text_value=document.getElementById('text');
    const number_value=document.getElementById('text-justify');
    text_value.style.textAlign = "justify"; 
});
document.getElementById('center').addEventListener('click',function(){
    const text_value=document.getElementById('text');
    const number_value=document.getElementById('center');
    text_value.style.textAlign = "center"; 
});
document.getElementById('left').addEventListener('click',function(){
    const text_value=document.getElementById('text');
    const number_value=document.getElementById('left');
    text_value.style.textAlign = "left"; 
});
document.getElementById('right').addEventListener('click',function(){
    const text_value=document.getElementById('text');
    const number_value=document.getElementById('right');
    text_value.style.textAlign = "right"; 
});
document.getElementById('favcolor').addEventListener('click',function(){
    const text_value=document.getElementById('text');
    const number_value=document.getElementById('favcolor').value;
    text_value.style.color=`${number_value}`;
});
document.getElementById('capitalize').addEventListener('click',function(){
    const text_value=document.getElementById('text');
    text_value.style.textTransform = "capitalize"; 
})

function background_color(event){
    event.style.backgroundColor = "yellow";;
}