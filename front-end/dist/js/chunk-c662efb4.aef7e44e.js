(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c662efb4"],{"222a":function(t,o,s){"use strict";s("f4ee")},b9d9:function(t,o,s){"use strict";s.r(o);s("b0c0"),s("d81d"),s("4de4"),s("d3b7"),s("a4d3"),s("e01a");var e=function(){var t=this,o=t._self._c;return o("section",{staticClass:"page-section"},[o("b-container",[o("HeaderPage",{attrs:{title:"Editar Sponsor"}}),o("b-row",[o("b-col",{attrs:{cols:"2"}}),o("b-col",{attrs:{cols:"8"}},[o("form",{on:{submit:function(o){return o.preventDefault(),t.update.apply(null,arguments)}}},[o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.name,expression:"sponsor.name"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtName",placeholder:"escreve nome",required:""},domProps:{value:t.sponsor.name},on:{input:function(o){o.target.composing||t.$set(t.sponsor,"name",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("select",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.type,expression:"sponsor.type"}],staticClass:"form-control form-control-lg",attrs:{id:"sltType"},on:{change:function(o){var s=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){var o="_value"in t?t._value:t.value;return o}));t.$set(t.sponsor,"type",o.target.multiple?s:s[0])}}},[o("option",{attrs:{value:""}},[t._v("-- SELECIONA TIPO --")]),o("option",{attrs:{value:"admin"}},[t._v("ADMINISTRADOR")]),o("option",{attrs:{value:"sponsor"}},[t._v("SPONSOR NORMAL")])])]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.birth_date,expression:"sponsor.birth_date"}],staticClass:"form-control form-control-lg",attrs:{type:"date",onmouseenter:"(this.type='date')",onmouseleave:"(this.type='text')",id:"txtBirthDate",placeholder:"escreve data de nascimento",required:""},domProps:{value:t.sponsor.birth_date},on:{input:function(o){o.target.composing||t.$set(t.sponsor,"birth_date",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.description,expression:"sponsor.description"}],staticClass:"form-control form-control-lg",attrs:{id:"txtDescription",placeholder:"escreve descrição",cols:"30",rows:"10",required:""},domProps:{value:t.sponsor.description},on:{input:function(o){o.target.composing||t.$set(t.sponsor,"description",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.location.city,expression:"sponsor.location.city"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCity",placeholder:"escreve cidade",required:""},domProps:{value:t.sponsor.location.city},on:{input:function(o){o.target.composing||t.$set(t.sponsor.location,"city",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.location.country,expression:"sponsor.location.country"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtCountry",placeholder:"escreve país",required:""},domProps:{value:t.sponsor.location.country},on:{input:function(o){o.target.composing||t.$set(t.sponsor.location,"country",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.gamification.points,expression:"sponsor.gamification.points"}],staticClass:"form-control form-control-lg",attrs:{type:"text",min:"0",onmouseenter:"(this.type='number')",onmouseleave:"(this.type='text')",id:"txtPoints",placeholder:"escreve pontos"},domProps:{value:t.sponsor.gamification.points},on:{input:function(o){o.target.composing||t.$set(t.sponsor.gamification,"points",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.gamification.quiz,expression:"sponsor.gamification.quiz"}],staticClass:"form-control form-control-lg",attrs:{type:"text",min:"0",onmouseenter:"(this.type='number')",onmouseleave:"(this.type='text')",id:"txtCountry",placeholder:"escreve último nível de quiz completo"},domProps:{value:t.sponsor.gamification.quiz},on:{input:function(o){o.target.composing||t.$set(t.sponsor.gamification,"quiz",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.auth.sponsorname,expression:"sponsor.auth.sponsorname"}],staticClass:"form-control form-control-lg",attrs:{type:"text",id:"txtEmail",placeholder:"escreve sponsorname",required:""},domProps:{value:t.sponsor.auth.sponsorname},on:{input:function(o){o.target.composing||t.$set(t.sponsor.auth,"sponsorname",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.auth.password,expression:"sponsor.auth.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtPassword",placeholder:"escreve password",required:""},domProps:{value:t.sponsor.auth.password},on:{input:function(o){o.target.composing||t.$set(t.sponsor.auth,"password",o.target.value)}}})]),o("div",{staticClass:"form-group"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.sponsor.auth.password,expression:"sponsor.auth.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",id:"txtConfirmPassword",placeholder:"confirma password"},domProps:{value:t.sponsor.auth.password},on:{input:function(o){o.target.composing||t.$set(t.sponsor.auth,"password",o.target.value)}}})]),o("button",{staticClass:"btn btn-outline-success btn-lg mr-2",attrs:{type:"submit"}},[o("i",{staticClass:"fas fa-edit"}),t._v(" ATUALIZAR")]),o("router-link",{staticClass:"btn btn-outline-danger btn-lg",attrs:{to:{name:"listSponsors"},tag:"button"}},[o("i",{staticClass:"fas fa-window-close"}),t._v(" CANCELAR")])],1)]),o("b-col",{attrs:{cols:"2"}})],1)],1)],1)},r=[],a=s("5530"),n=(s("14d9"),s("a6c0")),i=s("e9c6"),c=s("a18c"),l=s("2f62"),p={name:"EditSponsor",components:{HeaderPage:i["a"]},data:function(){return{sponsor:{}}},computed:Object(a["a"])({},Object(l["b"])("sponsor",["getSponsorsById","getMessage"])),methods:{update:function(){var t=this;this.$store.dispatch("sponsor/".concat(n["b"]),this.$data.sponsor).then((function(){t.$alert(t.getMessage,"Sponsor atualizado!","success"),c["a"].push({name:"listSponsors"})}),(function(o){t.$alert("".concat(o.message),"Erro","error")}))}},created:function(){this.sponsor=this.getSponsorsById(this.$route.params.sponsorId)}},u=p,d=s("2877"),m=Object(d["a"])(u,e,r,!1,null,null,null);o["default"]=m.exports},d81d:function(t,o,s){"use strict";var e=s("23e7"),r=s("b727").map,a=s("1dde"),n=a("map");e({target:"Array",proto:!0,forced:!n},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e9c6:function(t,o,s){"use strict";var e=function(){var t=this,o=t._self._c;return o("b-container",[o("b-row",{staticClass:"text-center"},[o("b-col",[o("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),o("b-row",{staticClass:"text-center"},[o("b-col",[o("div",{staticClass:"divider-custom"},[o("div",{staticClass:"divider-custom-line"}),o("div",{staticClass:"divider-custom-icon"},[o("i",{staticClass:"fas fa-star"})]),o("div",{staticClass:"divider-custom-line"})])])],1)],1)},r=[],a={name:"HeaderPage",props:["title"]},n=a,i=(s("222a"),s("2877")),c=Object(i["a"])(n,e,r,!1,null,"4b0c4b4e",null);o["a"]=c.exports},f4ee:function(t,o,s){}}]);
//# sourceMappingURL=chunk-c662efb4.aef7e44e.js.map