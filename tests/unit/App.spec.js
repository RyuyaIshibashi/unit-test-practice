import { mount, createLocalVue } from "@vue/test-utils"
import App from "@/App.vue"
import VueRouter from "vue-router"
import NestedRoute from "@/components/NestedRoute.vue"
import routes from "@/routes.js"

const localVue = createLocalVue()
localVue.use(VueRouter)

describe("App", () => {
  it("ルーティングを用いて子コンポーネントをレンダーする", async () => {
    const router = new VueRouter({ routes })
    const wrapper = mount(App, {
      localVue,
      router
    })

    router.push("/nested-route")
    await wrapper.vm.$nextTick()

    expect(wrapper.findComponent(NestedRoute).exists()).toBe(true)
  })

  it("/nested-routeとは異なるルートを持つ", async () => {
    const router = new VueRouter({ routes, mode: 'abstract' })
    const wrapper = mount(App, { 
      localVue,
      router
    })

    expect(wrapper.findComponent(NestedRoute).exists()).toBe(false)
    // console.log(router.currentRoute)
  })
})
