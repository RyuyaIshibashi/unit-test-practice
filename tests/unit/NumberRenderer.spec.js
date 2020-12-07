import { shallowMount } from "@vue/test-utils"
import NumberRenderer from "@/components/NumberRenderer.vue"

describe("NumberRenderer", () => {
  it("偶数をレンダー", () => {
    const wrapper = shallowMount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.text()).toBe("2, 4, 6, 8")
  })

  it("奇数をレンダー", () => {
    const localThis = { even: false }
    expect(NumberRenderer.computed.numbers.call(localThis)).toBe("1, 3, 5, 7, 9")
  })
})
