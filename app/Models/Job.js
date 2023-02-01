import { generateId } from "../Utils/generateId.js";


export class Job { 

    constructor(data){
        this.id = data.id || generateId()
        this.company = data.company
        this.location = data.location
        this.position = data.position
        this.pay = data.pay
        this.hours = data.hours
        this.description = data.description
    }

    get JobTemplate(){
        return `
        <div class="col-md-4 card elevation-2 my-3 job" onclick="app.jobsController.setActiveJob('${this.id}')">
            <img src="https://codeworks.blob.core.windows.net/public/assets/img/cw-mark.png" 
            alt="" class="rounded">
                <p><b>${this.company} ${this.location} - ${this.pay}</b></p>
        </div>
        `
    }
}
