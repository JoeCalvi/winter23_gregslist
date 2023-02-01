import { generateId } from "../Utils/generateId.js";


export class Job {

    constructor(data) {
        this.id = data.id || generateId()
        this.company = data.company
        this.location = data.location
        this.position = data.position
        this.pay = data.pay
        this.imgUrl = data.imgUrl
        this.description = data.description
    }

    get JobTemplate() {
        return `
        <div class="col-md-4 card elevation-2 my-3 job" 
        onclick="app.jobsController.setActiveJob('${this.id}')" 
        data-bs-toggle="modal" data-bs-target="#ListingModal">
            <img src="${this.imgUrl}" 
            alt="" class="rounded">
                <p><b>${this.company} ${this.location} - ${this.pay}</b></p>
        </div>
        `
    }

    get JobDetailsTemplate() {
        return /*html*/`
      <div>
        <h4>${this.position}</h4>
        <p>${this.description}</p>
        <button class="btn btn-danger" data-bs-dismiss="modal" 
        onclick="app.jobsController.deleteJob('${this.id}')">DELETE JOB</button>
      </div>
    `
    }

    static JobForm() {
        return /*html*/`
    <form onsubmit="app.jobsController.handleFormSubmit()">

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="company" required>
          <label for="company">Company</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="location" required>
          <label for="location">Location</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="position" required >
          <label for="position">Position</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="pay" required>
          <label for="pay">Pay</label>
        </div>

        <div class="form-floating mb-3">
          <input type="url" class="form-control" name="imgUrl">
          <label for="imgUrl">Image Url <i>(We are too lazy for uploads)</i></label>
        </div>

        <div class="form-floating">
          <textarea class="form-control" placeholder="Describe your Listing" name="description"></textarea>
          <label for="description">Description</label>
        </div>

        <div class="d-flex my-4 gap-5 align-items-center">
          <button class="btn" type="reset">Cancel</button>
          <button class="btn btn-primary" type="submit" data-bs-dismiss="offcanvas">Submit</button>
        </div>

      </form>
    `
    }
}
