(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b17cc8e"],{"083a":function(t,e,s){"use strict";var a=s("0d51"),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw new i("Cannot delete property "+a(e)+" of "+a(t))}},"222a":function(t,e,s){"use strict";s("f4ee")},"56e4":function(t,e,s){"use strict";s.r(e);s("a4d3"),s("e01a"),s("99af"),s("fb6a");var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-section"},[e("b-container",[e("HeaderPage",{attrs:{title:"Adicionar Questão"}}),e("b-row",[e("b-col",{attrs:{cols:"2"}}),e("b-col",{attrs:{cols:"8"}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.add.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.question,expression:"question"}],staticClass:"form-control",attrs:{type:"text",id:"txtName",placeholder:"escreve a questão",required:""},domProps:{value:t.question},on:{input:function(e){e.target.composing||(t.question=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{id:"txtDescription",placeholder:"escreve uma descrição",cols:"30",rows:"10",required:""},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.level,expression:"level"}],staticClass:"form-control",attrs:{type:"text",min:"1",max:"5",onmouseenter:"(this.type='number')",onmouseleave:"(this.type='text')",id:"txtLevel",placeholder:"indica o nível da questão",required:""},domProps:{value:t.level},on:{input:function(e){e.target.composing||(t.level=e.target.value)}}})]),t.answers.length?e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[e("h4",[t._v("Lista de respostas")])]),e("div",{staticClass:"col-md-2"},[e("h4",[t._v("Correta")])]),e("div",{staticClass:"col-md-3"},[e("h4",[t._v("Ações")])])])]):t._e(),t._l(t.answers,(function(s,a){return e("div",{key:s.title},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model.lazy",value:s.title,expression:"answer.title",modifiers:{lazy:!0}}],staticClass:"form-control",attrs:{type:"text",id:"txtAnswer",placeholder:t.setPlaceHolder(a+1)},domProps:{value:s.title},on:{change:function(e){return t.$set(s,"title",e.target.value)}}})]),e("div",{staticClass:"col-md-2"},[e("input",{directives:[{name:"model",rawName:"v-model",value:s.correct,expression:"answer.correct"}],staticClass:"form-control",attrs:{type:"checkbox",id:"chkAnswer"},domProps:{checked:Array.isArray(s.correct)?t._i(s.correct,null)>-1:s.correct},on:{change:function(e){var a=s.correct,i=e.target,r=!!i.checked;if(Array.isArray(a)){var o=null,n=t._i(a,o);i.checked?n<0&&t.$set(s,"correct",a.concat([o])):n>-1&&t.$set(s,"correct",a.slice(0,n).concat(a.slice(n+1)))}else t.$set(s,"correct",r)}}})]),e("div",{staticClass:"col-md-3"},[e("button",{staticClass:"btn btn-outline-danger mr-2",attrs:{type:"button"},on:{click:function(e){return t.removeAnswer(a)}}},[e("i",{staticClass:"fas fa-trash"}),t._v(" REMOVER")])])])])])})),e("button",{staticClass:"btn btn-outline-success mr-2",attrs:{type:"button"},on:{click:t.addAnswer}},[e("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR RESPOSTAS")]),e("button",{staticClass:"btn btn-outline-success mr-2",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-save"}),t._v(" GRAVAR QUESTÃO")]),e("router-link",{staticClass:"btn btn-outline-danger",attrs:{to:{name:"listQuestions"},tag:"button"}},[e("i",{staticClass:"fas fa-window-close"}),t._v(" CANCELAR")])],2)]),e("b-col",{attrs:{cols:"2"}})],1)],1),e("pre",[t._v(t._s(t.$data))])],1)},i=[],r=s("5530"),o=(s("14d9"),s("a434"),s("2d89")),n=s("a18c"),c=s("e9c6"),l=s("2f62"),u={name:"AddQuestion",components:{HeaderPage:c["a"]},data:function(){return{title:"",group:"",type:"Escolha múltipla",question:"",description:"",level:"",active:!0,answers:[]}},computed:Object(r["a"])({},Object(l["b"])("question",["getMessage"])),methods:{add:function(){var t=this;this.$store.dispatch("question/".concat(o["a"]),this.$data).then((function(){t.$alert(t.getMessage,"Questão adicionada!","success"),n["a"].push({name:"listQuestions"})}),(function(e){t.$alert("".concat(e.message),"Erro","error")}))},setPlaceHolder:function(t){return"insira a ".concat(t,"ª resposta")},addAnswer:function(){this.answers.push({title:"",description:"",correct:!1})},removeAnswer:function(t){this.answers.splice(t,1)}}},d=u,p=s("2877"),v=Object(p["a"])(d,a,i,!1,null,null,null);e["default"]=v.exports},a434:function(t,e,s){"use strict";var a=s("23e7"),i=s("7b0b"),r=s("23cb"),o=s("5926"),n=s("07fa"),c=s("3a34"),l=s("3511"),u=s("65f0"),d=s("8418"),p=s("083a"),v=s("1dde"),m=v("splice"),f=Math.max,b=Math.min;a({target:"Array",proto:!0,forced:!m},{splice:function(t,e){var s,a,v,m,h,C,g=i(this),w=n(g),x=r(t,w),y=arguments.length;for(0===y?s=a=0:1===y?(s=0,a=w-x):(s=y-2,a=b(f(o(e),0),w-x)),l(w+s-a),v=u(g,a),m=0;m<a;m++)h=x+m,h in g&&d(v,m,g[h]);if(v.length=a,s<a){for(m=x;m<w-a;m++)h=m+a,C=m+s,h in g?g[C]=g[h]:p(g,C);for(m=w;m>w-a+s;m--)p(g,m-1)}else if(s>a)for(m=w-a;m>x;m--)h=m+a-1,C=m+s-1,h in g?g[C]=g[h]:p(g,C);for(m=0;m<s;m++)g[m+x]=arguments[m+2];return c(g,w-a+s),v}})},e9c6:function(t,e,s){"use strict";var a=function(){var t=this,e=t._self._c;return e("b-container",[e("b-row",{staticClass:"text-center"},[e("b-col",[e("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),e("b-row",{staticClass:"text-center"},[e("b-col",[e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])])],1)],1)},i=[],r={name:"HeaderPage",props:["title"]},o=r,n=(s("222a"),s("2877")),c=Object(n["a"])(o,a,i,!1,null,"4b0c4b4e",null);e["a"]=c.exports},f4ee:function(t,e,s){}}]);
//# sourceMappingURL=chunk-0b17cc8e.e25de72d.js.map