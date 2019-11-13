import { Injectable } from "@angular/core";
import { HttpClient} from '@angular/common/http';


@Injectable()

export class TodoService{
    constructor(private http: HttpClient){}
    itemsL = []


    items=["Angular","KimaaKi"];

    pushItemS(to){
        this.itemsL.push(to);
        console.log(this.itemsL)
    }
    getItemS(){
        return this.items;
    }
    removeItemS(i,index){
        this.http.delete('http://localhost:3301/tasks/'+i)
        .subscribe(
            (val) => {
                console.log("Delete successful value returned in body", 
                            val);
            },
            response => {
                console.log("Delete call in error", response);
            },
            () => {
                console.log("The Delete observable is now completed.");
        });
        this.itemsL.splice(index,1)
        
    }

    getData(){
        this.http.get('http://localhost:3301/tasks').subscribe((user: any) => {
            console.log(user)
            for (let entry of user) {
                this.itemsL.push(entry)
            }
            console.log(this.itemsL)
        });
        return this.itemsL;
    }

    sendData(item){
        this.http.post("http://localhost:3301/tasks",{Name:item})
            .subscribe(
            (val) => {
                console.log("POST call successful value returned in body", 
                            val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }

}