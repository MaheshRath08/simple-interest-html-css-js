let mainEl = document.getElementById("main")
let p = document.getElementById("p")
let r = document.getElementById("r")
let t = document.getElementById("t")
let btnEl = document.getElementById("btn")

btnEl.addEventListener("click", function(){
        let SI = ((p.value)*(r.value)*(t.value))/100
        if (isNaN(SI)){
            mainEl.innerHTML = `<h1>Type in Numerical Value</h1> 
                            <button onclick="location.reload()">Back</button>`
        }else{
            mainEl.innerHTML = `<h1>Simple Interest is ${SI}</h1> 
                                <button onclick="location.reload()">Back</button>`
        }                        
})
