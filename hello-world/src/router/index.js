import Vue from 'vue'
import Router from 'vue-router'
// import { component } from 'vue/types/umd'
// import HelloWorld from '../components/HelloWorld'
import promise from '@/components/28-04-2022/promise.vue'
import Axios from '@/components/28-04-2022/axios.vue'
import t3que1 from '@/components/28-04-2022/t3que1.vue'
import fetch from '@/components/29-04-2022/fetch.vue'
import fetch1 from '@/components/29-04-2022/fetch1.vue'
import fetch2 from '@/components/29-04-2022/fetch2.vue'
import t3q1 from '@/components/29-04-2022/t3q1.vue'
import t3q2 from '@/components/29-04-2022/t3q2.vue'
import settimeout from '@/components/29-04-2022/settimeout.vue'
import country from '@/components/29-04-2022/country.vue'
import dropdown from '@/components/02-05-2022/dropdown.vue'
import pagination from '@/components/02-05-2022/pagination.vue'
import A1 from '@/components/02-05-2022/A1.vue'
import A2 from '@/components/02-05-2022/A2.vue'
import A3 from '@/components/02-05-2022/A3.vue'
import A3a from '@/components/02-05-2022/A3a.vue'
import A4 from '@/components/04-05-2022/A4.vue'
import A5 from '@/components/04-05-2022/A5.vue'
import A6 from '@/components/04-05-2022/A6.vue'
import A7 from '@/components/04-05-2022/A7.vue'
import A8 from '@/components/04-05-2022/A8.vue'
import practice from '@/components/26-04-2022/practice.vue'
import A9 from '@/components/04-05-2022/A9.vue'
import A10 from '@/components/04-05-2022/A10.vue'
import task1 from '@/components/05-05-2022/task1.vue'
import task2 from '@/components/05-05-2022/task2.vue'
import directives from '@/components/05-05-2022/directives.vue'
import tab from '@/components/06-05-2022/tab.vue'
import tabtask from '@/components/06-05-2022/tabtask.vue'
import async from '@/components/06-05-2022/async.vue'
Vue.use(Router)

const routes = [

    {path:'/promise',name:"lava",component:promise},
    {path:'/axios',name:"lava",component:Axios},
    {path:'/t3q1',name:"t3q1",component:t3q1},
    {path:'/t3q2',name:"t3q2",component:t3q2},
    {path:'/t3que1',name:"t3que1",component:t3que1},
    {path:'/fetch',name:"lava",component:fetch},
    {path:'/fetch1',name:"fetch1",component:fetch1},
    {path:'/fetch2',name:"fetch2",component:fetch2},
    {path:'/settimeout',name:"settimeout",component:settimeout},
    {path:'/country',name:"country",component:country},
    {path:'/dropdown',name:"country",component:dropdown},
    {path:'/pagination',name:"pagination",component:pagination},
    {path:'/A1',name:"A1",component:A1},
    {path:'/A2',name:"A2",component:A2},
    {path:'/A3',name:"A3",component:A3},
    {path:'/A3a',name:"A3",component:A3a},
    {path:'/A4',name:"A4",component:A4},
    {path:'/A5',name:"A5",component:A5},
    {path:'/A6',name:"A6",component:A6},
    {path:'/A7',name:"A7",component:A7},
    {path:'/A8',name:"A8",component:A8},
    {path:'/practice',name:"practice",component:practice},
    {path:'/A9',name:"A9",component:A9},
    {path:'/A10',name:"A9",component:A10},
    {path:'/directives',name:"directives",component:directives},
    {path:'/task1',name:"task1",component:task1},
    {path:'/task2',name:"task2",component:task2},
    {path:'/tab',name:"tab",component:tab},
    {path:'/tabtask',name:"task",component:tabtask},
    {path:'/async',name:"async",component:async},

]


let router = new Router({routes})


export default router




