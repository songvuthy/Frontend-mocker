import resource from '../../services/resource';
export default {
    data(){
        return {
            resource:{
                resource:'',
                description:'',
            },
            resources:[],
            loading:'',
        }
    },
    watch:{'$route.fullPath':function () {
        this.loading = true
        this.getData();
        }
    },
    created(){
        this.loading = true
        this.getData();
    },
    methods:{
        getData:function () {
            resource.getResource(this.$route.fullPath)
                .then( response => {
                    console.log(response)
                    this.resources = response.data.resources;
                    this.loading = false

            }).catch(err => console.log(err));
        },
        onSave: function () {
            if(this.resource.resource !=""){
                this.loading = true
                let newResource = {
                    "name": this.resource.resource,
                    "description": this.resource.description,
                    "workspace_id": this.$route.params.id,
                };
                resource.createResource(newResource)
                    .then( response =>{
                        this.resources.push(response.data.resource)
                        this.resource.resource =''
                        this.resource.description =''
                        this.loading = false
                    }).catch(err => console.log(err));
            }else {

            }
        },
    }

}