(window.webpackJsonp=window.webpackJsonp||[]).push([[93,7,11,12,34,36,37],{286:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String,onClick:{type:Function}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-white text-xs flex items-center justify-center bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(t._s(t.title))]):"secondary"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")]):r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border-0 hover:bg-primary-100",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},287:function(t,e,r){"use strict";r.r(e);var l={props:{head_data:Array,classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("div",{class:t.classes},[r("div",{staticClass:"p-5 bg-white text-sm text-tertiary-600 rounded-t-lg"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"relative w-full pt-14 bg-primary-100 text-tertiary-800"},[r("div",{staticClass:"overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white"},[r("table",{staticClass:"min-w-full bg-primary-100 overflow-auto"},[r("thead",{staticClass:"xl:text-sm text-xs text-tertiary-800"},[r("tr",{staticClass:" overflow-x-auto"},t._l(t.head_data,(function(e){return r("th",{staticClass:"text-left px-6 text-xs xl:text-sm font-normal h-0 py-0 border-0 pb-2"},[r("div",{staticClass:"py-6 text-tertiary-800 font-semibold"},[t._v(" "+t._s(e)+"  ")])])})),0)]),t._v(" "),r("tbody",{staticClass:"bg-white text-sm text-tertiary-500 font-normal stripe "},[t._t("default")],2)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(287).default})},288:function(t,e,r){"use strict";r.r(e);var l={props:["title","back","item_id"],computed:{}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"h-24 bg-white relative"},[l("div",{staticClass:"max-w-lg-screen mx-auto xl:px-32 px-10 2xl:px-0 h-full flex items-center justify-between w-full"},[l("div",{staticClass:" text-tertiary-300"},[l("h1",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v(" "+t._s(t.title)+" ")]),t._v(" "),l("p",{staticClass:"text-tertiary-600"},[t._v(t._s(t.item_id))])]),t._v(" "),l("div",[t._t("default")],2)]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.back,expression:"back"}],staticClass:"xl:px-24 absolute inset-y-0 flex items-center "},[l("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[l("img",{attrs:{src:r(295),alt:"",srcset:""}})])])])}),[],!1,null,null,null);e.default=component.exports},289:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between"},[r("div",[t._t("filter")],2),t._v(" "),r("div",{staticClass:"flex items-center"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},295:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAyMyAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjI5Mjg5MyA3LjI5Mjg5Qy0wLjA5NzYzMTEgNy42ODM0MiAtMC4wOTc2MzExIDguMzE2NTggMC4yOTI4OTMgOC43MDcxMUw2LjY1Njg1IDE1LjA3MTFDNy4wNDczOCAxNS40NjE2IDcuNjgwNTQgMTUuNDYxNiA4LjA3MTA3IDE1LjA3MTFDOC40NjE1OSAxNC42ODA1IDguNDYxNTkgMTQuMDQ3NCA4LjA3MTA3IDEzLjY1NjlMMi40MTQyMSA4TDguMDcxMDcgMi4zNDMxNUM4LjQ2MTU5IDEuOTUyNjIgOC40NjE1OSAxLjMxOTQ2IDguMDcxMDcgMC45Mjg5MzJDNy42ODA1NCAwLjUzODQwOCA3LjA0NzM4IDAuNTM4NDA4IDYuNjU2ODUgMC45Mjg5MzJMMC4yOTI4OTMgNy4yOTI4OVpNMjEgOUMyMS41NTIzIDkgMjIgOC41NTIyOCAyMiA4QzIyIDcuNDQ3NzIgMjEuNTUyMyA3IDIxIDdWOVpNMSA5SDIxVjdIMVY5WiIgZmlsbD0iIzZCOEVGQSIvPg0KPC9zdmc+DQo="},297:function(t,e,r){"use strict";r.r(e);var l={props:{status:String,classes:String},computed:{},methods:{color:function(t){return"approved"===t?"text-action-success bg-action-success-light":"pending"===t?"text-action-warning bg-action-warning-light":"denied"===t?"text-action-danger bg-action-danger-light":""}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"flex items-center justify-center font-normal rounded-md ",class:[t.color(t.status),t.classes]},[t._v("\n    "+t._s(t.status)+"\n")])}),[],!1,null,null,null);e.default=component.exports},313:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEESURBVHgB3VLNzYJAEHWXhQOnr4OPEuxArMBYgVqB7olwcj0QAhy0A7UCYwXagSVICZw48eMbo4ZoEPToJMMyszOPN29gYRieGWNx5wsry9ISOPdFUcSO46w+aY6iaA4Adg3A4uR5Xrdts+/7VhAEZ3rn9MjzfKjr+lop9dfUTDWapu3Auv8AcF03Bp2taZrLJgCqoVrqebkErQ18VteMUafwdTXHq4FhGDNsZEQzPjffcuM0TWUtgJQywTGhGZ8BkDuQVtAg6TQZxlDkFerjalzL4G5Q+IhR/u8xRLMp1xrgE/sBAPHuEru3OecDCNpDqFoDQPEEe7eFEFaWZQv8trLuIxfkg2z2XTxnDAAAAABJRU5ErkJggg=="},327:function(t,e,r){"use strict";r.r(e);var l={props:{title:String,heading:String,total_count:String,week_count:String,color:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"xl:h-48 h-40 bg-white p-5 rounded-xl font-normal",class:t.color},[r("h4",{staticClass:"xl:text-sm  text-xs"},[t._v(t._s(t.heading))]),t._v(" "),r("div",{staticClass:"flex items-center h-full justify-center"},[r("div",{staticClass:"xl:text-4xl text-2xl text-center"},[r("span",{staticClass:"font-medium "},[t._v(t._s(t.total_count))]),t._v(" "),r("p",{staticClass:"xl:text-base text-xs"},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"pt-5 xl:text-xs text-thin text-tertiary-300"},[t._v("This Week :  "+t._s(t.week_count))])])])])}),[],!1,null,null,null);e.default=component.exports},404:function(t,e,r){"use strict";r.r(e);r(45),r(26),r(28),r(55),r(27),r(56);var l=r(29),n=(r(57),r(327)),c=r(287),o=r(297),x=r(288),d=r(289),v=r(54);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var f={components:{AnalysisCard:n.default,Table:c.default,Status:o.default,BreadCrumb:x.default,TableFilter:d.default},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(v.d)({vehicles:function(t){return t.vehicle.vehicles},isloading:function(t){return t.isloading}})),methods:{getOwnerName:function(t){if(t)return console.log(t),"Business"===t.type?t.businessName:"Government"===t.type?t.agencyName:"".concat(t.firstName," ").concat(t.lastName," ").concat(t.otherName?t.otherName:"")},toggleFilterFunc:function(){this.toggle_filter=!this.toggle_filter}},data:function(){return{table_head_data:["Vehicle ID #","Plate Number","Vehicle Category","Activity","Date Created","Status"],toggleSlide:!1,toggle_filter:!1}}},m=r(17),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"pb-8"},[l("BreadCrumb",{attrs:{title:"Overview"}},[l("nuxt-link",{staticClass:"min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",attrs:{to:"/vehicle-manager/vehicles/create"}},[t._v("\n            New Registration\n        ")])],1),t._v(" "),l("div",{staticClass:"max-w-lg-screen mx-auto px-10 xl:px-32 xl:py-16 py-10 2xl:px-0  h-full w-full"},[l("div",{staticClass:"grid grid-cols-1 gap-y-10"},[l("div",[l("Table",{attrs:{classes:"rounded-xl",head_data:t.table_head_data},scopedSlots:t._u([{key:"head",fn:function(){return[l("TableFilter",{staticClass:"pt-5 pb-2",scopedSlots:t._u([{key:"filter",fn:function(){return[l("div",{staticClass:" relative"},[l("button",{staticClass:" hover:bg-primary-300 hover:text-tertiary-900 hover:border-primary-300  flex items-center focus:outline-none py-3 px-4 rounded-md border  w-60",class:[t.toggle_filter?"bg-primary-300 text-tertiary-900 border-primary-300":"bg-white text-tertiary-500 border-tertiary-400"],on:{click:t.toggleFilterFunc}},[l("img",{attrs:{src:r(313),alt:"",srcset:""}}),t._v(" "),l("span",{staticClass:"pl-4 text-xs"},[t._v("Filter Owner")])]),t._v(" "),l("div",{directives:[{name:"show",rawName:"v-show",value:t.toggle_filter,expression:"toggle_filter"}],staticClass:"absolute pt-2 z-70 "},[l("div",{staticClass:"bg-white rounded-md text-tertiary-500 shadow"},[l("p",{staticClass:"text-xs text-tertiary-800 bg-tertiary-200 py-2 rounded-t-md px-6"},[t._v("date")]),t._v(" "),l("div",{staticClass:"py-3 px-4"},[l("p",{staticClass:"text-xs"},[t._v("Last")]),t._v(" "),l("div",{staticClass:"pt-1"},[l("button",{staticClass:" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs"},[t._v("\n                                        3days\n                                        ")]),t._v(" "),l("button",{staticClass:" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs"},[t._v("7 days")]),t._v(" "),l("button",{staticClass:" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs"},[t._v("30 day")])])]),t._v(" "),l("div",{staticClass:"flex items-center"},[l("div",{staticClass:"py-3 px-4"},[l("p",{staticClass:"text-xs text-tertiary-500"},[t._v("From")]),t._v(" "),l("input",{staticClass:"border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none",attrs:{type:"date",name:"",id:""}})]),t._v(" "),l("div",{staticClass:"py-3 px-4 text-tertiary-500"},[l("p",{staticClass:"text-xs"},[t._v("From")]),t._v(" "),l("input",{staticClass:"border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none",attrs:{type:"date",name:"",id:""}})])]),t._v(" "),l("p",{staticClass:"text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6"},[t._v("Category")]),t._v(" "),l("div",{staticClass:"py-3 px-4"},[l("div",{staticClass:"pt-1 flex items-center flex-wrap"},[l("div",{staticClass:"flex items-center pb-6 mr-6"},[l("input",{staticClass:"w-3 h-3 mr-2",attrs:{id:"individual",name:"individual",type:"checkbox"}}),t._v(" "),l("label",{staticClass:"text-xs text-tertiary-500",attrs:{for:"individual"}},[t._v("Individual")])]),t._v(" "),l("div",{staticClass:"flex items-center pb-6 mr-6"},[l("input",{staticClass:"w-3 h-3 mr-2",attrs:{id:"individual",name:"individual",type:"checkbox"}}),t._v(" "),l("label",{staticClass:"text-xs text-tertiary-500",attrs:{for:"individual"}},[t._v("Business")])]),t._v(" "),l("div",{staticClass:"flex items-center mr-6"},[l("input",{staticClass:"w-3 h-3 mr-2",attrs:{id:"individual",name:"individual",type:"checkbox"}}),t._v(" "),l("label",{staticClass:"text-xs text-tertiary-500",attrs:{for:"individual"}},[t._v("Goverment Agency")])])])]),t._v(" "),l("p",{staticClass:"text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6"},[t._v("Unigue Id")]),t._v(" "),l("div",{staticClass:"py-5 px-4"},[l("input",{staticClass:"w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs",attrs:{placeholder:"Enter Unique Id",type:"text"}})]),t._v(" "),l("p",{staticClass:"text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6"},[t._v("Profile Name")]),t._v(" "),l("div",{staticClass:"py-5 px-4"},[l("input",{staticClass:"w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs",attrs:{placeholder:"Enter Profie Name",type:"text"}})]),t._v(" "),l("div",{staticClass:"py-5 px-4 flex justify-between items-center"},[l("button",{staticClass:"text-xs focus:outline-none text-primary-500 hover:bg-primary-100 px-4 h-6 rounded-xl"},[t._v("clear")]),t._v(" "),l("button",{staticClass:"text-xs focus:outline-none text-white hover:bg-primary-500 bg-primary-400 px-4 h-6 rounded-xl "},[t._v("Filter")])])])])])]},proxy:!0}])},[t._v(" "),l("div",{staticClass:"flex items-center"},[l("span",{staticClass:"text-xs text-tertiary-300 mr-1"},[t._v("Show entries")]),t._v(" "),l("select",{staticClass:"focus:outline-none w-16 h-10 border px-2 rounded-md",attrs:{name:"",id:""}},[l("option",{attrs:{selected:"",value:"10"}},[t._v("10")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("20")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("30")])])])])]},proxy:!0}])},[t._v(" "),t._l(t.vehicles,(function(e){return l("tr",{staticClass:"relative"},[l("td",{staticClass:"text-left py-4 px-5"},[t._v(t._s(e.id))]),t._v(" "),l("td",{staticClass:"text-left py-4 px-5"},[t._v(t._s(e.plateNumber))]),t._v(" "),l("td",{staticClass:"text-left py-4 px-5"},[l("a",{staticClass:"hover:text-blue-500"},[t._v("\n                            "+t._s(e.category))])]),t._v(" "),l("td",{staticClass:"text-left py-4 px-5"},[l("a",{staticClass:"hover:text-blue-500"},[t._v(t._s(e.category))])]),t._v(" "),l("td",{staticClass:"text-left py-4 px-5"},[l("a",{staticClass:"hover:text-blue-500"},[t._v(t._s(t.$moment(e.createdAt).format("MMMM d, YYYY")))])]),t._v(" "),l("td",{staticClass:"text-left py-4 px-5"},[l("Status",{attrs:{classes:"w-24 h-8 text-xs",status:"approved"}})],1),t._v(" "),l("nuxt-link",{staticClass:"absolute inset-0 ",attrs:{to:"/vehicle-manager/vehicles/"+e.id}})],1)}))],2)],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BreadCrumb:r(288).default,Button:r(286).default,TableFilter:r(289).default,Status:r(297).default,Table:r(287).default})}}]);