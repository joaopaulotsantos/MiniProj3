(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8fc6f5d4"],{"00b4":function(t,e,n){"use strict";n("ac1f");var r=n("23e7"),a=n("c65b"),s=n("1626"),i=n("825a"),o=n("577e"),c=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),u=/./.test;r({target:"RegExp",proto:!0,forced:!c},{test:function(t){var e=i(this),n=o(t),r=e.exec;if(!s(r))return a(u,e,n);var c=a(r,e,n);return null!==c&&(i(c),!0)}})},"04d1":function(t,e,n){"use strict";var r=n("342f"),a=r.match(/firefox\/(\d+)/i);t.exports=!!a&&+a[1]},"083a":function(t,e,n){"use strict";var r=n("0d51"),a=TypeError;t.exports=function(t,e){if(!delete t[e])throw new a("Cannot delete property "+r(e)+" of "+r(t))}},"107c":function(t,e,n){"use strict";var r=n("d039"),a=n("da84"),s=a.RegExp;t.exports=r((function(){var t=s("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"222a":function(t,e,n){"use strict";n("f4ee")},"25f0":function(t,e,n){"use strict";var r=n("5e77").PROPER,a=n("cb2d"),s=n("825a"),i=n("577e"),o=n("d039"),c=n("90d8"),u="toString",l=RegExp.prototype,f=l[u],d=o((function(){return"/a/b"!==f.call({source:"a",flags:"b"})})),p=r&&f.name!==u;(d||p)&&a(RegExp.prototype,u,(function(){var t=s(this),e=i(t.source),n=i(c(t));return"/"+e+"/"+n}),{unsafe:!0})},"4df4":function(t,e,n){"use strict";var r=n("0366"),a=n("c65b"),s=n("7b0b"),i=n("9bdd"),o=n("e95a"),c=n("68ee"),u=n("07fa"),l=n("8418"),f=n("9a1f"),d=n("35a1"),p=Array;t.exports=function(t){var e=s(t),n=c(this),v=arguments.length,b=v>1?arguments[1]:void 0,h=void 0!==b;h&&(b=r(b,v>2?arguments[2]:void 0));var g,m,x,y,C,w,z=d(e),I=0;if(!z||this===p&&o(z))for(g=u(e),m=n?new this(g):p(g);g>I;I++)w=h?b(e[I],I):e[I],l(m,I,w);else for(y=f(e,z),C=y.next,m=n?new this:[];!(x=a(C,y)).done;I++)w=h?i(y,b,[x.value,I],!0):x.value,l(m,I,w);return m.length=I,m}},"4e82":function(t,e,n){"use strict";var r=n("23e7"),a=n("e330"),s=n("59ed"),i=n("7b0b"),o=n("07fa"),c=n("083a"),u=n("577e"),l=n("d039"),f=n("addb"),d=n("a640"),p=n("04d1"),v=n("d998"),b=n("2d00"),h=n("512c"),g=[],m=a(g.sort),x=a(g.push),y=l((function(){g.sort(void 0)})),C=l((function(){g.sort(null)})),w=d("sort"),z=!l((function(){if(b)return b<70;if(!(p&&p>3)){if(v)return!0;if(h)return h<603;var t,e,n,r,a="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:e+r,v:n})}for(g.sort((function(t,e){return e.v-t.v})),r=0;r<g.length;r++)e=g[r].k.charAt(0),a.charAt(a.length-1)!==e&&(a+=e);return"DGBEFHACIJK"!==a}})),I=y||!C||!w||!z,E=function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:u(e)>u(n)?1:-1}};r({target:"Array",proto:!0,forced:I},{sort:function(t){void 0!==t&&s(t);var e=i(this);if(z)return void 0===t?m(e):m(e,t);var n,r,a=[],u=o(e);for(r=0;r<u;r++)r in e&&x(a,e[r]);f(a,E(t)),n=o(a),r=0;while(r<n)e[r]=a[r++];while(r<u)c(e,r++);return e}})},"512c":function(t,e,n){"use strict";var r=n("342f"),a=r.match(/AppleWebKit\/(\d+)\./);t.exports=!!a&&+a[1]},"90d8":function(t,e,n){"use strict";var r=n("c65b"),a=n("1a2d"),s=n("3a9b"),i=n("ad6d"),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||a(t,"flags")||!s(o,t)?e:r(i,t)}},9263:function(t,e,n){"use strict";var r=n("c65b"),a=n("e330"),s=n("577e"),i=n("ad6d"),o=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,f=n("fce3"),d=n("107c"),p=c("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,b=v,h=a("".charAt),g=a("".indexOf),m=a("".replace),x=a("".slice),y=function(){var t=/a/,e=/b*/g;return r(v,t,"a"),r(v,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),C=o.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],z=y||w||C||f||d;z&&(b=function(t){var e,n,a,o,c,f,d,z=this,I=l(z),E=s(t),_=I.raw;if(_)return _.lastIndex=z.lastIndex,e=r(b,_,E),z.lastIndex=_.lastIndex,e;var R=I.groups,A=C&&z.sticky,k=r(i,z),O=z.source,T=0,S=E;if(A&&(k=m(k,"y",""),-1===g(k,"g")&&(k+="g"),S=x(E,z.lastIndex),z.lastIndex>0&&(!z.multiline||z.multiline&&"\n"!==h(E,z.lastIndex-1))&&(O="(?: "+O+")",S=" "+S,T++),n=new RegExp("^(?:"+O+")",k)),w&&(n=new RegExp("^"+O+"$(?!\\s)",k)),y&&(a=z.lastIndex),o=r(v,A?n:z,S),A?o?(o.input=x(o.input,T),o[0]=x(o[0],T),o.index=z.lastIndex,z.lastIndex+=o[0].length):z.lastIndex=0:y&&o&&(z.lastIndex=z.global?o.index+o[0].length:a),w&&o&&o.length>1&&r(p,o[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(o[c]=void 0)})),o&&R)for(o.groups=f=u(null),c=0;c<R.length;c++)d=R[c],f[d[0]]=o[d[1]];return o}),t.exports=b},"9bdd":function(t,e,n){"use strict";var r=n("825a"),a=n("2a62");t.exports=function(t,e,n,s){try{return s?e(r(n)[0],n[1]):e(n)}catch(i){a(t,"throw",i)}}},"9f7f":function(t,e,n){"use strict";var r=n("d039"),a=n("da84"),s=a.RegExp,i=r((function(){var t=s("a","y");return t.lastIndex=2,null!==t.exec("abcd")})),o=i||r((function(){return!s("a","y").sticky})),c=i||r((function(){var t=s("^r","gy");return t.lastIndex=2,null!==t.exec("str")}));t.exports={BROKEN_CARET:c,MISSED_STICKY:o,UNSUPPORTED_Y:i}},a630:function(t,e,n){"use strict";var r=n("23e7"),a=n("4df4"),s=n("1c7e"),i=!s((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:a})},ac1f:function(t,e,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},addb:function(t,e,n){"use strict";var r=n("4dae"),a=Math.floor,s=function(t,e){var n=t.length,c=a(n/2);return n<8?i(t,e):o(t,s(r(t,0,c),e),s(r(t,c),e),e)},i=function(t,e){var n,r,a=t.length,s=1;while(s<a){r=s,n=t[s];while(r&&e(t[r-1],n)>0)t[r]=t[--r];r!==s++&&(t[r]=n)}return t},o=function(t,e,n,r){var a=e.length,s=n.length,i=0,o=0;while(i<a||o<s)t[i+o]=i<a&&o<s?r(e[i],n[o])<=0?e[i++]:n[o++]:i<a?e[i++]:n[o++];return t};t.exports=s},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("d9e2"),n("fb6a"),n("25f0"),n("b0c0"),n("a630"),n("ac1f"),n("00b4");function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}function s(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=a(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,s=function(){};return{s:s,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(c)throw i}}}}},d998:function(t,e,n){"use strict";var r=n("342f");t.exports=/MSIE|Trident/.test(r)},e9c6:function(t,e,n){"use strict";var r=function(){var t=this,e=t._self._c;return e("b-container",[e("b-row",{staticClass:"text-center"},[e("b-col",[e("h2",{staticClass:"page-section-heading mt-5"},[t._v(t._s(t.title.toUpperCase()))])])],1),e("b-row",{staticClass:"text-center"},[e("b-col",[e("div",{staticClass:"divider-custom"},[e("div",{staticClass:"divider-custom-line"}),e("div",{staticClass:"divider-custom-icon"},[e("i",{staticClass:"fas fa-star"})]),e("div",{staticClass:"divider-custom-line"})])])],1)],1)},a=[],s={name:"HeaderPage",props:["title"]},i=s,o=(n("222a"),n("2877")),c=Object(o["a"])(i,r,a,!1,null,"4b0c4b4e",null);e["a"]=c.exports},eff1:function(t,e,n){"use strict";n.r(e);n("4e82"),n("b0c0");var r=function(){var t=this,e=t._self._c;return e("section",{staticClass:"page-section"},[e("b-container",[e("HeaderPage",{attrs:{title:"Gestão de Quizzes"}}),e("b-row",{staticClass:"mb-4"},[e("b-col",{attrs:{cols:"1"}}),e("b-col",[e("router-link",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{to:{name:"addQuiz"},tag:"button"}},[e("i",{staticClass:"fas fa-plus-square"}),t._v(" ADICIONAR QUIZ ")]),e("router-link",{staticClass:"btn btn-outline-info mr-2 mt-2",attrs:{to:{name:"admin"},tag:"button"}},[e("i",{staticClass:"fas fa-bars"}),t._v(" MENU PRINCIPAL ")])],1),e("b-col",{attrs:{cols:"1"}})],1),e("b-row",[e("b-col",{attrs:{cols:"1"}}),e("b-col",[e("table",{staticClass:"table table-striped"},[e("thead",{staticClass:"thead-dark"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(" NOME "),1===t.sortType?e("i",{staticClass:"fas fa-arrow-up",on:{click:function(e){return t.sort()}}}):e("i",{staticClass:"fas fa-arrow-down",on:{click:function(e){return t.sort()}}})]),e("th",{attrs:{scope:"col"}},[t._v("NÍVEL")]),e("th",{attrs:{scope:"col"}},[t._v("PONTOS")]),e("th",{attrs:{scope:"col"}},[t._v("AÇÕES")])])]),e("tbody",t._l(t.quizzes,(function(n){return e("tr",{key:n._id},[e("td",{staticClass:"pt-4"},[t._v(t._s(n.name))]),e("td",{staticClass:"pt-4"},[t._v(t._s(n.level))]),e("td",{staticClass:"pt-4"},[t._v(t._s(n.points))]),e("td",[e("router-link",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{to:{name:"editQuiz",params:{quizId:n._id}},tag:"button"}},[e("i",{staticClass:"fas fa-edit"}),t._v(" EDITAR ")]),e("button",{staticClass:"btn btn-outline-success mr-2 mt-2",attrs:{type:"button"},on:{click:function(e){return t.viewQuiz(n._id)}}},[e("i",{staticClass:"fas fa-search"}),t._v(" VER ")]),e("button",{staticClass:"btn btn-outline-danger mr-2 mt-2",attrs:{type:"button"},on:{click:function(e){return t.removeQuiz(n._id)}}},[e("i",{staticClass:"fas fa-trash-alt"}),t._v(" REMOVER ")])],1)])})),0)])]),e("b-col",{attrs:{cols:"1"}})],1)],1)],1)},a=[],s=n("b85c"),i=n("5530"),o=(n("7db0"),n("d3b7"),n("99af"),n("10f5")),c=n("2f62"),u=n("e9c6"),l={name:"ListQuizzes",components:{HeaderPage:u["a"]},data:function(){return{quizzes:[],sortType:1}},computed:Object(i["a"])({},Object(c["b"])("quiz",["getQuizzes","getMessage"])),methods:{fetchQuizzes:function(){var t=this;this.$store.dispatch("quiz/".concat(o["c"])).then((function(){t.quizzes=t.getQuizzes}),(function(e){t.$alert("".concat(e.message),"Erro","error")}))},sort:function(){this.quizzes.sort(this.compareNames),this.sortType*=-1},compareNames:function(t,e){return t.name>e.name?1*this.sortType:t.name<e.name?-1*this.sortType:0},viewQuiz:function(t){var e=this.quizzes.find((function(e){return e._id===t}));this.$fire({title:e.name,html:this.generateTemplate(e)})},generateTemplate:function(t){var e,n="\n          <p><b>Nível</b> ".concat(t.level,"<br>(").concat(t.points," pontos)</p>\n          <p><b>Lista de questões:</b></p>          \n      "),r=Object(s["a"])(t.questions);try{for(r.s();!(e=r.n()).done;){var a=e.value;n+="<p>".concat(a.question,"</p>")}}catch(i){r.e(i)}finally{r.f()}return n},removeQuiz:function(t){var e=this;this.$confirm("Se sim, clique em OK","Deseja mesmo remover a questão?","warning",{confirmButtonText:"OK",cancelButtonText:"Cancelar"}).then((function(){e.$store.dispatch("quiz/".concat(o["d"]),t).then((function(){e.$alert(e.getMessage,"Questão removida!","success"),e.fetchQuizzes()}))}),(function(){e.$alert("Remoção cancelada!","Informação","info")}))}},created:function(){this.fetchQuizzes()}},f=l,d=n("2877"),p=Object(d["a"])(f,r,a,!1,null,null,null);e["default"]=p.exports},f4ee:function(t,e,n){},fce3:function(t,e,n){"use strict";var r=n("d039"),a=n("da84"),s=a.RegExp;t.exports=r((function(){var t=s(".","s");return!(t.dotAll&&t.test("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-8fc6f5d4.3e322db9.js.map