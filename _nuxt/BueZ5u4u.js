import{s as n}from"./TVcR0KUE.js";var e={name:"BaseInput",extends:n,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var i;return(i=this.variant)!==null&&i!==void 0?i:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var i;return(i=this.fluid)!==null&&i!==void 0?i:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}};export{e as s};
