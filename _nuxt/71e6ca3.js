(window.webpackJsonp=window.webpackJsonp||[]).push([[61,12,20,21,26,30,31,33,35,36,37,38],{286:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String,onClick:{type:Function}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-white text-xs flex items-center justify-center bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(t._s(t.title))]):"secondary"===t.type?r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")]):r("button",{staticClass:"px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center  focus:outline-none border-0 hover:bg-primary-100",on:{click:function(e){return e.preventDefault(),t.onClick.apply(null,arguments)}}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},287:function(t,e,r){"use strict";r.r(e);var l={props:{head_data:Array,classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[r("div",{class:t.classes},[r("div",{staticClass:"p-5 bg-white text-sm text-tertiary-600 rounded-t-lg"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"relative w-full pt-14 bg-primary-100 text-tertiary-800"},[r("div",{staticClass:"overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white"},[r("table",{staticClass:"min-w-full bg-primary-100 overflow-auto"},[r("thead",{staticClass:"xl:text-sm text-xs text-tertiary-800"},[r("tr",{staticClass:" overflow-x-auto"},t._l(t.head_data,(function(e){return r("th",{staticClass:"text-left px-6 text-xs xl:text-sm font-normal h-0 py-0 border-0 pb-2"},[r("div",{staticClass:"py-6 text-tertiary-800 font-semibold"},[t._v(" "+t._s(e)+"  ")])])})),0)]),t._v(" "),r("tbody",{staticClass:"bg-white text-sm text-tertiary-500 font-normal stripe "},[t._t("default")],2)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(287).default})},289:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between"},[r("div",[t._t("filter")],2),t._v(" "),r("div",{staticClass:"flex items-center"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,r){"use strict";r.r(e);var l={props:{classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed inset-0 flex justify-end items-center z-50 bg-tertiary-800 bg-opacity-40"},[r("div",{staticClass:"flex flex-col h-full"},[r("div",{staticClass:"flex-none h-20"}),t._v(" "),r("div",{staticClass:"bg-white flex-grow h-full overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-tertiary-100",class:t.classes},[r("div",{staticClass:"p-5 border-b"},[t._t("head")],2),t._v(" "),r("div",[t._t("default")],2)]),t._v(" "),r("div",{staticClass:"flex-none h-20"})])])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"w-28 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",attrs:{type:"submit"}},[t._v(t._s(t.title))]):r("button",{staticClass:"w-28 h-10 text-primary-400 text-xs flex items-center justify-center rounded-xl  focus:outline-none border-0 hover:bg-primary-100",attrs:{type:"submit"}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},292:function(t,e,r){"use strict";r.r(e);var l={props:["lable","isRequired","type","place_holder","id","value","isDisable","error"]},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col w-full"},[r("label",{staticClass:"pb-2 text-xs font-normal text-left text-tertiary-600 dark:text-gray-100",attrs:{for:t.id}},[t._v("\n        "+t._s(t.lable)+" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.isRequired,expression:"isRequired"}],staticClass:"text-red-500"},[t._v("*")])]),t._v(" "),t.isRequired?r("input",{staticClass:"border border-gray-300 dark:border-gray-700 pl-3 h-12 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400",class:[t.isDisable?"opacity-50":"",t.error?"border-red-600":"border-gray-300"],attrs:{disabled:t.isDisable,type:t.type,id:t.id,required:"",placeholder:t.place_holder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}}):r("input",{staticClass:"border border-gray-300 dark:border-gray-700 pl-3 h-12 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-600 dark:text-gray-400",class:[t.isDisable?"opacity-50":"",t.error?"border-red-600":"border-gray-300"],attrs:{disabled:t.isDisable,type:t.type,id:t.id,placeholder:t.place_holder},domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,r){"use strict";r.r(e);var l={props:{name:{String:String,required:!0},link:{String:String,required:!0},toggleNav:{String:String,required:!0}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"text-tertiary-500 mb-2"},[r("nuxt-link",{staticClass:"hover:bg-primary-100 pl-5 inline-flex items-center py-4 pb-3  text-sm transition duration-500 ease-in-out transform w-full",attrs:{to:t.link,href:"#"}},[t._t("default"),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.toggleNav,expression:"toggleNav"}],staticClass:"ml-4"},[t._v(t._s(t.name))])],2)],1)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,r){"use strict";r.r(e);var l={components:{Button:r(286).default}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("div",[r("ul",{staticClass:"flex justify-start items-center border-b px-10"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"bg-white text-center mx-auto"},[t._t("default")],2)])])}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);var l={props:{title:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-full overflow-y-auto"},[r("h2",{staticClass:"pl-8 pt-5 xl:p-5 text-lg xl:text-2xl text-primary-900 font-semibold"},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,r){"use strict";r.r(e);var l={props:{head_data:Array,classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto "},[r("div",{staticClass:"overflow-hidden",class:t.classes},[r("div",{staticClass:"py-4 text-sm text-tertiary-600"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"relative w-full pt-14 bg-primary-100 text-tertiary-800"},[r("div",{staticClass:"max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white"},[r("table",{staticClass:"min-w-full bg-primary-100"},[r("thead",{staticClass:"text-sm text-tertiary-800"},[r("tr",t._l(t.head_data,(function(e){return r("th",{staticClass:"text-left px-5 text-sm font-normal h-0 py-0 border-0"},[r("div",{staticClass:"py-4 text-tertiary-500"},[t._v(" "+t._s(e)+"  ")])])})),0)]),t._v(" "),r("tbody",{staticClass:"bg-white text-sm text-tertiary-500 font-normalz relative"},[t._t("default")],2)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(287).default})},300:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String,onClick:{type:Function}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"w-28 h-10 text-white text-xs flex items-center justify-center rounded-md bg-primary-400 focus:outline-none border border-primary-400 mr-4 hover:bg-primary-600 font-medium",on:{click:t.onClick}},[t._v(t._s(t.title))]):r("button",{staticClass:"w-28 h-10 text-primary-500 text-xs flex items-center justify-center rounded-md hover:text-primary-700 focus:outline-none hover:bg-primary-200 border border-primary-400 font-medium",on:{click:t.onClick}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},301:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik05Ljc3MzQyIDIuMzA5MDhMOC45NjQ2MyAxMS4wMjcySDMuMDM1MjZMMi4yMjY2NCAyLjMwOTA4TDEuMjAyMDMgMi4zOTQwNEwyLjAyNTQxIDExLjI3MDNDMi4wNjg3NCAxMS42Nzk0IDIuNDQ0MDEgMTIuMDAwMiAyLjg3OTk2IDEyLjAwMDJIOS4xMTk5NkM5LjU1NTczIDEyLjAwMDIgOS45MzExNSAxMS42Nzk2IDkuOTc1MiAxMS4yNjQ1TDEwLjc5ODEgMi4zOTQwNEw5Ljc3MzQyIDIuMzA5MDhaIiBmaWxsPSIjOUUwNTA1Ii8+DQo8cGF0aCBkPSJNMTEuNDg1NyAxLjg2NDc1SDAuNTE0MjkxQzAuMjMwMjI2IDEuODY0NzUgMCAyLjA4MjUzIDAgMi4zNTEyNEMwIDIuNjE5OTUgMC4yMzAyMjYgMi44Mzc3MyAwLjUxNDI5MSAyLjgzNzczSDExLjQ4NTdDMTEuNzY5OCAyLjgzNzczIDEyIDIuNjE5OTUgMTIgMi4zNTEyNEMxMiAyLjA4MjUzIDExLjc2OTcgMS44NjQ3NSAxMS40ODU3IDEuODY0NzVaIiBmaWxsPSIjOUUwNTA1Ii8+DQo8cGF0aCBkPSJNNy44ODU2NSAwSDQuMTE0MjNDMy42NDE1OSAwIDMuMjU3MDggMC4zNjM3MjcgMy4yNTcwOCAwLjgxMDgyVjIuMzUxMzdINC4yODU2NFYwLjk3Mjk2MUg3LjcxNDE5VjIuMzUxMzRIOC43NDI3NVYwLjgxMDc5N0M4Ljc0MjggMC4zNjM3MjcgOC4zNTgyOSAwIDcuODg1NjUgMFoiIGZpbGw9IiM5RTA1MDUiLz4NCjwvc3ZnPg0K"},302:function(t,e,r){t.exports=r.p+"img/edit.30451f5.svg"},375:function(t,e,r){"use strict";r.r(e);r(45),r(26),r(28),r(55),r(27),r(56);var l=r(1),n=r(29),o=(r(9),r(39),r(15),r(298)),c=r(299),d=r(289),m=r(300),f=r(290),x=r(294),v=r(286),y=r(291),_=r(292),h=r(54);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M={components:{SubSideBar:o.default,SettingsTable:c.default,TableFilter:d.default,PrimaryButton:m.default,Sliding:f.default,Tabs:x.default,Button:v.default,FormButton:y.default,Input:_.default},data:function(){return{table_head_data:["Name",""],toggle_add:!1,toggle_edit:!1,marital_status:{name:""}}},methods:C(C({},Object(h.b)({addMaritalStatus:"settings/owner_manager/addMaritalStatus",deleteMaritalStatus:"settings/owner_manager/deleteMaritalStatus",editMaritalStatus:"settings/owner_manager/editMaritalStatus"})),{},{toggleAddFunc:function(){this.toggle_add=!this.toggle_add},toggleEditFunc:function(t){var e=this;this.toggle_edit=!this.toggle_edit,this.marital_statuses.map((function(r){r.name===t&&(e.name=r.name,e.selected_id=r.id)}))},submitAdd:function(){this.addMaritalStatus(this.marital_status)},submitEdit:function(){this.editMaritalStatus({marital_status:this.marital_status,id:this.selected_id})}}),computed:Object(h.d)({marital_statuses:function(t){return t.settings.owner_manager.marital_statuses},isloading:function(t){return t.isloading}}),fetch:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.store).commit("updatedLoading"),e.next=4,r.dispatch("settings/owner_manager/getMaritalStatuses");case 4:r.commit("updatedLoading");case 5:case"end":return e.stop()}}),e)})))()}},j=r(17),component=Object(j.a)(M,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex h-full xl:mr-24"},[l("div",{staticClass:"flex-none xl:w-72 bg-white h-full sidebar-shadow"},[l("SubSideBar",{attrs:{title:"Owner Manager"}},[l("nav",{staticClass:"pt-3"},[l("ul",{staticClass:" text-tertiary-500"},[l("li",{staticClass:"w-full border-b hover:border-transparent"},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/owner-manager/state"}},[t._v("State")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/owner-manager/lga"}},[t._v("Local Government Area")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/owner-manager/prefix"}},[t._v("Prefix")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/owner-manager/marital-status"}},[t._v("Marital Status")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/owner-manager/agency-category"}},[t._v("Agency Ministry")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/owner-manager/means-of-identity"}},[t._v("Means of Identification")])],1)])])])],1),t._v(" "),l("div",{staticClass:"flex-grow px-10 xl:px-0"},[l("SettingsTable",{attrs:{head_data:t.table_head_data}},[l("template",{slot:"head"},[l("div",{staticClass:"flex items-center justify-between pb-6 xl:py-10"},[l("h3",{staticClass:"text-xl font-medium text-primary-900"},[t._v("Marital Status")]),t._v(" "),l("div",{staticClass:"flex"},[l("PrimaryButton",{attrs:{onClick:t.toggleAddFunc,title:"Add Marital Status",type:"solid"}})],1)]),t._v(" "),l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("input",{staticClass:"h-10 w-96 focus:outline-none rounded-md border text-sm px-4 bg-transparent",attrs:{type:"search",placeholder:"search....",name:"",id:""}})]),t._v(" "),l("div",{staticClass:"flex items-center"},[l("span",{staticClass:"text-xs text-tertiary-500 mr-4 "},[t._v("Show entries")]),t._v(" "),l("select",{staticClass:"focus:outline-none w-16 h-10 border px-2 rounded-md bg-transparent",attrs:{name:"",id:""}},[l("option",{attrs:{selected:"",value:"10"}},[t._v("10")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("20")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("30")])])])])]),t._v(" "),t._l(t.marital_statuses,(function(e){return l("tr",{staticClass:"hover:bg-primary-100 group "},[l("td",{staticClass:"py-5 px-4"},[t._v(" "+t._s(e.name)+" ")]),t._v(" "),l("td",{staticClass:"py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end"},[l("div",{staticClass:"flex items-center"},[l("button",{staticClass:"flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100",on:{click:function(r){return t.toggleEditFunc(e.name)}}},[l("img",{attrs:{src:r(302),alt:"",srcset:""}}),t._v(" "),l("p",{staticClass:"text-xs font-normal pl-1 text-primary-500"},[t._v("Edit")])]),t._v(" "),l("button",{staticClass:"flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100",on:{click:function(r){return t.deleteMaritalStatus(e.id)}}},[l("img",{attrs:{src:r(301),alt:"",srcset:""}}),t._v(" "),l("p",{staticClass:"text-xs font-normal pl-1 text-action-danger"},[t._v("Delete")])])])])])}))],2)],1),t._v(" "),l("Sliding",{directives:[{name:"show",rawName:"v-show",value:t.toggle_add,expression:"toggle_add"}],attrs:{classes:"min-w-105 w-full"}},[l("template",{slot:"head"},[l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("h4",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v("Add Marital Status")])]),t._v(" "),l("button",{staticClass:"text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl",on:{click:t.toggleAddFunc}},[t._v("X")])])]),t._v(" "),l("div",[l("form",{staticClass:"p-6 px-10 pt-16",on:{submit:function(e){return e.preventDefault(),t.submitAdd.apply(null,arguments)}}},[l("Input",{attrs:{type:"text",id:"name",lable:"Name",place_holder:"Enter Name"},model:{value:t.marital_status.name,callback:function(e){t.$set(t.marital_status,"name",e)},expression:"marital_status.name"}}),t._v(" "),l("div",{staticClass:"col-span-2 flex items-center justify-end py-6 pt-10"},[l("FormButton",{attrs:{title:"Done",type:"solid"}}),t._v(" "),l("Button",{attrs:{onClick:t.toggleAddFunc,title:"Cancle"}})],1)],1)])],2),t._v(" "),l("Sliding",{directives:[{name:"show",rawName:"v-show",value:t.toggle_edit,expression:"toggle_edit"}],attrs:{classes:"min-w-105 w-full"}},[l("template",{slot:"head"},[l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("h4",{staticClass:"text-2xl text-primary-900 font-semibold"},[t._v("Edit Marital Status")])]),t._v(" "),l("button",{staticClass:"text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl",on:{click:t.toggleEditFunc}},[t._v("X")])])]),t._v(" "),l("div",[l("form",{staticClass:"p-6 px-10 pt-16",on:{submit:function(e){return e.preventDefault(),t.submitEdit.apply(null,arguments)}}},[l("Input",{attrs:{type:"text",id:"name",lable:"Name",place_holder:"Enter Name"},model:{value:t.marital_status.name,callback:function(e){t.$set(t.marital_status,"name",e)},expression:"marital_status.name"}}),t._v(" "),l("div",{staticClass:"col-span-2 flex items-center justify-end py-6 pt-10"},[l("FormButton",{attrs:{title:"Done",type:"solid"}}),t._v(" "),l("Button",{attrs:{onClick:t.toggleEditFunc,title:"Cancle"}})],1)],1)])],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(293).default,SubSideBar:r(298).default,PrimaryButton:r(300).default,Button:r(286).default,SettingsTable:r(299).default,FormButton:r(291).default,Button:r(286).default,Sliding:r(290).default})}}]);