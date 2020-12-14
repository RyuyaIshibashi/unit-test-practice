import { mount } from "@vue/test-utils"
import '@testing-library/jest-dom'
import ParentWithManyChildren from "@/components/ParentWithManyChildren.vue"
import Child from "@/components/Child.vue"

it("複数のChildコンポーネントをレンダーする", () => {
  const wrapper = mount(ParentWithManyChildren)

  expect(wrapper.findAllComponents(Child).length).toBe(3)
})
