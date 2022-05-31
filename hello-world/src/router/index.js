import Vue from "vue";
import Router from "vue-router";
// import { component } from 'vue/types/umd'
// import HelloWorld from '../components/HelloWorld'
import demo from "@/components/26-04-2022/demo";
import promise from "@/components/28-04-2022/promise.vue";
import Axios from "@/components/28-04-2022/axios.vue";
import t3que1 from "@/components/28-04-2022/t3que1.vue";
import fetch from "@/components/29-04-2022/fetch.vue";
import fetch1 from "@/components/29-04-2022/fetch1.vue";
import fetch2 from "@/components/29-04-2022/fetch2.vue";
import t3q1 from "@/components/29-04-2022/t3q1.vue";
import t3q2 from "@/components/29-04-2022/t3q2.vue";
import settimeout from "@/components/29-04-2022/settimeout.vue";
import country from "@/components/29-04-2022/country.vue";
import dropdown from "@/components/02-05-2022/dropdown.vue";
import pagination from "@/components/02-05-2022/pagination.vue";
import A1 from "@/components/02-05-2022/A1.vue";
import A2 from "@/components/02-05-2022/A2.vue";
import A3 from "@/components/02-05-2022/A3.vue";
import A3a from "@/components/02-05-2022/A3a.vue";
import A4 from "@/components/04-05-2022/A4.vue";
import A5 from "@/components/04-05-2022/A5.vue";
import A6 from "@/components/04-05-2022/A6.vue";
import A7 from "@/components/04-05-2022/A7.vue";
import A8 from "@/components/04-05-2022/A8.vue";
import practice from "@/components/26-04-2022/practice.vue";
import A9 from "@/components/04-05-2022/A9.vue";
import A10 from "@/components/04-05-2022/A10.vue";
import task1 from "@/components/05-05-2022/task1.vue";
import task2 from "@/components/05-05-2022/task2.vue";
import directives from "@/components/05-05-2022/directives.vue";
import tab from "@/components/06-05-2022/tab.vue";
import tabtask from "@/components/06-05-2022/tabtask.vue";
import async from "@/components/06-05-2022/async.vue";
import tabtable from "@/components/09-05-2022/tabtable.vue";
import pageaxios from "@/components/09-05-2022/pageaxios.vue";
import pagefetch from "@/components/09-05-2022/pagefetch.vue";
import lifecycle from "@/components/09-05-2022/lifecycle.vue";
import example from "@/components/09-05-2022/example.vue";
import nexttick from "@/components/10-05-2022/nexttick.vue";
import next from "@/components/10-05-2022/next.vue";
import test1 from "@/components/10-05-2022/test1.vue";
import test5 from "@/components/10-05-2022/test5.vue";
import test6 from "@/components/10-05-2022/test6.vue";
import q2 from "@/components/11-05-2022/q2.vue";
import pop from "@/components/13-05-2022/pop.vue";
import pprops from "@/components/27-04-2022/pprops.vue";
import pemit from "@/components/27-04-2022/pemit.vue";
import pref from "@/components/27-04-2022/pref.vue";
import computed from "@/components/14-05-2022/computed.vue";
import btabs from "@/components/14-05-2022/btabs.vue";
import formtask from "@/components/16-05-2022/formtask.vue";
import es6 from "@/components/18-05-2022/es6.vue";
import task from "@/components/17-05-2022/task.vue";
import eg from "@/components/17-05-2022/eg.vue";
import signup from "@/components/19-05-2022/signup.vue";
import login from "@/components/19-05-2022/login.vue";
import registration from "@/components/19-05-2022/registration.vue";
import forgetpassword from "@/components/19-05-2022/forgetpassword.vue";
import note from "@/components/19-05-2022/note.vue";
import crud1 from "@/components/20-05-2022/crud1.vue";
import crud2 from "@/components/20-05-2022/crud2.vue";
import nextp from "@/components/26-05-2022/nextp.vue";
import mixin from "@/components/26-05-2022/mixin.vue";
import assign from "@/components/27-05-2022/assign.vue";
import cassign from "@/components/27-05-2022/cassign.vue";
//import home from "@/components/31-05-2022/home.vue";


Vue.use(Router);

const routes = [
  { path: "/demo", name: "demo", component: demo },
  { path: "/promise", name: "lava", component: promise },
  { path: "/axios", name: "lava", component: Axios },
  { path: "/t3q1", name: "t3q1", component: t3q1 },
  { path: "/t3q2", name: "t3q2", component: t3q2 },
  { path: "/t3que1", name: "t3que1", component: t3que1 },
  { path: "/fetch", name: "lava", component: fetch },
  { path: "/fetch1", name: "fetch1", component: fetch1 },
  { path: "/fetch2", name: "fetch2", component: fetch2 },
  { path: "/settimeout", name: "settimeout", component: settimeout },
  { path: "/country", name: "country", component: country },
  { path: "/dropdown", name: "country", component: dropdown },
  { path: "/pagination", name: "pagination", component: pagination },
  { path: "/A1", name: "A1", component: A1 },
  { path: "/A2", name: "A2", component: A2 },
  { path: "/A3", name: "A3", component: A3 },
  { path: "/A3a", name: "A3", component: A3a },
  { path: "/A4", name: "A4", component: A4 },
  { path: "/A5", name: "A5", component: A5 },
  { path: "/A6", name: "A6", component: A6 },
  { path: "/A7", name: "A7", component: A7 },
  { path: "/A8", name: "A8", component: A8 },
  { path: "/practice", name: "practice", component: practice },
  { path: "/A9", name: "A9", component: A9 },
  { path: "/A10", name: "A9", component: A10 },
  { path: "/directives", name: "directives", component: directives },
  { path: "/task1", name: "task1", component: task1 },
  { path: "/task2", name: "task2", component: task2 },
  { path: "/tab", name: "tab", component: tab },
  { path: "/tabtask", name: "tabtask", component: tabtask },
  { path: "/async", name: "async", component: async },
  { path: "/tabtable", name: "tabtable", component: tabtable },
  { path: "/pageaxios", name: "pageaxios", component: pageaxios },
  { path: "/pagefetch", name: "pagefetch", component: pagefetch },
  { path: "/lifecycle", name: "lifecycle", component: lifecycle },
  { path: "/example", name: "example", component: example },
  { path: "/nexttick", name: "nexttick", component: nexttick },
  { path: "/next", name: "next", component: next },
  { path: "/test1", name: "test1", component: test1 },
  { path: "/test5", name: "test5", component: test5 },
  { path: "/test6", name: "test6", component: test6 },
  { path: "/q2", name: "q2", component: q2 },
  { path: "/pop", name: "pop", component: pop },
  { path: "/pprops", name: "pprops", component: pprops},
  { path: "/pemit", name: "pemit", component: pemit},
  { path: "/pref", name: "pref", component: pref },
  { path: "/computed", name: "computed", component:computed},
  { path: "/btabs", name: "btabs", component:btabs},
  { path: "/formtask", name: "formtask", component:formtask},
  { path: "/task", name: "task", component:task},
  { path: "/es6", name: "es6", component:es6},
  { path: "/eg", name: "eg", component:eg},
  { path: "/signup", name: "signup", component:signup},
  { path: "/login", name: "login", component:login},
  { path: "/registration", name: "registration", component:registration},
  { path: "/forgetpassword", name: "forgetpassword", component:forgetpassword},
  { path: "/note", name: "note", component:note},
  { path: "/crud1", name: "crud1", component:crud1},
  { path: "/crud2", name: "crud2", component:crud2},
  { path: "/nextp", name: "nextp", component:nextp},
  { path: "/mixin", name: "mixin", component:mixin},
  { path: "/assign", name: "assign", component:assign},
  { path: "/cassign", name: "cassign", component:cassign},
  //{ path: "/home", name: "home", component:home},
  
   
 
];


let router = new Router({ routes });

export default router;
