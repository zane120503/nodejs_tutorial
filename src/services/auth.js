import db from '../models'
import bcrypt from 'bcryptjs'


const hashPassword = password => bcrypt.hashSync()

export const register = (email, password) => new Promise(async(resolse, reject)=>{
    try{
        const response = await db.User.findOrCreate({
            where: {email},
            defaults: {
                email,
                password: password
            }
        })
        resolse({
            err: 0,
            mes: 'register service'

        })
    }catch(error){
        reject(error)
    }
})