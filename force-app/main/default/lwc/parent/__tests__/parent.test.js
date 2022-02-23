import {createElement} from 'lwc'
import Parent from 'c/parent'
const uName = 'Nihal'
describe('c-parent test suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-parent',{
            is:Parent
        })
        document.body.appendChild(element)
    })
    test('Render child component',()=>{
        const element = document.querySelector('c-parent')
        const chil = element.shadowRoot.querySelectorAll('c-child')
        expect(chil.length).toBe(1)
    })
    it('Set user data correctly',()=>{
        const element = document.querySelector('c-parent')
        const chil = element.shadowRoot.querySelector('c-child')
        expect(chil.userDetail.Name).toBe(uName)

    })
})