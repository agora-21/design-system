import { mount } from '@vue/test-utils'
import DsButton from '@/components/DsButton.vue'

describe('DsButton', () => {
  it('render a button', () => {
    const wrapper = mount(DsButton)
    const button = wrapper.find('[data-test="button"]')
    expect(button.exists()).toBeTruthy()
  })

  describe('when color is plum', () => {
    it('renders button with plum color', () => {
      const wrapper = mount(DsButton, { props: { color: 'plum' } })
      const button = wrapper.find('[data-test="button"]')
      expect(button.classes()).toContain('ds-button--plum')
    })
  })

  describe('when color is indigo', () => {
    it('renders button with indigo color', () => {
      const wrapper = mount(DsButton, { props: { color: 'indigo' } })
      const button = wrapper.find('[data-test="button"]')
      expect(button.classes()).toContain('ds-button--indigo')
    })
  })

  describe('when color is blue', () => {
    it('renders button with blue color', () => {
      const wrapper = mount(DsButton, { props: { color: 'blue' } })
      const button = wrapper.find('[data-test="button"]')
      expect(button.classes()).toContain('ds-button--blue')
    })
  })

  describe('when color is chocolate', () => {
    it('renders button with chocolate color', () => {
      const wrapper = mount(DsButton, { props: { color: 'chocolate' } })
      const button = wrapper.find('[data-test="button"]')
      expect(button.classes()).toContain('ds-button--chocolate')
    })
  })

  describe('when color is green', () => {
    it('renders button with green color', () => {
      const wrapper = mount(DsButton, { props: { color: 'green' } })
      const button = wrapper.find('[data-test="button"]')
      expect(button.classes()).toContain('ds-button--green')
    })
  })

  describe('when color is neutral', () => {
    it('renders button with neutral color', () => {
      const wrapper = mount(DsButton, { props: { color: 'neutral' } })
      const button = wrapper.find('[data-test="button"]')
      expect(button.classes()).toContain('ds-button--neutral')
    })
  })
})
