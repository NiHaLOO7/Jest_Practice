import {createElement} from 'lwc'
import Looping from 'c/looping'
const ul = ['Nihal','John','Mike']
describe('c-looping suite',()=>{
    beforeEach(()=>{
        const element = createElement('c-looping',{
            is:Looping
        })
        document.body.appendChild(element)
    })
    test('Check User List Name',()=>{
        const element = document.querySelector('c-looping')
        const arrLi = element.shadowRoot.querySelectorAll('.forEachList>li')
        expect(arrLi.length).toBe(3)
    })

    test('Display user list in specific order ie check the data',()=>{
        const element = document.querySelector('c-looping')
        const arrLi = Array.from(element.shadowRoot.querySelectorAll('.forEachList>li'))
        const userList = arrLi.map(li=>li.textContent)
        expect(userList).toEqual(ul)
    })

    test('Display first and last case in the iterator loop',()=>{
        const element = document.querySelector('c-looping')
        const firstDiv = element.shadowRoot.querySelector('.iteratorList>li:first-child>div:first-child')
        const lastDiv = element.shadowRoot.querySelector('.iteratorList>li:last-child>div:last-child')
        expect(firstDiv.textContent).toBe('Start Of List')
        expect(lastDiv.textContent).toBe('End Of List')
    })
})