import { mount } from '@vue/test-utils'
import DsInput from '@/components/DsInput.vue'

describe('DsInput', () => {
  it('renders label', () => {
    const wrapper = mount(DsInput, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        placeholder: "Who's your favorite?"
      }
    })
    const label = wrapper.find('[data-test="label"]')
    expect(label.text()).toEqual('Favorite One Piece character')
  })

  it('adds modelValue to input', () => {
    const wrapper = mount(DsInput, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        placeholder: "Who's your favorite?",
        modelValue: 'Luffy'
      }
    })
    const input = wrapper.find('[data-test="input"]')
    expect(input.element.value).toEqual('Luffy')
  })

  it('adds id to input', () => {
    const wrapper = mount(DsInput, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        placeholder: "Who's your favorite?"
      }
    })
    const input = wrapper.find('[data-test="input"]')
    expect(input.attributes('id')).toEqual('favorite-character')
  })

  it('adds placeholder to input', () => {
    const wrapper = mount(DsInput, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        placeholder: "Who's your favorite?"
      }
    })
    const input = wrapper.find('[data-test="input"]')
    expect(input.attributes('placeholder')).toEqual("Who's your favorite?")
  })

  it('renders input with default classes', () => {
    const wrapper = mount(DsInput, {
      props: {
        label: 'Favorite One Piece character',
        id: 'favorite-character',
        placeholder: "Who's your favorite?"
      }
    })
    const input = wrapper.find('[data-test="input"]')
    expect(input.classes()).toEqual(['ds-input'])
  })

  describe('when input emits input event', () => {
    it('emits update:modelValue event', () => {
      const wrapper = mount(DsInput, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          placeholder: "Who's your favorite?",
          modelValue: 'Luffy'
        }
      })
      const input = wrapper.find('[data-test="input"]')

      input.element.value = 'Ace'
      input.trigger('input')

      expect(wrapper.emitted('update:modelValue')).toEqual([['Ace']])
    })
  })

  describe('when input is disabled', () => {
    it('adds disabled to input', () => {
      const wrapper = mount(DsInput, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          placeholder: "Who's your favorite?",
          disabled: true
        }
      })
      const input = wrapper.find('[data-test="input"]')
      expect(input.element.disabled).toBeTruthy()
    })

    it('adds disabled class to input', () => {
      const wrapper = mount(DsInput, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          placeholder: "Who's your favorite?",
          disabled: true
        }
      })
      const input = wrapper.find('[data-test="input"]')
      expect(input.classes()).toContain('ds-input--disabled')
    })
  })

  describe('when input is readonly', () => {
    it('adds readonly to input', () => {
      const wrapper = mount(DsInput, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          placeholder: "Who's your favorite?",
          readOnly: true
        }
      })
      const input = wrapper.find('[data-test="input"]')
      expect(input.element.readOnly).toBeTruthy()
    })

    it('adds readonly class to input', () => {
      const wrapper = mount(DsInput, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          placeholder: "Who's your favorite?",
          readOnly: true
        }
      })
      const input = wrapper.find('[data-test="input"]')
      expect(input.classes()).toContain('ds-input--read-only')
    })
  })

  describe('when input has errors', () => {
    it('adds error class to input', () => {
      const wrapper = mount(DsInput, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          placeholder: "Who's your favorite?",
          error: 'Must exist in One Piece'
        }
      })
      const input = wrapper.find('[data-test="input"]')
      expect(input.classes()).toContain('ds-input--error')
    })

    it('renders error text', () => {
      const wrapper = mount(DsInput, {
        props: {
          label: 'Favorite One Piece character',
          id: 'favorite-character',
          placeholder: "Who's your favorite?",
          error: 'Must exist in One Piece'
        }
      })
      const error = wrapper.find('[data-test="error"]')
      expect(error.text()).toEqual('Must exist in One Piece')
    })
  })
})
