(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-454da614"],{"04d1":function(t,s,e){"use strict";var n=e("342f"),o=n.match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},"083a":function(t,s,e){"use strict";var n=e("0d51"),o=TypeError;t.exports=function(t,s){if(!delete t[s])throw new o("Cannot delete property "+n(s)+" of "+n(t))}},"222a":function(t,s,e){"use strict";e("f4ee")},"38d1":function(t,s,e){"use strict";e.r(s);e("4e82"),e("b0c0");var n=function(){var t=this,s=t._self._c;return s("section",{staticClass:"page-section"},[s("b-container",[s("HeaderPage",{attrs:{title:"Gestão de Sponsors"}}),s("b-row",{staticClass:"mb-4"},[s("b-col",{attrs:{cols:"1"}}),s("b-col",[s("router-link",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{to:{name:"addSponsor"},tag:"button"}},[s("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR SPONSOR")]),s("router-link",{staticClass:"btn btn-outline-info mr-2 mt-2",attrs:{to:{name:"admin"},tag:"button"}},[s("i",{staticClass:"fas fa-bars"}),t._v(" MENU PRINCIPAL")])],1),s("b-col",{attrs:{cols:"1"}})],1),s("b-row",[s("b-col",{attrs:{cols:"1"}}),s("b-col",[s("table",{staticClass:"table table-striped"},[s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v(" NOME "),1===t.sortType?s("i",{staticClass:"fas fa-arrow-up",on:{click:function(s){return t.sort()}}}):s("i",{staticClass:"fas fa-arrow-down",on:{click:function(s){return t.sort()}}})]),s("th",{attrs:{scope:"col"}},[t._v("TIPO")]),s("th",{attrs:{scope:"col"}},[t._v("DATA DE CRIAÇÃO")]),s("th",{attrs:{scope:"col"}},[t._v("AÇÕES")])])]),s("tbody",t._l(t.sponsors,(function(e){return s("tr",{key:e._id},[s("td",{staticClass:"pt-4"},[t._v(t._s(e.name))]),s("td",{staticClass:"pt-4"},[t._v(t._s(t.formatDate(e.registration_date)))]),s("td",[s("router-link",{staticClass:"btn btn-outline-success mr-2",attrs:{to:{name:"editSponsor",params:{sponsorId:e._id}},tag:"button"}},[s("i",{staticClass:"fas fa-edit"}),t._v(" EDITAR")]),s("button",{staticClass:"btn btn-outline-success mr-2",attrs:{type:"button"},on:{click:function(s){return t.viewSponsor(e._id)}}},[s("i",{staticClass:"fas fa-search"}),t._v(" VER")]),s("button",{staticClass:"btn btn-outline-danger mr-2",attrs:{type:"button"},on:{click:function(s){return t.removeSponsor(e._id)}}},[s("i",{staticClass:"fas fa-trash-alt"}),t._v(" REMOVER")])],1)])})),0)])]),s("b-col",{attrs:{cols:"1"}})],1)],1)],1)},o=[],a=e("5530"),r=(e("7db0"),e("d3b7"),e("99af"),e("a4d3"),e("e01a"),e("a6c0")),i=e("e9c6"),c=e("2f62"),u={name:"ManageSponsors",components:{HeaderPage:i["a"]},data:function(){return{sponsors:[],sortType:1}},computed:Object(a["a"])(Object(a["a"])({},Object(c["b"])(["getSponsorLevelByPoints"])),Object(c["b"])("sponsor",["getSponsors","getMessage"])),methods:{fetchSponsors:function(){var t=this;this.$store.dispatch("sponsor/".concat(r["c"])).then((function(){t.sponsors=t.getSponsors}),(function(s){t.$alert("".concat(s.message),"Erro","error")}))},sort:function(){this.sponsors.sort(this.compareNames),this.sortType*=-1},compareNames:function(t,s){return t.name>s.name?1*this.sortType:t.name<s.name?-1*this.sortType:0},viewSponsor:function(t){var s=this.sponsors.find((function(s){return s._id===t}));this.$fire({title:s.auth.sponsorname,html:this.generateTemplate(s),imageUrl:e("0606")("./".concat(this.getSponsorLevelByPoints(s.gamification.points).avatar,".png")),imageWidth:150,imageHeight:150,imageAlt:"Imagem desconhecida"})},generateTemplate:function(t){return"\n          <h5>".concat(t.gamification.points," pontos (").concat(this.getSponsorLevelByPoints(t.gamification.points).name,")</h5>\n          <p>").concat(t.description,"</p>\n          <p>\n          <b>Nome:</b> ").concat(t.name," <br>\n          <b>Tipo de sponsor:</b> ").concat("admin"===t.type?"Administrador":"sponsor normal"," <br>\n          <b>Data de registo:</b> ").concat(this.formatDate(t.registration_date)," <br>\n          <b>Data de nascimento:</b> ").concat(this.formatDate(t.birth_date),"<br>\n          <b>Cidade:</b> ").concat(t.location.city,"<br>\n          <b>País:</b> ").concat(t.location.country,"\n          </p>\n        ")},formatDate:function(t){var s=new Date(Date.parse(t));return s.getFullYear()+"-"+(s.getMonth()+1)+"-"+s.getDate()+" "+s.getHours()+":"+s.getMinutes()+":"+s.getSeconds()},removeSponsor:function(t){var s=this;this.$confirm("Se sim, clique em OK","Deseja mesmo remover o sponsor?","warning",{confirmButtonText:"OK",cancelButtonText:"Cancelar"}).then((function(){s.$store.dispatch("sponsor/".concat(REMOVE_SPONSOR),t).then((function(){s.$alert(s.getMessage,"Sponsor removido!","success"),s.fetchSponsors()}))}),(function(){s.$alert("Remoção cancelada!","Informação","info")}))}},created:function(){this.fetchSponsors()}},l=u,f=e("2877"),d=Object(f["a"])(l,n,o,!1,null,null,null);s["default"]=d.exports},"4e82":function(t,s,e){"use strict";var n=e("23e7"),o=e("e330"),a=e("59ed"),r=e("7b0b"),i=e("07fa"),c=e("083a"),u=e("577e"),l=e("d039"),f=e("addb"),d=e("a640"),p=e("04d1"),b=e("d998"),m=e("2d00"),h=e("512c"),v=[],g=o(v.sort),C=o(v.push),_=l((function(){v.sort(void 0)})),S=l((function(){v.sort(null)})),w=d("sort"),y=!l((function(){if(m)return m<70;if(!(p&&p>3)){if(b)return!0;if(h)return h<603;var t,s,e,n,o="";for(t=65;t<76;t++){switch(s=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(n=0;n<47;n++)v.push({k:s+n,v:e})}for(v.sort((function(t,s){return s.v-t.v})),n=0;n<v.length;n++)s=v[n].k.charAt(0),o.charAt(o.length-1)!==s&&(o+=s);return"DGBEFHACIJK"!==o}})),O=_||!S||!w||!y,k=function(t){return function(s,e){return void 0===e?-1:void 0===s?1:void 0!==t?+t(s,e)||0:u(s)>u(e)?1:-1}};n({target:"Array",proto:!0,forced:O},{sort:function(t){void 0!==t&&a(t);var s=r(this);if(y)return void 0===t?g(s):g(s,t);var e,n,o=[],u=i(s);for(n=0;n<u;n++)n in s&&C(o,s[n]);f(o,k(t)),e=i(o),n=0;while(n<e)s[n]=o[n++];while(n<u)c(s,n++);return s}})},"512c":function(t,s,e){"use strict";var n=e("342f"),o=n.match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},addb:function(t,s,e){"use strict";var n=e("4dae"),o=Math.floor,a=function(t,s){var e=t.length,c=o(e/2);return e<8?r(t,s):i(t,a(n(t,0,c),s),a(n(t,c),s),s)},r=function(t,s){var e,n,o=t.length,a=1;while(a<o){n=a,e=t[a];while(n&&s(t[n-1],e)>0)t[n]=t[--n];n!==a++&&(t[n]=e)}return t},i=function(t,s,e,n){var o=s.length,a=e.length,r=0,i=0;while(r<o||i<a)t[r+i]=r<o&&i<a?n(s[r],e[i])<=0?s[r++]:e[i++]:r<o?s[r++]:e[i++];return t};t.exports=a},d998:function(t,s,e){"use strict";var n=e("342f");t.exports=/MSIE|Trident/.test(n)},e9c6:function(t,s,e){"use strict";var n=function(){var t=this,s=t._self._c;return s("b-container",[s("b-row",{staticClass:"text-center"},[s("b-col",[s("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),s("b-row",{staticClass:"text-center"},[s("b-col",[s("div",{staticClass:"divider-custom"},[s("div",{staticClass:"divider-custom-line"}),s("div",{staticClass:"divider-custom-icon"},[s("i",{staticClass:"fas fa-star"})]),s("div",{staticClass:"divider-custom-line"})])])],1)],1)},o=[],a={name:"HeaderPage",props:["title"]},r=a,i=(e("222a"),e("2877")),c=Object(i["a"])(r,n,o,!1,null,"4b0c4b4e",null);s["a"]=c.exports},f4ee:function(t,s,e){}}]);
//# sourceMappingURL=chunk-454da614.4a59390b.js.map