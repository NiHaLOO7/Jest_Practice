import {createElement} from 'lwc'
import HelloWorld from 'c/HelloWorld'
describe('c-hello-world test suite', ()=>{
    test('display first greeting', ()=>{
        const element = createElement('c-hello-world', {
            is:HelloWorld
        })
        document.body.appendChild(element)
        const first = element.shadowRoot.querySelector('div.first')
        expect(first.textContent).toBe('Hello, World!')
    })
    test('display Second greeting', ()=>{
        const element = createElement('c-hello-world', {
            is:HelloWorld
        })
        document.body.appendChild(element)
        const second = element.shadowRoot.querySelector('div.second')
        expect(second.textContent).toBe('My, World!')
    })

})


// eslint-disable-next-line jest/no-commented-out-tests
/* describe('SUM functionality', ()=>{
    //before run of each test case
    beforeEach(()=>{
        console.log("before")
    })

    //after run of each test case
    afterEach(()=>{
        console.log("after")
    })
    //test and it both are same...
    test("1+2 is equal to 3", ()=>{
        const num = 1+2
        expect(num).toBe(3)                     //assertion
    
    })
}) */
























