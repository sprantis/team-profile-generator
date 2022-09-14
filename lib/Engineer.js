// Engineer class
// Import used instead of require() due to ESM error
import Employee from './Employee.js';

class Engineer extends Employee {
    
    // Engineer Properties
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    };

    // Engineer Methods
    getRole() {
        return 'Engineer';
    };

    getGithub() {
        return this.github;
    };
};

// Need to use export default in order to import Engineer in other files due to ESM error
export default Engineer;