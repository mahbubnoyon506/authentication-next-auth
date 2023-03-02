
import connectMongo from "@/database/connection";
import Users from "@/database/model/userModel";
import { hash } from "bcryptjs";


export default async function handler(req, res){
    connectMongo().catch(error => res.json({error: 'Connection failed'}));
    try{
        const {name, email, password} = req.body;
        const userData = {name, email, password: await hash(password, 12)};
        const users = await Users.create(userData);
        res.json({users})
    }catch(error){
        res.json((error))
    }

}