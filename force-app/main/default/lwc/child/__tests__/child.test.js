import {createElement} from 'lwc'
import Child from 'c/child'
const USER_DATA = {
    Name:'Nihal',
    Id:'1'
}
const MSG = 'No User Data Available.'
describe('c-child test suite',()=>{
    it('Renders name correctly that belongs to a public property that is userDetail',()=>{
        //const element = document.querySelector('c-child')
        //user detail in chaild html wont come from parent so we have to provide it here only
        //element.userDetail = USER_DATA  (this has to be before appending the child)
        const element = createElement('c-child',{
            is:Child
        })
        element.userDetail = USER_DATA
        document.body.appendChild(element)
        const divElem = element.shadowRoot.querySelector('div.uname')
        expect(divElem.textContent).toBe(USER_DATA.Name)
    })

    it('Renders when there is no details available',()=>{
        const element = createElement('c-child',{
            is:Child
        })
        document.body.appendChild(element)
        const pElem = element.shadowRoot.querySelector('.yo')
        expect(MSG).toBe(pElem.textContent) 
    })


})