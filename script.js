var btn_h = Array.from(document.querySelectorAll(".container__H"))

btn_h.forEach((el,idx)=>{
    var btn=el.querySelector(".btn")
    btn.addEventListener("click",(event)=>{
        if(el.classList.value.indexOf('open') === -1)
            el.classList.add('open')
        else
            el.classList.remove('open')
    })
})



// var btn_drop = Array.from(document.querySelectorAll(".dropdown"))

// btn_drop.forEach((el,idx)=>{
//     var btn = el.querySelector(".btn")
//     btn.addEventListener("click",(event)=>{
//         if(el.classList.value.indexOf('open') === -1)
//             el.classList.add('open')
//         else
//             el.classList.remove('open')
//     })
// })