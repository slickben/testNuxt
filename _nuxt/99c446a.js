(window.webpackJsonp=window.webpackJsonp||[]).push([[68,26,35,37],{289:function(t,e,r){"use strict";r.r(e);var l=r(17),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex items-center justify-between"},[r("div",[t._t("filter")],2),t._v(" "),r("div",{staticClass:"flex items-center"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},291:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"w-28 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600",attrs:{type:"submit"}},[t._v(t._s(t.title))]):r("button",{staticClass:"w-28 h-10 text-primary-400 text-xs flex items-center justify-center rounded-xl  focus:outline-none border-0 hover:bg-primary-100",attrs:{type:"submit"}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},293:function(t,e,r){"use strict";r.r(e);var l={props:{name:{String:String,required:!0},link:{String:String,required:!0},toggleNav:{String:String,required:!0}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"text-tertiary-500 mb-2"},[r("nuxt-link",{staticClass:"hover:bg-primary-100 pl-5 inline-flex items-center py-4 pb-3  text-sm transition duration-500 ease-in-out transform w-full",attrs:{to:t.link,href:"#"}},[t._t("default"),t._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:t.toggleNav,expression:"toggleNav"}],staticClass:"ml-4"},[t._v(t._s(t.name))])],2)],1)}),[],!1,null,null,null);e.default=component.exports},298:function(t,e,r){"use strict";r.r(e);var l={props:{title:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-full overflow-y-auto"},[r("h2",{staticClass:"pl-8 pt-5 xl:p-5 text-lg xl:text-2xl text-primary-900 font-semibold"},[t._v(t._s(t.title))]),t._v(" "),t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},299:function(t,e,r){"use strict";r.r(e);var l={props:{head_data:Array,classes:String}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto "},[r("div",{staticClass:"overflow-hidden",class:t.classes},[r("div",{staticClass:"py-4 text-sm text-tertiary-600"},[t._t("head")],2),t._v(" "),r("div",{staticClass:"relative w-full pt-14 bg-primary-100 text-tertiary-800"},[r("div",{staticClass:"max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white"},[r("table",{staticClass:"min-w-full bg-primary-100"},[r("thead",{staticClass:"text-sm text-tertiary-800"},[r("tr",t._l(t.head_data,(function(e){return r("th",{staticClass:"text-left px-5 text-sm font-normal h-0 py-0 border-0"},[r("div",{staticClass:"py-4 text-tertiary-500"},[t._v(" "+t._s(e)+"  ")])])})),0)]),t._v(" "),r("tbody",{staticClass:"bg-white text-sm text-tertiary-500 font-normalz relative"},[t._t("default")],2)])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Table:r(287).default})},300:function(t,e,r){"use strict";r.r(e);var l={props:{type:String,title:String,onClick:{type:Function}}},n=r(17),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return"solid"===t.type?r("button",{staticClass:"w-28 h-10 text-white text-xs flex items-center justify-center rounded-md bg-primary-400 focus:outline-none border border-primary-400 mr-4 hover:bg-primary-600 font-medium",on:{click:t.onClick}},[t._v(t._s(t.title))]):r("button",{staticClass:"w-28 h-10 text-primary-500 text-xs flex items-center justify-center rounded-md hover:text-primary-700 focus:outline-none hover:bg-primary-200 border border-primary-400 font-medium",on:{click:t.onClick}},[t._v(" "+t._s(t.title)+" ")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:r(286).default})},302:function(t,e,r){t.exports=r.p+"img/edit.30451f5.svg"},382:function(t,e,r){"use strict";r.r(e);r(45),r(26),r(28),r(55),r(27),r(56);var l=r(1),n=r(29),o=(r(9),r(15),r(39),r(298)),c=r(299),d=r(289),m=r(300),v=r(286),x=r(291),f=r(292),h=r(343),y=r(309),_=r(294),C=r(54);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={components:{SubSideBar:o.default,SettingsTable:c.default,TableFilter:d.default,PrimaryButton:m.default,DocumentModal:h.default,Tabs:_.default,Input:f.default,Button:v.default,FormButton:x.default,Icon:y.default},data:function(){return{table_head_data:["Name","Status",""],toggle_add:!1,toggle_edit:!1,category:{name:""},selected_id:""}},methods:k(k({},Object(C.b)({addCategory:"settings/vehicle_manager/addCategory",deleteCategory:"settings/vehicle_manager/deleteCategory",editCategory:"settings/vehicle_manager/editCategory"})),{},{toggleAddFunc:function(){this.toggle_add=!this.toggle_add,this.category.name=""},toggleEditFunc:function(t){var e=this;this.toggle_edit=!this.toggle_edit,this.categories.map((function(r){r.name===t&&(e.category.name=r.name,e.selected_id=r.id)}))},submitAdd:function(){this.addCategory(this.category)},submitEdit:function(){this.editCategory({category:this.category,id:this.selected_id})}}),computed:Object(C.d)({categories:function(t){return t.settings.vehicle_manager.categories},isloading:function(t){return t.isloading}}),fetch:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=t.store).commit("updatedLoading"),e.next=4,r.dispatch("settings/vehicle_manager/getCategories");case 4:r.commit("updatedLoading");case 5:case"end":return e.stop()}}),e)})))()}},O=r(17),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex h-full xl:mr-24"},[l("div",{staticClass:"flex-none xl:w-72 bg-white h-full sidebar-shadow"},[l("SubSideBar",{attrs:{title:"Vehicle Manager"}},[l("nav",{staticClass:"pt-3"},[l("ul",{staticClass:" text-tertiary-500"},[l("li",{staticClass:"w-full border-b hover:border-transparent"},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/category"}},[t._v("Registration Category")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/type"}},[t._v("Vehicle Type")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/make"}},[t._v("Vehicle Makes")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/model"}},[t._v("Models")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/year"}},[t._v("Year of Manufacture")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/engine"}},[t._v("Engine Capacity")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/fuel"}},[t._v("Fuel Type")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/hackney-codes"}},[t._v("Hackney Codes")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/commercial-seat-code"}},[t._v("Commercial Seat Code")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/document"}},[t._v("Vehicle Document")])],1),t._v(" "),l("li",{staticClass:"w-full border-b hover:border-transparent "},[l("nuxt-link",{staticClass:"py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm",attrs:{to:"/settings/vehicle-manager/Charges"}},[t._v(" Charges")])],1)])])])],1),t._v(" "),l("div",{staticClass:"flex-grow px-10 xl:px-0"},[l("SettingsTable",{attrs:{head_data:t.table_head_data}},[l("template",{slot:"head"},[l("div",{staticClass:"flex items-center justify-between pb-6 xl:py-10"},[l("h3",{staticClass:"text-xl font-medium text-primary-900"},[t._v("Vehicle Document")]),t._v(" "),l("div",{staticClass:"flex"},[l("PrimaryButton",{attrs:{onClick:t.toggleAddFunc,title:"Add Document",type:"solid"}})],1)]),t._v(" "),l("div",{staticClass:"flex items-center justify-between"},[l("div",[l("input",{staticClass:"h-10 w-96 focus:outline-none rounded-md border text-sm px-4 bg-transparent",attrs:{type:"search",placeholder:"search....",name:"",id:""}})]),t._v(" "),l("div",{staticClass:"flex items-center"},[l("span",{staticClass:"text-xs text-tertiary-500 mr-4 "},[t._v("Show entries")]),t._v(" "),l("select",{staticClass:"focus:outline-none w-16 h-10 border px-2 rounded-md bg-transparent",attrs:{name:"",id:""}},[l("option",{attrs:{selected:"",value:"10"}},[t._v("10")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("20")]),t._v(" "),l("option",{attrs:{value:"10"}},[t._v("30")])])])])]),t._v(" "),l("tr",{staticClass:"hover:bg-primary-100 group "},[l("td",{staticClass:"py-5 px-4"},[t._v(" Road Worthiness ")]),t._v(" "),l("td",{staticClass:"py-5 px-4"},[l("button",{staticClass:"flex items-center focus:outline-none pr-2 text-primary-500"},[l("Icon",{attrs:{type:"status"}}),t._v(" "),l("p",{staticClass:"text-xs font-normal pl-1"},[t._v("Enable")])],1)]),t._v(" "),l("td",{staticClass:"py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end"},[l("div",{staticClass:"flex items-center"},[l("button",{staticClass:"flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100"},[l("img",{attrs:{src:r(302),alt:"",srcset:""}}),t._v(" "),l("p",{staticClass:"text-xs font-normal pl-1 text-primary-500"},[t._v("Edit")])]),t._v(" "),l("button",{staticClass:"flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100"},[l("img",{attrs:{src:r(301),alt:"",srcset:""}}),t._v(" "),l("p",{staticClass:"text-xs font-normal pl-1 text-action-danger"},[t._v("Delete")])])])])])],2)],1),t._v(" "),l("DocumentModal",{directives:[{name:"show",rawName:"v-show",value:t.toggle_add,expression:"toggle_add"}]})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Nav:r(293).default,SubSideBar:r(298).default,PrimaryButton:r(300).default,Button:r(286).default,SettingsTable:r(299).default,DocumentModal:r(343).default})}}]);