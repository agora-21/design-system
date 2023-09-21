import { mount } from '@vue/test-utils'
import DsRadio from '@/components/DsRadio.vue'

describe('DsRadio', () => {
  it('renders label', () => {
    const wrapper = mount(DsRadio, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        value: 'Luffy'
      }
    })
    const label = wrapper.find('[data-test="label"]')
    expect(label.text()).toEqual('Favorite One Piece character')
  })

  it('adds value to radio', () => {
    const wrapper = mount(DsRadio, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        value: 'Luffy'
      }
    })
    const radio = wrapper.find('[data-test="radio"]')
    expect(radio.element.value).toEqual('Luffy')
  })

  it('adds id to radio', () => {
    const wrapper = mount(DsRadio, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        value: 'Luffy'
      }
    })
    const radio = wrapper.find('[data-test="radio"]')
    expect(radio.attributes('id')).toEqual('favorite-character')
  })

  describe('when radio emits input event', () => {
    it('emits update:modelValue event', () => {
      const wrapper = mount(DsRadio, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          value: 'Luffy'
        }
      })
      const radio = wrapper.find('[data-test="radio"]')

      radio.trigger('input')

      expect(wrapper.emitted('update:modelValue')).toEqual([['Luffy']])
    })
  })
})
