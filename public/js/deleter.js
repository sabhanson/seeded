//delete plant by id (has to belong to YOU)
//delete comment by id (has to belong to YOU)

const deleter = document.querySelectorAll('.trash-btn')

deleter.forEach(deleteBtn=>{
    deleteBtn.addEventListener("click",e=>{
        const path = e.target.parentElement.dataset.commentid;
        fetch(`/api/comment/${path}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
               console.log('deleted yeee')
               location.reload();
               //STILL NEED TO AUTHENTICATE THAT THE CORRECT USER IS DELETING
            } else {
                console.log("nope")
            }
        })
    })
})


const deletePlant = document.querySelectorAll('.trash-plant')

deletePlant.forEach(deletePlantBtn=>{
    deletePlantBtn.addEventListener("click",e=>{
        const path = e.target.parentElement.dataset.plantid;
        fetch(`/api/plant/${path}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
               console.log('deleted yeee')
               location.reload();
               //STILL NEED TO AUTHENTICATE THAT THE CORRECT USER IS DELETING
            } else {
                console.log("nope")
            }
        })
    })
})
