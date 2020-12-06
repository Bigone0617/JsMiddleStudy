'use strict';

class UserStorage {
    async loginUser(id, password) {
        if(
            (id === 'taeil' && password === 'dream') ||
            (id === 'coder' && password === 'acadey')
        ){
            console.log(`loing ${id}`);
            return id;
        }else{
            throw 'not found id!!';
        }
    }
    
    async getRoles(user){
        if(user == 'taeil'){
            console.log(`role ${user}`);
            return {name : 'taeil', role: 'admin'}
        }else{
            throw 'no access';
        }
    }

    async loginProcessor(id, pw){
        const user = await this.loginUser(id, pw);
        const roles = await this.getRoles(user);

        return roles;
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pw = prompt('enter your pw');

userStorage.loginProcessor(id, pw)
            .then(user => alert( `Hello ${user.name}, you have a ${user.role} role` ))
            .catch(console.log);
