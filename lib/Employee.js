// Employee class
class Employee {
    // Class Properties
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // Class Methods
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return 'Employee'
    };
};

// Need to use export default in order to import Employee in other files due to ESM error
export default Employee;