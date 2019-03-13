class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }
    //this method is the html template for what we are returning from the github API
    showProfile(user){
        this.profile.innerHTML =` 
         <div class="card card-body mb-3">
            <div class = "row">
                <div class="col-md-3">
                    <img class = "img-fluid mb-2" src= "${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class="col-md-9">
                    <span class ="badge badge-primary">Public Repos: ${user.public_repos}</span>
                    <span class ="badge badge-secondary">Public Gists: ${user.public_gists}</span>
                    <span class ="badge badge-success">Followers: ${user.followers}</span>
                    <span class ="badge badge-info">Following: ${user.following}</span>
                    <br><br>
                    <ul class="list-group">
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website/Blog: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
         </div>
         <h3 class = "page-heading mb-3">Latest Repos</h3>
         <div id="repos"></div>
        `;
    }
    //this function will show the repos based for the user at the bottom of page
    showRepos(repos){
        let output='';
        repos.forEach((repo)=>{
            output += `
            <div class="card card-body mb-2">
                <div class="row">
                    <div class = "col-md-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class = "col-md-6">
                    <span class ="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                    <span class ="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                    <span class ="badge badge-success">Forks: ${repo.forks_count}</span>
                    </div>
                </div>
            </div>
            `;
        });

        document.getElementById('repos').innerHTML = output;

    }
    //this will clear the profile when the user deletes their text input
    clearProfile(){
        this.profile.innerHTML = '';
    }
    //this will show an alert in case the user input does not return a valid profile
    showAlert(message, className){
        this.clearAlert();
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
        //finding the parent of where I want to place alert
        const container = document.querySelector('.searchContainer');
        const search = document.querySelector('.search');
        //to insert the alert above the search bar
        container.insertBefore(div, search);
        //timeout on the alert after 3 seconds
        setTimeout(()=>{
            this.clearAlert()
        }, 3000);
    }
    //this method is to make sure that I only get one alert for the unfound API return
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }
}