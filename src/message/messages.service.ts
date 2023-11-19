import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";
@Injectable()
export class MessagesService{
    messagesRepo: MessagesRepository;
    constructor (){
        // services is creating its own dependencies
        // dont do this real apps

        this.messagesRepo=new MessagesRepository();
    }
     findOne(id: string){
        return this.messagesRepo.findOne(id);

    }
    findAll(){
        return this.messagesRepo.findAll()
        
    }
    create(content: String){
        return this.messagesRepo.create(content);
    }

}