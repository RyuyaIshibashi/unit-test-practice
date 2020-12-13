import { shallowMount, mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/ComponentWithAsyncCall.vue'

describe('ParentWithAPICallChild.vue', () => {
  it('mountを用いてレンダリングし、API Callを呼び出さない', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true
      }
    })

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })

  it('sallowMountを用いてレンダリングし、API Callを呼び出さない', () => {
    const wrapper = shallowMount(ParentWithAPICallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})