import { mount } from '@vue/test-utils'
import DsSideBar from '@/components/DsSideBar.vue'

describe('DsSideBar', () => {
  it('renders colors link', () => {
    const wrapper = mount(DsSideBar)
    const colors = wrapper.findComponent('[data-test="colors-link"]')
    expect(colors.props('route')).toEqual({ name: 'DocumentationColors' })
  })

  it('renders colors link', () => {
    const wrapper = mount(DsSideBar)
    const buttons = wrapper.findComponent('[data-test="buttons-link"]')
    expect(buttons.props('route')).toEqual({ name: 'DocumentationButtons' })
  })
})
