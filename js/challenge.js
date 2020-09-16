document.addEventListener("DOMContentLoaded", ()=>{
    const timer = document.querySelector("#counter")
    const heart = document.querySelector(".likes")
    

        
    // Auto Timer
    function startTimer(){ increaseElementValue(timer)}
    let continuousTimer = null

    function timerOperator(boolean){
        if (boolean == true) { 
            continousTimer = setInterval(startTimer, 1000 )
        }else{
            clearInterval(continousTimer)
        } 
    }

    function increaseElementValue(ele){
        let num = parseInt(ele.innerText)
        num  = num + 1
        ele.innerText = num
        // console.log(timer)
    }

    function decreaseElementValue(ele){
        let num = parseInt(ele.innerText)
        num  = num - 1
        ele.innerText = num
        // console.log(timer)
    }

    function increaseHeart(heart){
        // check if li exists already for uniq ID, else create new li
        if(document.getElementById(timer.innerText)){
            const currentNum = document.getElementById(timer.innerText)
            let numIncrease = currentNum.innerText.split(' ')
            numIncrease[2] = parseInt(numIncrease[2]) + 1
            currentNum.innerText = numIncrease.join(' ')
        }else{
            const newLi = document.createElement("li")
            heart.appendChild(newLi)
            newLi.innerText = `${timer.innerText} has 1 like(s)`
            newLi.id = timer.innerText
        }
    }

    function pauseTimer(pauseButton){
        
        if(pauseButton.innerText == "pause"){
            pauseButton.innerText = "resume"
            document.querySelector('#plus').disabled = true
            document.querySelector('#minus').disabled = true
            document.querySelector('#heart').disabled = true
            timerOperator(false)
        } else {
            pauseButton.innerText = "pause"
            document.querySelector('#plus').disabled = false
            document.querySelector('#minus').disabled = false
            document.querySelector('#heart').disabled = false
            timerOperator(true)
        }
    }

    document.addEventListener("submit", ()=>{
        event.preventDefault()
        const commentSection = document.querySelector("#comment-section")
        const userInput = document.querySelector("#comment-input").value
        const newLi = document.createElement("li")

        newLi.innerText = userInput
        commentSection.appendChild(newLi)
        document.getElementById("comment-form").reset()
    })

    const clickHandler = () => {
        document.addEventListener("click", (e)=>{
            // console.log(event.target.id)

            switch(event.target.id){
                case "plus":
                    increaseElementValue(timer)
                    console.log("plus")
                    break
                case "minus":
                    decreaseElementValue(timer)
                    console.log("minus")
                    break
                case "heart":
                    increaseHeart(heart)
                    console.log("heart")
                    break
                case "pause":
                    pauseTimer(event.target)
                    console.log("pause")
                    break
            }
        })}
    
    clickHandler()
    timerOperator(true)
})




