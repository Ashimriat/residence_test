import{I as t,az as u}from"./CNUPeZ-s.js";var a={name:"BaseEditableHolder",extends:t,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(e){this.d_value=e},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var i,n;this.formField=((i=this.$pcForm)===null||i===void 0||(n=i.register)===null||n===void 0?void 0:n.call(i,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var i,n;this.formField=((i=this.$pcForm)===null||i===void 0||(n=i.register)===null||n===void 0?void 0:n.call(i,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,i){var n,l;this.controlled&&(this.d_value=e,this.$emit("update:modelValue",e)),this.$emit("value-change",e),(n=(l=this.formField).onChange)===null||n===void 0||n.call(l,{originalEvent:i,value:e})}},computed:{$filled:function(){return u(this.d_value)},$invalid:function(){var e,i,n,l;return(e=(i=this.invalid)!==null&&i!==void 0?i:(n=this.$pcFormField)===null||n===void 0||(n=n.$field)===null||n===void 0?void 0:n.invalid)!==null&&e!==void 0?e:(l=this.$pcForm)===null||l===void 0||(l=l.states)===null||l===void 0||(l=l[this.$formName])===null||l===void 0?void 0:l.invalid},$formName:function(){var e;return this.name||((e=this.$formControl)===null||e===void 0?void 0:e.name)},$formControl:function(){var e;return this.formControl||((e=this.$pcFormField)===null||e===void 0?void 0:e.formControl)},$formDefaultValue:function(){var e,i,n,l;return(e=(i=this.d_value)!==null&&i!==void 0?i:(n=this.$pcFormField)===null||n===void 0?void 0:n.initialValue)!==null&&e!==void 0?e:(l=this.$pcForm)===null||l===void 0||(l=l.initialValues)===null||l===void 0?void 0:l[this.$formName]},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}};export{a as s};
