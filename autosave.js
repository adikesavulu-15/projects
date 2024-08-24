let inp=document.getElementById('inputArea')
let infomess=document.getElementById('infomess')

infomess.textContent=''
function getData(content){
    
    console.log(content);
    
    localStorage.setItem('savecontent',content)
    
    infomess.textContent=`Your content is autosaved in local storage`
    

}

inp.addEventListener('keypress',(e)=>{
    infomess.textContent=`autosave started......`
})

const debounce=(fn,t)=>{
    let timer;
    return function(...content){
        clearInterval(timer)
        timer=setTimeout(()=>{
            fn.apply(this,content)
        },t)
    }
}


const debou=debounce(getData,1000)


inp.addEventListener('input',(e)=>{
    debou(e.target.value)
})