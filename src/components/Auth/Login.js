import user from '../../services/user';
export default{
    data(){
        return{
            users:[],
            login:'Log in',
            register:'Register',
            titleAuth:'Log in',
            register_user: {
                username: '',
                password:'',
                comfirmpassword:'',
                mail:''
            }
        }
    },
    methods:{
        isActiveMenu:function ($name) {
            return this.$route.name.includes($name)?'active':''
        },
        isSignin:function (e) {
            let status = $(e.target).text()
            this.titleAuth = status
            let users_login = {
                "email": this.register_user.mail,
                "password": this.register_user.password,
            };
            user.login(users_login)
                .then( response =>{
                    let token = response.data.token
                    user.getUser(token).then( response => {
                        //save user data to local strorege
                        this.users = response
                        user.save_local_storage("token", token);
                        user.save_local_storage("user", response.data.user);
                        this.$router.push('/create');
                        //after save redirect to dashboard
                    }).catch(err => console.log(err));

                }).catch(err => console.log(err));
        },
        isSignup:function (e) {
            if(this.titleAuth == this.login){
                let status = $(e.target).text()
                this.titleAuth = status
            }else if(this.titleAuth ==this.register){
                let users_register = {
                    "username": this.register_user.username,
                    "password": this.register_user.password,
                    "email": this.register_user.mail,
                };
                user.register(users_register)
                    .then( response =>{
                        let token = response.data.token
                        user.getUser(token).then( response => {
                            //save user data to local strorege
                            this.users = response
                            user.save_local_storage("token", token);
                            user.save_local_storage("user", response.data.user);
                            this.$router.push('/create');
                            //after save redirect to dashboard
                        }).catch(err => console.log(err));

                    }).catch(err => console.log(err));
            }
        }
    }
}
