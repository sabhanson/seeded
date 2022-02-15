const userId = document.querySelector('input[name="user-id"]').value
console.log(userId)
var myWidget = cloudinary.createUploadWidget({
    cloudName: 'megs425',
    uploadPreset: 'btvewbfq',
    cropping: true,
    croppingAspectRatio: 1,
    showSkipCropButton: false,
    sources: ['local','camera']
}, (error, result) => {
    if (!error && result && result.event === "success") {
        const avatarUpdate = {
            file_name: result.info.url,
        }
        fetch(`/api/user/avatarupdate/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
        body: JSON.stringify(avatarUpdate)
        })
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function () {
    myWidget.open();
}, false);