import Breadcrumb from '../../../src/components/breadcrumb/Breadcrumb.vue'
import { shallowMount } from '@vue/test-utils'

describe('Breadcrumb.vue', async () => {
  let component

  beforeEach(() => {
    component = shallowMount(Breadcrumb, {})
  })

  it('has the expected html structure', () => {
    expect(component.element).toMatchSnapshot()
  })
})
