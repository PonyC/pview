<template>
  <div :class="classes">
    <slot>按钮</slot>
  </div>
</template>

<script>
  export default {
    name:'PButton',
    props:{
      type:{
        type:String,
        default:'default',
        validator: (val) =>{
          const map = ['default','primary']
          return map.includes(val) ? val:'primary'
        }
      },
      size:{
        type:String,
        default:'normal',
        validator:(val)=>{
          const map = ['small','normal','large']
          return map.includes(val) ? val:'normal'
        }
      }
    },
    data(){
      return{
        
      }
    },
    computed:{
      classes(){
        return {
          'p-button':true,
          [this.type]:true,
          [this.size]:true
        }
      }
    }
  }
</script>

<style scoped>
.p-button{
  display: inline-flex;
  border-radius: 4px;
  padding: 8px 16px;
  font-size:16px;
}
.p-button.default{
  background: #eee;
  border:1px solid #eee;
}
.p-button.primary{
  background: dodgerblue;
  border:1px solid dodgerblue;
  color:#fff;
}
.small{
  font-size:14px;
}
.large{
  font-size:18px;
  padding: 16px 32px;
}
</style>