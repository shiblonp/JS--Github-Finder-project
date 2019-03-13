const github = new Github;
const ui = new UI;
const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;
    if(userText !== ''){
        //to make the http call
        github.getUser(userText).
        then(data=>{
            if(data.profile.message === 'Not Found'){
                //show alert

            }else{
                //show profile
                ui.showProfile(data.profile)
            }
        })
    }else{
            //clear profile
        }
});