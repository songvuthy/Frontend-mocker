import workspace from '../../services/workspace';
import user from '../../services/user';

export default {
    name:'create',
    components:{
        // FormMethods
    },
    data(){
        return {
            data:[],
            loading:'',
            create:[1],
            methods:['GET','POST','PUT'],
            workspace:{
                mockName:"",
                deployName:"",
                description:"",
            }
        }
    },
    methods:{
        onSave: function () {
            if(this.workspace.mockName !="" && this.workspace.deployName !=""){
                this.loading = true
                let newWorkspace = {
                    "name": this.workspace.mockName,
                    "description": this.workspace.description,
                    "deploy_name": this.workspace.deployName,
                    "uid": user.getUserId()
                };
                workspace.createWorkspace(newWorkspace)
                    .then( response =>{
                        this.data = response.data.workspace
                        this.$root.data.push(response.data.workspace)
                        this.workspace.mockName =''
                        this.workspace.deployName =''
                        this.workspace.description =''
                        this.loading = false
                    }).catch(err => console.log(err));
            }else {

            }
        },

    }
}