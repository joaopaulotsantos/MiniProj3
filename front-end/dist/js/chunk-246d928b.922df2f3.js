(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-246d928b"],{"222a":function(t,e,o){"use strict";o("f4ee")},d81d:function(t,e,o){"use strict";var a=o("23e7"),s=o("b727").map,r=o("1dde"),i=r("map");a({target:"Array",proto:!0,forced:!i},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},e9c6:function(t,e,o){"use strict";var a=function(){var t=this,e=t._self._c;return e("b-container",[e("b-row",{staticClass:"text-center"},[e("b-col",[e("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),e("b-row",{staticClass:"text-center"},[e("b-col",[e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])])],1)],1)},s=[],r={name:"HeaderPage",props:["title"]},i=r,n=(o("222a"),o("2877")),c=Object(n["a"])(i,a,s,!1,null,"4b0c4b4e",null);e["a"]=c.exports},f4ee:function(t,e,o){},ff1b:function(t,e,o){"use strict";o.r(e);o("b0c0"),o("d81d"),o("4de4"),o("d3b7"),o("a4d3"),o("e01a");var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-section"},[e("b-container",[e("HeaderPage",{attrs:{title:"Adicionar Utilizador"}}),e("b-row",[e("b-col",{attrs:{cols:"2"}}),e("b-col",{attrs:{cols:"8"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.add.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtName",placeholder:"escreve nome",required:""},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],staticClass:"form-control form-control-lg",attrs:{id:"sltType",required:""},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?o:o[0]}}},[e("option",{attrs:{value:""}},[t._v("-- SELECIONA TIPO --")]),e("option",{attrs:{value:"admin"}},[t._v("ADMINISTRADOR")]),e("option",{attrs:{value:"user"}},[t._v("UTILIZADOR NORMAL")])])]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.birth_date,expression:"birth_date"}],staticClass:"form-control form-control-lg",attrs:{type:"text",onmouseenter:"(this.type='date')",onmouseleave:"(this.type='text')",id:"txtBirthDate",placeholder:"escreve data de nascimento",required:""},domProps:{value:t.birth_date},on:{input:function(e){e.target.composing||(t.birth_date=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control form-control-lg",attrs:{id:"txtDescription",placeholder:"escreve descrição",cols:"30",rows:"10"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.location.city,expression:"location.city"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCity",placeholder:"escreve cidade"},domProps:{value:t.location.city},on:{input:function(e){e.target.composing||t.$set(t.location,"city",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.location.country,expression:"location.country"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCountry",placeholder:"escreve país"},domProps:{value:t.location.country},on:{input:function(e){e.target.composing||t.$set(t.location,"country",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gamification.points,expression:"gamification.points"}],staticClass:"form-control form-control-lg",attrs:{type:"text",min:"0",onmouseenter:"(this.type='number')",onmouseleave:"(this.type='text')",id:"txtPoints",placeholder:"escreve pontos"},domProps:{value:t.gamification.points},on:{input:function(e){e.target.composing||t.$set(t.gamification,"points",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.gamification.quiz,expression:"gamification.quiz"}],staticClass:"form-control form-control-lg",attrs:{type:"text",min:"0",onmouseenter:"(this.type='number')",onmouseleave:"(this.type='text')",id:"txtCountry",placeholder:"escreve último nível de quiz completo"},domProps:{value:t.gamification.quiz},on:{input:function(e){e.target.composing||t.$set(t.gamification,"quiz",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.username,expression:"auth.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",value:"ricardo.queiros@gmail.com",id:"txtEmail",placeholder:"escreve username",required:""},domProps:{value:t.auth.username},on:{input:function(e){e.target.composing||t.$set(t.auth,"username",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.auth.password,expression:"auth.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtPassword",placeholder:"escreve password",required:""},domProps:{value:t.auth.password},on:{input:function(e){e.target.composing||t.$set(t.auth,"password",e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtConfirmPassword",placeholder:"confirma password",required:""}})]),e("button",{staticClass:"btn btn-outline-success btn-lg mr-2",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR ")]),e("router-link",{staticClass:"btn btn-outline-danger btn-lg",attrs:{to:{name:"listUsers"},tag:"button"}},[e("i",{staticClass:"fas fa-window-close"}),t._v(" CANCELAR ")])],1)]),e("b-col",{attrs:{cols:"2"}})],1)],1)],1)},s=[],r=o("5530"),i=(o("14d9"),o("e680")),n=o("e9c6"),c=o("a18c"),l=o("2f62"),u={name:"AddUser",components:{HeaderPage:n["a"]},data:function(){return{location:{city:"",district:"",country:""},auth:{username:"",password:""},gamification:{points:"",quiz:""},active:!0,name:"",type:"",birth_date:"",description:""}},computed:Object(r["a"])({},Object(l["b"])("user",["getMessage"])),methods:{add:function(){var t=this;document.querySelector("#txtPassword").value!==document.querySelector("#txtConfirmPassword").value?this.$alert("Campos password não coincidem","Erro de validação do formulário","error"):this.$store.dispatch("user/".concat(i["a"]),this.$data).then((function(){t.$alert(t.getMessage,"Utilizador adicionado!","success"),c["a"].push({name:"listUsers"})}),(function(e){t.$alert("".concat(e.message),"Erro","error")}))}}},d=u,m=o("2877"),p=Object(m["a"])(d,a,s,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-246d928b.922df2f3.js.map