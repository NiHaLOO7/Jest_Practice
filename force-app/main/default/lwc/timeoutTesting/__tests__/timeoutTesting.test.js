import {createElement} from 'lwc'
import TimeoutTesting from 'c/timeoutTesting'

describe("Timeout testing",()=>{

    beforeAll(() => {
        jest.useFakeTimers();
        Object.defineProperty(window, 'location', {
          configurable: true,
          value: { reload: jest.fn() },
        });
      });
    
      afterAll(() => {
        jest.useRealTimers();
        Object.defineProperty(window, 'location', { configurable: true, value: location });
      });

    // function flushPromises(){
    //     return new promise((resolve) => setImmediate(resolve));
    // }
    test("c-timeout-testing on click of the button", ()=>{
        const element = createElement('c-timeout-testing',{
            is:TimeoutTesting
        });
        document.body.appendChild(element);
        const reloadBtn = element.shadowRoot.querySelector("lightning-button");
        reloadBtn.click();
        return Promise.resolve().then(()=>{
            jest.runAllTimers();
            expect(window.location.reload).toHaveBeenCalled();
        })
    })
})