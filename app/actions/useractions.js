"use server"
import connectDB from "../db/ConnectDb";
import User from "../models/User";


export const fetchUser=async(userEmail)=>{
    await connectDB();
    const fUser=await User.findOne({email:userEmail})
    const userObj=await fUser.toObject({flattenObjectIds:true})
    return userObj;
}

export const updateUser=async(newUserData)=>{
    await connectDB()

    const fetchUser=await User.findOne({email:newUserData.email})
    
    // const uUser=await User.findOneAndUpdate({email:"dheerajokfreefire@gmail.com",$set:{newUserData}})
    if(fetchUser.name==""){

        const uUser = await User.findOneAndUpdate(
            { email: newUserData.email },              // Query filter
            { $set: newUserData },                     // Update operation
            { new: true }                              // Option to return the updated document
        );

        

        return "new";
        
    }

    
    return;

}


export const updatePayment =async (donnerData,name)=>{
    connectDB();
    const payUser=await User.findOne({urlName:name})

    if(payUser.urlName==name){
       let a= payUser.donerArr.push(donnerData)
       const updateDoner=await User.findOneAndUpdate(
        { urlName: name },              // Query filter
        { $set: {
            donerArr:payUser.donerArr
        } },                     // Update operation
        { new: true }                              // Option to return the updated document
    );
       
    }

    
    

}