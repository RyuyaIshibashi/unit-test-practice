import { mount } from "@vue/test-utils"
import Bilingual from "@/components/Bilingual.vue"

describe("Bilingual", () => {
  it("レンダリングに成功", () => {
    const wrapper = mount(Bilingual)

    expect(wrapper.find('.hello').text()).toBe("Hello world!")

  })
})
