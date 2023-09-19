import { mount, RouterLinkStub } from '@vue/test-utils'
import DsSidebarLink from '@/components/DsSidebarLink.vue'

describe('DsSidebarLink', () => {
  it('renders router-link', () => {
    const wrapper = mount(DsSidebarLink, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: { route: { name: 'GoKart' } }
    })
    const routerLink = wrapper.findComponent(RouterLinkStub)
    expect(routerLink.exists()).toBeTruthy()
  })

  it('renders router-link with route', () => {
    const wrapper = mount(DsSidebarLink, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: { route: { name: 'GoKart' } }
    })
    const routerLink = wrapper.findComponent(RouterLinkStub)
    expect(routerLink.props('to')).toEqual({ name: 'GoKart' })
  })

  it('renders router-link with default slot', () => {
    const wrapper = mount(DsSidebarLink, {
      global: {
        stubs: {
          'router-link': RouterLinkStub
        }
      },
      props: { route: { name: 'GoKart' } },
      slots: {
        default: 'Click to go karting'
      }
    })
    const routerLink = wrapper.findComponent(RouterLinkStub)
    expect(routerLink.text()).toEqual('Click to go karting')
  })
})
