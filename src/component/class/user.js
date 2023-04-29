class User{
    _id;
    _name;
    _email
    _city1;
    _city2;

    constructor(id,name,email,city1,city2){
        this._id = id;
        this._name = name;
        this._email = email;
        this._city1 = city1;
        this._city2 = city2;
    }

    getId(){
        return this._id;
    }
    setId(id){
        this._id = id;
    }
    getName(){
        return this._name;
    }
    setName(name){
        this._name = name;
    }
    getEmail(){
        return this._email;
    }
    setEmail(email){
        this._email = email;
    }
    getCity1(){
        return this._city1;
    }
    setCity1(city1){
        this._city1 = city1;
    }
    getCity2(){
        return this._city2;
    }
    setCity2(city2){
        this._city2 = city2;
    }
}

export default User;