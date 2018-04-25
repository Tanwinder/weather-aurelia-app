import {Customer} from './customer';

export class App {
    constructor(){
        this.heading = "Customer Manager";
        this.customers = this.getCustomerFromStorage();
        
        this.customerName = '';
        this.customerEmail = '';
        this.customerPhone = '';
    }

    getCustomerFromStorage(){
        let customers;
        if(localStorage.getItem('customers') === null){
            customers = [];
        } else {
            customers = JSON.parse(localStorage.getItem('customers'));
        }
        return customers;
    }

    addCustomer(){
        if(this.customerName && this.customerEmail && this.customerPhone){
            this.customers.push(new Customer(this.customerName, this.customerEmail,this.customerPhone));
        }

        //store in local storage
        this.storeCustomers(this.customerName, this.customerEmail,this.customerPhone);

        //clear customer
        this.customerName = '';
        this.customerEmail = '';
        this.customerPhone = '';
    }

    storeCustomers(name,email,phone){
        let customers;
        let customerObj = {
            name:name,
            email:email,
            phone:phone
        };
        if(localStorage.getItem('customers') === null){
            customers = [];
        } else {
            customers = JSON.parse(localStorage.getItem('customers'));
        }
        customers.push(customerObj);
        localStorage.setItem('customers',JSON.stringify(customers));
    }

    removeCustomer(customer){
        let index = this.customers.indexOf(customer);
        if(index !== -1){
            this.customers.splice(index,1);
        }
        this.removeFromStorage(index);
    }

    removeFromStorage(index){
        let customers = JSON.parse(localStorage.getItem('customers'));
        customers.splice(index,1);
        localStorage.setItem('customers',JSON.stringify(customers));
    }
}