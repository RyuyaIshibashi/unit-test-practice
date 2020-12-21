import { shallowMount } from "@vue/test-utils"
import NestedRoute from "@/components/NestedRoute.vue"
import mockModule from "@/bust-cache.js"

jest.mock("@/bust-cache.js", () => ({ bustCache: jest.fn() }))

const username = "alice"
const factory = () => {
  return shallowMount(NestedRoute, {
    mocks: {
      $route: {
        params: { username }
      }
    }
  })
}

describe("NestedRoute", () => {
  it("クエリ文字列からusernameをレンダーする", () => {
    const wrapper = factory()

    expect(wrapper.find(".username").text()).toBe(username)
  })

  it("routeから離れる時にbustCacheとnextが呼ばれる", async () => {
    const wrapper = factory()
    const next = jest.fn()
    NestedRoute.beforeRouteLeave.call(wrapper.vm, undefined, undefined, next)
    await wrapper.vm.$nextTick()

    expect(mockModule.bustCache).toHaveBeenCalled()
    expect(next).toHaveBeenCalled()
  })
})
