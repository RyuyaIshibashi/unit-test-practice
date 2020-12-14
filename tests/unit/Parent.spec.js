import { mount } from "@vue/test-utils"
import '@testing-library/jest-dom'
import Parent from "@/components/Parent.vue"
import Child from "@/components/Child.vue"

describe("Parent", () => {
  it("spanをレンダーしない", () => {
    const wrapper = mount(Parent)

    expect(wrapper.find("span").element).not.toBeVisible()
  })

  it("spanをレンダーする", () => {
    const wrapper = mount(Parent, {
      data() {
        return { showSpan: true }
      }
    })

    expect(wrapper.find("span").element).toBeVisible()
  })

  it("Childコンポーネントをレンダーしない", () => {
    const wrapper = mount(Parent)

    expect(wrapper.findComponent(Child).exists()).toBe(false)
  })

  it("Childコンポーネントをレンダーする", () => {
    const wrapper = mount(Parent, {
      data() {
        return { showChild: true }
      }
    })

    expect(wrapper.findComponent({ name: "Child" }).exists()).toBe(true)
  })
})
