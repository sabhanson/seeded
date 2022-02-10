const commentFormHandler = async function (event){
    event.preventDefault();

    const plantId = event.target.querySelector('input[name="plant-id"]').value;
    const comment = event.target.querySelector('textarea[name="comment-body"]').value;

    console.log(plantId)
    console.log(comment)
    const response =  await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            plantId,
            comment
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok){
        document.location.reload()
    } else {
        alert('sum ting wong')
    }
    
};

const commentSubmit = document.querySelectorAll('.comment-form')

commentSubmit.forEach(form => {
    form.addEventListener('submit', commentFormHandler)
});