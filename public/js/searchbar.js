const searchBarHandler = async function (event) {
    event.preventDefault();

    // const searchInput = document.querySelector('#search-input').value

    const response = await fetch('/api/user/userlookup', {
        method: 'GET'
    })
    if (response.ok){
        document.location.replase('/profile')
    }
    console.log(response)
    for (let i = 0; i < response.length; i++) {
        console.log(response[i].username)
        // if (userArr === searchInput){
        //     document.location.replase(`/profile${}`)
        // } else {
        //     alert('uhoh')
        // }
    }
    
}

document.querySelector('#search-btn').addEventListener('click', searchBarHandler);