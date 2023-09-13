import { mount } from '@vue/test-utils'
import DsFlag from '@/components/DsFlag.vue'

describe('DsFlag', () => {
  it('renders a title', () => {
    const wrapper = mount(DsFlag, {
      props: {
        title: 'Pay attention',
        description: 'Specs are important',
        variant: 'info'
      }
    })
    const title = wrapper.find('[data-test="title"')
    expect(title.text()).toEqual('Pay attention')
  })

  it('renders a description', () => {
    const wrapper = mount(DsFlag, {
      props: {
        title: 'Pay attention',
        description: 'Specs are important',
        variant: 'info'
      }
    })
    const description = wrapper.find('[data-test="description"')
    expect(description.text()).toEqual('Specs are important')
  })

  describe('when variant is info', () => {
    it('renders class info', () => {
      const wrapper = mount(DsFlag, {
        props: {
          title: 'Pay attention',
          description: 'Specs are important',
          variant: 'info'
        }
      })
      expect(wrapper.classes()).toEqual(['ds-flag', 'ds-flag--info'])
    })
  })

  describe('when variant is warning', () => {
    it('renders class warning', () => {
      const wrapper = mount(DsFlag, {
        props: {
          title: 'Pay attention',
          description: 'Specs are important',
          variant: 'warning'
        }
      })
      expect(wrapper.classes()).toEqual(['ds-flag', 'ds-flag--warning'])
    })
  })

  describe('when variant is error', () => {
    it('renders class error', () => {
      const wrapper = mount(DsFlag, {
        props: {
          title: 'Pay attention',
          description: 'Specs are important',
          variant: 'error'
        }
      })
      expect(wrapper.classes()).toEqual(['ds-flag', 'ds-flag--error'])
    })
  })

  describe('when variant is success', () => {
    it('renders class success', () => {
      const wrapper = mount(DsFlag, {
        props: {
          title: 'Pay attention',
          description: 'Specs are important',
          variant: 'success'
        }
      })
      expect(wrapper.classes()).toEqual(['ds-flag', 'ds-flag--success'])
    })
  })
})
