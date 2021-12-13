import button from '../src/button.vue'
import { mount } from '@vue/test-utils'

describe('p-button',()=>{
  test('isButton',()=>{
    const wrapper = mount(button,{
      propsData:{
        type:'primary',
        size:'normal'
      }
    })
    expect(wrapper.html()).toContain('class="p-button primary normal"')
  })
})