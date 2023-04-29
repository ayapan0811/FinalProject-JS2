import User from "./user";

class Owner extends User{
    #password;
    constructor(id,name,email,city1,city2,password){
        super(id,name,email,city1,city2);
        this.#password = password;
    }
    getPassword(){
        return this.#password;
    }
    setPassword(password){
        this.#password = password;
    }
}
export default Owner;