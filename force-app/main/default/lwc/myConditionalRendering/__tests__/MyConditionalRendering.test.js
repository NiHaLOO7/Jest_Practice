import {createElement} from 'lwc'
import MyConditionalRendering from 'c/myConditionalRendering'
describe('c-my-conditional-rendering suite', ()=>{
    beforeEach(()=>{
        const element = createElement('c-my-conditional-rendering', {
            is:MyConditionalRendering
        })
        document.body.appendChild(element)
    })
    it('Test When Check Box Is Unchecked', ()=>{
        const element = document.querySelector('c-my-conditional-rendering')
        const pass = element.shadowRoot.querySelector('.userInfo')
        expect(pass.textContent).toBe('My Password is ********')
    })

    it('Test When Check Box Is checked', ()=>{
        const element = document.querySelector('c-my-conditional-rendering')
        const inp = element.shadowRoot.querySelector('lightning-input')
        inp.checked = true
        inp.dispatchEvent(new CustomEvent('change'))
        return Promise.resolve().then(()=>{
            const pass = element.shadowRoot.querySelector('.userInfo')
            expect(pass.textContent).toBe('My Password is NihalJha')
        })
    })
})