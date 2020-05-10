const menuBtn = document.getElementById('open-btn')
const navMenu = document.getElementById('mobile-menu')

menuBtn.addEventListener('click', ()=>{
    menuBtn.classList.toggle('show')
    navMenu.classList.toggle('show')
})

window.addEventListener('scroll', e=>{
    if(window.scrollY> 60){
       document.querySelector('nav').classList.add('white-bg')
    } else {
        document.querySelector('nav').classList.remove('white-bg')
    }
})

//URL
const input = document.getElementById('url-input')
const submit = document.getElementById('url-submit')
const att = document.createAttribute("data-error")
att.value = "Please add a link"
const URL = "https://cors-anywhere.herokuapp.com/https://rel.ink/api/links/"
const resultContainer = document.getElementById('result')

input.addEventListener('input', (e)=>{
    if (!input.checkValidity()){
        document.querySelector('.action-banner-input').setAttributeNode(att)
    } else {
        document.querySelector('.action-banner-input').removeAttribute('data-error')
    }

})

submit.addEventListener('click', async (e)=>{
    e.preventDefault()
    if (!input.checkValidity()){
       return
    } else {
        const config = {
            headers: {
                "content-type": "application/JSON"
            },
            body: 
                JSON.stringify({
                    url: input.value
                })
            ,
            method: "POST"
        }
        const res= await fetch(URL, config)

        const data = await res.json()
        const hashId = data.hashid
        display(input.value, hashId)

    }
})

const display =(userinput, id)=>{
    let resultID = 0
    let HTML = `    <div class="result-card my-1 id="${resultID}">
    <p class="user-input">${userinput}</p>
    <p class="result-url" id="result-url-${resultID}"> https://rel.ink/api/links/${id}</p>
    <button class="btn btn-primary-cyan" id="copy-function-${resultID}"> Copy</button>
  </div>`
  resultContainer.insertAdjacentHTML('afterbegin', HTML)
  resultID ++

}

resultContainer.addEventListener('click', e=>{
    console.log(e.target.id)
    if (e.target.id.includes("copy-function")){
        const resultID = e.target.id.split('-')[2]
        const resultURL = document.getElementById(`result-url-${resultID}`).innerText
        e.target.classList.remove('btn-primary-cyan')
        e.target.classList.add('btn-dark')
        e.target.innerText="Copied!"
        const result = document.execCommand('copy')
        console.log(result.value)

        
    }
})