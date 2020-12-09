import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"
import flushPromises from "flush-promises"

let url = ""
let data = ""

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url
      data = _data
      resolve()
    })
  }
}


describe("FormSubmitter", () => {
  it("フォームを更新するとお知らせを表示", async () => {
    const wrapper = shallowMount(FormSubmitter)

    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")

    await wrapper.vm.$nextTick()

    expect(wrapper.find(".message").text())
      .toBe("aliceさん、お問い合わせ、ありがとうございます。")
  })

  it("フォームを更新するとお知らせを表示（非同期）", async() => {
    const wrapper = shallowMount(FormSubmitter, {
      data() {
        return {
          asyncTest: true
        }
      },
      mocks: {
        $http: mockHttp
      }
    })

    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")

    await flushPromises()

    expect(wrapper.find(".message").text())
      .toBe("aliceさん、お問い合わせ、ありがとうございます。")

    expect(url).toBe("/api/v1/register")
    expect(data).toEqual({ username: "alice"})
  })
})
