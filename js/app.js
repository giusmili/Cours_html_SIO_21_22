document.addEventListener("DOMContentLoaded",()=>{
    
    console.log("loaded")
    // variables
    let target = document.querySelector("figure img")
    let el = document.querySelector("figure h3")
    let p = document.querySelector("figure p")
    let h_title = document.querySelector("figure h3")
    p.style.display= `none`
    let x = false
    //object
    let user = ({
           
            print_get(){
            let title = this.dataset.title
            let name_img = this.dataset.name_img
            if(!x){
                el.innerText = `Historique ${name_img}`
                p.style.display= `block`
                x = true
                console.log(x)
            }
            else{
                h_title.innerText = `${title}`
                
                x = false
                console.log(x)
                p.style.display= `none` 
            }
        }
    })
    //listener event
    target.addEventListener("click", user.print_get)

    /*
    chargement de la fenêtre du navigateur
    cela n'appartient à aucune spécificité 
    window.onload = ()=>{} 
    */

    
    

})