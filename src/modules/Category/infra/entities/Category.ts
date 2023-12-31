import { v4 as uuid} from 'uuid'

export interface ICategoryDTO {
    name: string
}

class Category {
    id?:string
    name!:string
    created_at!:Date
    updated_at!:Date
    
    constructor(){
    
        if(!this.id){
      this.id = uuid();
        }
    }
}

export {Category}