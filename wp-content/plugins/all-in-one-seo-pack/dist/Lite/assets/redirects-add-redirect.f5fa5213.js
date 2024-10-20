import{n,V as o}from"./js/_plugin-vue2_normalizer.d86aa1f3.js";import"./js/index.5dd9aaae.js";import{h as d,m as i,s as c}from"./js/index.8eedf1b9.js";import{C as l}from"./js/Portal.18dad338.js";import{C as p}from"./js/Index.9d561265.js";import{i as m}from"./js/isEmpty.a9afd21a.js";import"./js/client.1a03de11.js";import"./js/_commonjsHelpers.10c44588.js";import"./js/translations.b7a6f669.js";import"./js/default-i18n.31663a66.js";import"./js/Caret.2b15c7cb.js";import"./js/helpers.a2b0759e.js";import"./js/constants.a33ff6d4.js";import"./js/isArrayLikeObject.5268a676.js";import"./js/portal-vue.esm.c4534d19.js";import"./js/vuex.esm.19624049.js";import"./js/Index.c4701ef0.js";import"./js/WpTable.68e67998.js";import"./js/attachments.540ad25c.js";import"./js/cleanForSlug.d330f33d.js";import"./js/html.bcbe747e.js";import"./js/JsonValues.08065e69.js";import"./js/SaveChanges.68e73792.js";import"./js/ProBadge.7aea483a.js";import"./js/External.d2f08f8f.js";import"./js/Exclamation.b2dd0993.js";import"./js/Checkbox.eb948ddb.js";import"./js/Checkmark.57e6a235.js";import"./js/Row.67f2b082.js";import"./js/Gear.c30cbc7e.js";import"./js/Slide.fe1da4fd.js";import"./js/Tooltip.e966c16d.js";import"./js/Plus.e2e13f40.js";import"./js/_getTag.e79f4b6e.js";const u={components:{CoreModalPortal:l,CoreAddRedirection:p},data(){return{urls:[],display:!1,target:null,loading:!1,strings:{modalHeader:this.$t.__("Add a Redirect",this.$td),redirectAdded:this.$t.sprintf(this.$t.__('%2$sYour redirect was added and you may edit it <a href="%1$s" target="_blank">here</a>.%3$s',this.$td),this.$aioseo.urls.aio.redirects,"<strong>","</strong>")},watchClasses:["aioseo-redirects-slug-changed","aioseo-redirects-trashed-post"]}},computed:{classSelectors(){return"."+this.watchClasses.join(", .")}},methods:{reload(){var t,r;this.display=!1;const e=(r=(t=this.target)==null?void 0:t.parentElement)==null?void 0:r.parentElement;if(e&&(e.classList.contains("components-notice__content")||e.classList.contains("notice"))){e.innerHTML="<p>"+this.strings.redirectAdded+"</p>";return}this.target.outerHTML=this.strings.redirectAdded},loadRedirect(e){this.loading=!0,this.$http.get(this.$links.restUrl("redirects/manual-redirects/"+e)).then(t=>{this.urls=t.body.redirects,this.loading=!1}).catch(t=>console.log("Redirect modal failed to load the redirect data.",t))},preloadRedirect(){const e=document.querySelector(this.classSelectors);if(e){const t=this.getElementRedirectHash(e);if(!t)return;this.loadRedirect(t)}},watchClicks(){document.body.onclick=e=>{var r;if(!((r=e.target)!=null&&r.classList))return;let t=!1;this.watchClasses.forEach(s=>{e.target.classList.contains(s)&&(t=!0)}),t&&(e.preventDefault(),this.target=e.target,this.display=!0,m(this.url)&&this.loadRedirect(this.getElementRedirectHash(this.target)))}},getElementRedirectHash(e){return new URLSearchParams(e.href).get("aioseo-manual-urls")}},async created(){const{addons:e,redirects:t}=await d(this.$http);this.$set(this.$store.state,"addons",i([...this.$store.state.addons],[...e])),this.$set(this.$store.state,"redirects",i({...this.$store.state.redirects},{...t})),this.preloadRedirect(),this.watchClicks(),this.$bus.$on("wp-core-notice-created",()=>{this.preloadRedirect()})}};var h=function(){var t=this,r=t._self._c;return t.$addons.isActive("aioseo-redirects")?r("div",{staticClass:"aioseo-redirects-add-redirect-standalone"},[t.display?r("core-modal-portal",{attrs:{classes:["aioseo-redirects","modal"]},on:{close:function(s){t.display=!1}}},[r("div",{attrs:{slot:"headerTitle"},slot:"headerTitle"},[t._v(" "+t._s(t.strings.modalHeader)+" ")]),r("div",{attrs:{slot:"body"},slot:"body"},[t.loading?t._e():r("core-add-redirection",{attrs:{urls:t.urls,target:t.urls[0].target?t.urls[0].target:"/",disableSource:!0},on:{"added-redirect":t.reload}})],1)]):t._e()],1):t._e()},_=[],f=n(u,h,_,!1,null,null,null,null);const g=f.exports,a=document.createElement("div");a.id="aioseo-redirects-add-redirect-standalone";document.body.appendChild(a);o.prototype.$aioseo=window.aioseo;new o({store:c,render:e=>e(g)}).$mount("#aioseo-redirects-add-redirect-standalone");
