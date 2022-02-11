//delete plant by id (has to belong to YOU)
//delete comment by id (has to belong to YOU)


//NOTE FROM SABRINA THURS EVENING 11PM///////////////
    // the variable for finding the comment user id is commented-out in the deleteComment.forEach method
    // the variable for finding the plant user id is commented-out in the deletePlant.forEach method







const deleteComment = document.querySelectorAll('.trash-comment');

deleteComment.forEach(deleteCommentBtn=>{
    deleteCommentBtn.addEventListener("click",e=>{
        const commentId = e.target.parentElement.dataset.commentid;
        fetch(`/api/comment/${commentId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
               console.log('comment was deleted')
               location.reload();
            } else {
                console.log("comment was not deleted")
                console.log(err)
            }
        })
    })
});


const deletePlant = document.querySelectorAll('.trash-plant');

deletePlant.forEach(deletePlantBtn=>{
    deletePlantBtn.addEventListener("click",e=>{
        const plantId = e.target.parentElement.dataset.plantid;

        fetch(`/api/plant/${plantId}`,{
            method:"DELETE"
        }).then(res=>{
            if(res.ok){
               console.log('plant was deleted')
               location.reload();
            } else {
                console.log('plant was not deleted')
                console.log(err)
            }
        })
    })
})
