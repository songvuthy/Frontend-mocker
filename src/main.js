import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home/Home.vue'
import Create from './components/Create/Create.vue'
import Setting from './components/Home/Home.vue'
import Help from './components/Home/Home.vue'
import Notifications from './components/Home/Home.vue'
import Myworkspace from './components/Myworkspace/Myworkspace.vue'
import Myresource from './components/Methods/Methods.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)
const routes = [
    {path:'/',name:'home',component:Home},
    {path:'/create',name:'create',component:Create},
    {path:'/setting',name:'setting',component:Setting},
    {path:'/help',name:'help',component:Help},
    {path:'/notifications',name:'notifications',component:Notifications},
    {path:'/:id',name:'myworkspace',component:Myworkspace},
    {path:'/:id',name:'myresource',component:Myresource},
]
const router = new VueRouter({
    mode:'history',
    routes,
})
new Vue({
    el:'#app',
    router,
    components:{

    },
    data:{
        data:[],
        key_search:'',
    },
    created(){

    }
    ,
    methods:{

    },
    computed: {
        filteredList() {
            return this.data.filter(data => {
                return data.name.toLowerCase().includes(this.key_search.toLowerCase())
            })
        },
    },
    render: h => h(App)
});
