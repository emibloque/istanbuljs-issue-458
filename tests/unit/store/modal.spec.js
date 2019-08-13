import { modal } from '../../../src/store/modules/modal'

it('mutations', async () => {
  const state = { component: {} }
  modal.mutations.setModalComponent(state, { name: 'name' })
  expect(state).toMatchInlineSnapshot(`
Object {
  "component": Object {
    "name": "name",
  },
}
`)
})
