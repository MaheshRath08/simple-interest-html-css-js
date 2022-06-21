let mainEl = document.getElementById("main")
let p = document.getElementById("p")
let r = document.getElementById("r")
let t = document.getElementById("t")
let btnEl = document.getElementById("btn")

btnEl.addEventListener("click", function(){
        let SI = ((p.value)*(r.value)*(t.value))/100                           //SI = prt/100
        if (isNaN(SI)){                                                     //checking if SI is a number or not
            mainEl.innerHTML = `<h1>Type in Numerical Value</h1>            
                            <button onclick="location.reload()">Back</button>`
        }else{                                                              //to ensure all the input values are numericals
            mainEl.innerHTML = `<h1>Simple Interest is ${SI}</h1> 
                                <button onclick="location.reload()">Back</button>`
        }                        
})
