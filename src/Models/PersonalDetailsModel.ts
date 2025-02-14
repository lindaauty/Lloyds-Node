import PersonalDetails from "./PersonalDetails";

export default class PersonalDetailsModels implements PersonalDetails{
    constructor
    (public firstName:string,public surName:string,
        public birthDay:number,public birthMonth:number,public birthYear:number,
        public phone:string){

    }
};