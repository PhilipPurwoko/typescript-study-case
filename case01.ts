class Database {
    database: Array<{ name: string, age: number, joined: Date }>;
    constructor(data: Array<{ name: string, age: number, joined: Date }>) {
        this.database = data;
    }

    getAllData() {
        let counter: number = 1;
        console.log('Displaying All Data');
        this.database.forEach(data => {
            console.log(counter + '. ' + JSON.stringify(data));
            counter++;
        });
    }

    findPerson(name: string) {
        let found: boolean = false;
        this.database.forEach(data => {
            if (data.name == name) {
                console.log('Person Found');
                console.log(data);
                found = true;
            }
        });

        !found ? console.log(`Person ${name} did not exist`) : {};
    }

    hasAlready(name: string): boolean {
        let hasAlready: boolean = false;
        for (const data of this.database) {
            if (data.name == name) {
                hasAlready = true;
                break;
            }
        }
        return hasAlready;
    }

    addPerson(newData: { name: string, age: number, joined: Date }) {
        try {
            if (!this.hasAlready(newData.name)) {
                this.database.push(newData);
                console.log(`Person successfully added ${newData.name}`);
            } else {
                throw new Error('User already in data');
            }
        } catch (error) {
            console.log(error);
        }
    }

    removePerson(name: string) {
        try {
            const dataCheckup: boolean = this.hasAlready(name);
            if (dataCheckup) {
                let newDatabase: Array<{ name: string, age: number, joined: Date }> = [];
                this.database.forEach(data => {
                    if (data.name != name) {
                        newDatabase.push(data);
                    }
                });
                this.database = newDatabase;
                console.log(`Succesffully delete user ${name}`);
            } else {
                throw new Error('There is no person in data');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const data: Array<{ name: string, age: number, joined: Date }> = [
    {
        'name': 'Philip',
        'age': 20,
        'joined': new Date()
    },
    {
        'name': 'Siraj Sravlayan',
        'age': 24,
        'joined': new Date()
    }
]

const database = new Database(data);
database.getAllData();
database.findPerson('Philip');
database.findPerson('Budi');
database.addPerson({
    name: 'Budi',
    age: 21,
    joined: new Date(),
});
database.getAllData();
database.addPerson({
    name: 'Budi',
    age: 21,
    joined: new Date(),
});
database.getAllData();
database.removePerson('Siraj Sravlayan');
database.getAllData();
database.removePerson('Siraj Sravlayan');
database.getAllData();