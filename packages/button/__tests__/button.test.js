import pButton from '../src/button.vue'
import { mount } from '@vue/test-utils'

describe('pButton',()=>{
  test('isButton',()=>{
    const wrapper = mount(pButton,{
      propsData:{
        type:'primary',
        size:'normal'
      }
    })
    expect(wrapper.html()).toContain('class="p-button primary normal"')
  })
})