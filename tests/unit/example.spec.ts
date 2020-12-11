import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import i18n from '@/i18n'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      global: {
        plugins: [i18n]
      },
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
