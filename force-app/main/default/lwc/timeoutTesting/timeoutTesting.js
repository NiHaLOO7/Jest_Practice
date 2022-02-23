import { LightningElement } from 'lwc';

export default class TimeoutTesting extends LightningElement {
    reload(){
        setTimeout(() => {
            window.location.reload();
        }, 800);
    } 
}