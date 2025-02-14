import express,{NextFunction,Request,Response} from "express";
import PersonalDetails from "./Models/PersonalDetails.js";
import PersonalDetailsModels from "./Models/PersonalDetailsModel.js";

const contacts:PersonalDetails[]=[
    new PersonalDetailsModels("Linda","Foster",13,5,1971,"07896543212"),
    new PersonalDetailsModels("Kola","Smith",21,11,1981,"07986543214"),
    new PersonalDetailsModels("Jack","Mennell",1,2,1975,"07896543212"),
    new PersonalDetailsModels("Inam","Jones",11,2,1987,"07896545453"),
];
const port=3000;
const expressApp=express();

expressApp.use(express.json());

expressApp.get("/api",(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).send("Health Check on Get");
    }
);

expressApp.get("/api/contacts",(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json(contacts);
    }
);

expressApp.get("/api/:firstName",(req:Request,res:Response,next:NextFunction)=>{
    const firstNameToDelete=req.params.firstName;
    const index=contacts.findIndex((contact)=>{
        return contact.firstName.toLowerCase()===firstNameToDelete.toLowerCase();
    }
);
    if (index===-1) {
        res.status(400).send(`Name " ${firstNameToDelete} " not found`);
    }
    res.status(200).json(contacts[index]);
    }
);

expressApp.delete("/api/:firstName",(req:Request,res:Response,next:NextFunction)=>{
    const firstNameToDelete=req.params.firstName;
    const index=contacts.findIndex((contact)=>{
        return contact.firstName.toLowerCase()===firstNameToDelete.toLowerCase();
    }
);
    if (index===-1) {
        res.status(400).send(`Name " ${firstNameToDelete} " not found`);
    }
    contacts.splice(index,1);
    res.status(200).send(`Name " ${firstNameToDelete} " deleted`);
    }
);

expressApp.listen(port,()=>{
    console.log("Server Running on Port: ",port);
    }
);