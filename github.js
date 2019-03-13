class Github{
    constructor(){
        this.client_id = '1a1c46aa0fab2b86f093';
        this.client_secret = 'da713eb06be76424538b700d18430d3eb1842d43';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}