
import workspace from '../../../services/workspace';
export default {
    components:{
    },
    data(){
        return{
            loading:'',
            textLoading:'loading...',

        }
    },
    mounted(){
        this.loading=true
        this.getData();
    },
    methods:{
        isActiveMenu:function ($name) {
            return this.$route.name==$name?'active':''
        },
        activeWorkspace:function (param) {
            return this.$route.fullPath.includes(param)?'active':''
        },
        getData:function () {
            workspace.getMyworkspace().then( response => {
                this.$root.data = response.data.workspaces;
                this.loading=false
            }).catch(err => {
                this.$router.push('/');
            });
        },

    },
}