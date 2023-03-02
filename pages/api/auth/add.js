import connectMongo from "@/database/connection";
import Test from "@/database/model/testModel";


export default async function addTest(req, res){
    try{
      console.log('CONNECTING TO MONGO');
      await connectMongo();
      console.log('CONNECTED TO MONGO');
      const test = await Test.create(req.body);
      console.log('CREATED DOCUMENT');
      res.json({test})

    }catch(error){
      console.log(error);
      res.json({error})
    }
}