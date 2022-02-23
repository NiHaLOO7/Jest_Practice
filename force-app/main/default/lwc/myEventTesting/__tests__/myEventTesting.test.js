import {createElement} from 'lwc'
import MyEventTesting from 'c/myEventTesting'
import UserPreferencesExcludeMailAppAttachments from '@salesforce/schema/User.UserPreferencesExcludeMailAppAttachments'
describe('c-my-event-testing Test Suite', ()=>{

    beforeEach(()=>{
        const element = createElement('c-my-event-testing', {
            is:MyEventTesting
        })
        document.body.appendChild(element)
    })

    test('The default greet value should be Hello,World!', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).toBe('Hello, World!')

    })
    test('The default greet value should not be Hello,Nihal!', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const text = element.shadowRoot.querySelector('p')
        expect(text.textContent).not.toBe('Hello, Nihal!')

    })

    test('Check for the input field value', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const tex = element.shadowRoot.querySelector('lightning-input').value
        const text = element.shadowRoot.querySelector('p')
        let toCheck = 'Hello, '+ tex +'!'
        expect(text.textContent).toBe(toCheck)
    })

    test('Check for the input field value when the value changes', ()=>{
        const element = document.querySelector('c-my-event-testing')
        const tex = element.shadowRoot.querySelector('lightning-input')
        tex.value = 'Nihal'
        let toCheck = 'Hello, '+ tex.value +'!'
        tex.dispatchEvent(new CustomEvent('change'))
        const text = element.shadowRoot.querySelector('p')
        return Promise.resolve().then(()=>{
            expect(text.textContent).toBe(toCheck)
        })
    })

})