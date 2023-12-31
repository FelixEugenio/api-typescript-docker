import { v4 as uuid} from 'uuid'

export interface IHourDTO {
    hour: string
}

class Hour {
    id?:string
    hour!:string
    created_at!:Date
    updated_at!:Date
    
    constructor(){
    
        if(!this.id){
      this.id = uuid();
        }
    }
}

export {Hour}