import User from "./user";

class Sitter extends User{
    #rating;
    #service;
    #sunday;
    #monday;
    #tuesday;
    #wednesday;
    #thursday;
    #friday;
    #saturday;
    #picture;

    constructor(id,name,email,city1,city2,rating,service,sunday,monday,tuesday,wednesday,thursday,friday,saturday,picture){
        super(id,name,email,city1,city2);
        this.#rating = rating;
        this.#service = service;
        this.#sunday = sunday;
        this.#monday = monday;
        this.#tuesday = tuesday;
        this.#wednesday = wednesday;
        this.#thursday = thursday;
        this.#friday = friday;
        this.#saturday = saturday;
        this.#picture = picture;
    }

    getRating(){
        return this.#rating;
    }
    setRating(rating){
        this.#rating = rating;
    }
    getService(){
        return this.#service;
    }
    setService(service){
        this.#service = service;
    }
    getPicture(){
        return this.#picture;
    }
    setPicture(picture){
        this.#picture = this.#picture;
    }
    getSunday(){
        return this.#sunday;
    }
    getMonday(){
        return this.#monday;
    }
    getTuesday(){
        return this.#tuesday;
    }
    getWednesday(){
        return this.#wednesday;
    }
    getThursday(){
        return this.#thursday;
    }
    getFriday(){
        return this.#friday;
    }
    getSaturday(){
        return this.#saturday;
    }
}

export default Sitter;