class Governor {
    static name = 'Mr. Shapiro'
    static state = 'PA'
    static party = 'Democrats'
    static budgeting(){
        console.log(`${this.name} is governor of ${this.state}, develop and submit annual or biennial budgets for review and approval by the legislature.`)
    }  
    static appointingOfficials(){
        console.log('He has a power to appoint officials.')
    }
    static legislation(){
        console.log('He is responsible for implementing state laws and overseeing the operation of the state executive branch.')
    } 
}
console.log(`${Governor.name} is the governor of ${Governor.state}`)  // testing static properties
Governor.budgeting()                                                  // testing static methods
Governor.appointingOfficials()
Governor.legislation()


// inheritance
// base class

class Person {
    constructor(name, age , gender){
        this.name = name
        this.age = age
        this.gender = gender
    }
    eat(){
        console.log('')
    }
    work(){
        console.log('')
    }
    sleep(){
        console.log('')
    }
}
// child class
class Chef  extends Person{
    constructor(name, age, gender, workplace, shift){
    super(name, age, gender)   
        this.workplace = workplace
        this.shift = shift
    }
    cooking(){
        console.log(`chef ${this.name} works at ${this.workplace} for ${this.shift} shift, makes good food.`)
    }
    chopping(){
        console.log(`${this.name} likes to chop vegetables.`)
    }
    cleaning(){
        console.log(`${this.name} likes cleaning.`)
    }
}

class PostalWorkers extends Person {
    constructor(name, age, gender, role, workplace){
        super(name, age, gender)
        this.role = role
        this.workplace = workplace
    }
    distribute(){
        if(this.role === 'driver'){
        console.log(`${this.name} works as ${this.role},likes to distributes letters and parcels.`)
        }
        else console.log('not a driver')
    }
    sell(){
        if(!this.role === "driver"){
        console.log(`${this.name} at ${this.workplace} sells stamps and other postal products.`)
        }
        else console.log(`${this.name} is a ${this.role}, drivers don't sell anything.`)
    }
    collect(){
        if(!this.role === "driver"){
            console.log(`${this.name} at ${this.workplace} collects letters and parcels.`)
        }
        else console.log(`${this.name} is a ${this.role}, collecting is not his job.`)
        
    }
    


}
const chef1 = new Chef('Greg', 40, 'male', 'Panerabread', 'morning')
const chef2 = new Chef('Kalyani', 45, 'female', 'Tamrind', 'evening')
chef1.cooking()
chef2.cleaning()
console.log(chef1)
const postalworker1 = new PostalWorkers('Deb', 65, 'female', 'cashier', 'FedEX')
const postalworker2 = new PostalWorkers('Ryan', 65, 'male', 'driver', 'USPS')
postalworker1.distribute()
postalworker2.distribute()
postalworker2.collect()