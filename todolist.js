window.onload = function(){
    // Getting elements by their ids

    let tasklist = document.getElementById('tasklist')
    let newtask = document.getElementById('newtask')
    let addbtn = document.getElementById('addbtn')
    let sortbtn = document.getElementById('sortbtn')
    let clearbtn = document.getElementById('clearbtn')


    // Function to add a new task to the list

    function addNewTask(){
        let newTaskValue = newtask.value
        let newTaskListItem = document.createElement('li')
        newTaskListItem.innerText = newTaskValue
        newTaskListItem.className = 'list-group-item'

        // Creating the done button for the list. Used after the task has been completed.

        let donebtn = document.createElement('button')
        donebtn.innerText = 'DONE'
        donebtn.className = 'btn btn-primary col-2 mybutton mx-4'
        newTaskListItem.appendChild(donebtn)

        // Creating a delete button for the list.

        let deletebtn = document.createElement('button')
        deletebtn.innerText = 'DELETE'
        deletebtn.className = 'btn btn-primary col-2 mybutton mx-2'
        newTaskListItem.appendChild(deletebtn)

        // Up and down buttons for the list.

        let upbtn = document.createElement('button')
        upbtn.innerText = 'UP'
        upbtn.className = 'btn btn-primary col-2 mybutton mx-2'
        newTaskListItem.appendChild(upbtn)

        let downbtn = document.createElement('button')
        downbtn.innerText = 'DOWN'
        downbtn.className = 'btn btn-primary col-2 mybutton mx-2'
        newTaskListItem.appendChild(downbtn)

        tasklist.appendChild(newTaskListItem)
        newtask.value = " ";


        // Functionality of the donebtn
        donebtn.onclick = function(){
            if(newTaskListItem.className.indexOf('disabled')==-1){
                newTaskListItem.className = 'list-group-item disabled'
                donebtn.innerText = 'UNDONE'
            }else{
                newTaskListItem.className = 'list-group-item'
                donebtn.innerText = 'DONE'
            }
        }

        // Functionality of deletebtn
        deletebtn.onclick = function(){
            tasklist.removeChild(newTaskListItem)
        }

        // Function up btn
        upbtn.onclick = function(){
            console.log('Up btn is clicked.')
            tasklist.insertBefore(newTaskListItem, newTaskListItem.previousSibling)
        }

        // Function down btn
        downbtn.onclick = function(){
            console.log('Down btn is pressed.')
            tasklist.insertBefore(newTaskListItem.nextSibling,newTaskListItem)
        }
        
    }

    // Functionality of clear btn.

    function clearTask(){
        console.log('Clear task btn is pressed.')
        let k = tasklist.childElementCount
        console.log(k)
        for(let i=1;i<=k;i++){
            if(tasklist.childNodes[i].className.indexOf('disabled')==-1){
                continue
            }else{
                k--;
                tasklist.removeChild(tasklist.childNodes[i])
                i--;
            }
        }
    }


    // Function to sort the tasks.

    function sortTask(){
        console.log('Sort btn is pressed.')
        let k = tasklist.childElementCount
        for(let i=1;i<=k;i++){
            for(let j=1;j<k;j++){
                if(tasklist.childNodes[j+1].className.indexOf('disabled')==-1 && tasklist.childNodes[j].className.indexOf('disabled')!=-1){
                    let temp1 = tasklist.childNodes[j+1];
                    let temp2 = tasklist.childNodes[j];
                    tasklist.insertBefore(temp1,temp2)
                }
            }
        }
    }

    // Event Listeners.

    newtask.addEventListener('keyup', function(e){
        if(e.keyCode == 13){
            addNewTask()
        }
    })

    addbtn.onclick = function(){
        addNewTask()
    }

    clearbtn.onclick = function(){
        console.log('Clear task has been called.')
        clearTask()
    }

    sortbtn.onclick = function(){
        console.log('Sort btn has been clicked.')
        sortTask()
    }

}