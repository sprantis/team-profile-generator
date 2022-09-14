// Intern Class
// Import used instead of require() due to ESM error
import Employee from './Employee.js';

class Intern extends Employee {
    // Intern Properties
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    };

    // Intern Methods
    getRole() {
        return 'Intern';
    };

    getSchool() {
        return this.school;
    };
};

// Need to use export default in order to import Intern in other files due to ESM error
export default Intern;