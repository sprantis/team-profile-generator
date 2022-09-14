// Manager Class
// Import used instead of require() due to ESM error
import Employee from './Employee.js';

class Manager extends Employee {
    // Manager Properties
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    };

    // Manager Methods
    getRole() {
        return 'Manager';
    };

    getOfficeNumber() {
        return this.officeNumber;
    };

};

// Need to use export default in order to import Manager in other files due to ESM error
export default Manager;