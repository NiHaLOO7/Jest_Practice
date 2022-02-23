import {createElement} from 'lwc'
import MyApexMethComp from 'c/myApexMethComp'
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
const APEX_ACCOUNTLIST_ERROR = require('./data/error.json')
const APEX_ACCOUNTLIST_SUCCESS = require('./data/accountList.json')

//syntax  ( REFERENCE --> DOCUMENTATION )
//jest.mock(ModuleName, factory, options)          [factory is a function<()=>({default:jest.fn()})> Like this]
//                                                 ModuleName is path of the apex method                                                         
//                                                 options will be in curly braces{virtual:true}



jest.mock('@salesforce/apex/AccountController.getAccountList',
()=>({
    default:jest.fn()
}),{
    virtual:true
})

describe('c-my-apex-meth-comp test suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-my-apex-meth-comp',{
            is:MyApexMethComp
        })
        document.body.appendChild(element)
    })
    it('Render account returned from imparitive apex call',()=>{
        //mockResolvedValue => to get the data in a success
        getAccountList.mockResolvedValue(APEX_ACCOUNTLIST_SUCCESS)
        const element = document.querySelector('c-my-apex-meth-comp')
        const btn = element.shadowRoot.querySelector('lightning-button')
        btn.click()
        //promise for imperative call Should work on wire too ... Will Give it a try Later
        return new Promise(setImmediate).then(()=>{
            const pTag = element.shadowRoot.querySelectorAll('.acc')
            expect(pTag.length).toBe(APEX_ACCOUNTLIST_SUCCESS.length)
            expect(pTag[0].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[0].Name)
            expect(pTag[1].textContent).toBe(APEX_ACCOUNTLIST_SUCCESS[1].Name)
        })
    })
            //FIND ANOTHER WAY TO DO FLUSH PROMISE.....

    it('Render the error',()=>{
        //mockRejectedValue => to get the data in a Error
        getAccountList.mockRejectedValue(APEX_ACCOUNTLIST_ERROR)
        const element = document.querySelector('c-my-apex-meth-comp')
        const btn = element.shadowRoot.querySelector('lightning-button')
        btn.click()
        return new Promise(setImmediate).then(()=>{
            const errTag = element.shadowRoot.querySelectorAll('.err')
            expect(errTag).not.toBeNull()
        })
    })


})