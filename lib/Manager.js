const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        super.name = name;
        super.id = id;
        super.email = email;
        this.officeNumber = officeNumber;

        
    };

    getOfficeNumber() {
        return this.officeNumber
    };

    getRole() {
        return 'Manager';
    };
};

module.exports = Manager;