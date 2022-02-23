import {createElement} from 'lwc'
import MyWireComponent from 'c/myWireComponent'
import getContactList from '@salesforce/apex/ContactController.getContactList'
import {registerApexTestWireAdapter} from '@salesforce/sfdx-lwc-jest'

const mockContactList = require('./data/contactList.json')
const mockContactListNoRecord = require('./data/contactListNoRecord.json')
const getContactListAdapter = registerApexTestWireAdapter(getContactList)
describe('c-my-wire-component test suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-wire-component',{
            is:MyWireComponent
        })
        document.body.appendChild(element)

    })
    afterEach(()=>{
        jest.clearAllMocks()
    })
    it('Renders three records',()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.emit(mockContactList)
        return Promise.resolve().then(()=>{
            const pArray = Array.from(element.shadowRoot.querySelectorAll('p'))
            expect(pArray.length).toBe(mockContactList.length)
            expect(pArray[0].textContent).toBe(mockContactList[0].Name)
        })
    })

    it('Renders when there are no records',()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.emit(mockContactListNoRecord)
        return Promise.resolve().then(()=>{
            const pArray = Array.from(element.shadowRoot.querySelectorAll('p'))
            expect(pArray.length).toBe(mockContactListNoRecord.length)
        })
    })

    it('Getting an error from @wire',()=>{
        const element = document.querySelector('c-my-wire-component')
        getContactListAdapter.error()
        return Promise.resolve().then(()=>{
            const errElem = element.shadowRoot.querySelector('.error')
            expect(errElem.textContent).not.toBeNull()
        })
    })


})