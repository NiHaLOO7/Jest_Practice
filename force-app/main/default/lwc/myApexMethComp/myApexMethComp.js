import { LightningElement } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList'
export default class MyApexMethComp extends LightningElement {
    accounts
    errors
    loadAccounts(){
        getAccountList().then(result=>{
            this.accounts = result
            this.errors = null
            console.log(JSON.stringify(result))
        }).catch(error=>{
            this.errors = error
            this.accounts = null
        })
    }
}