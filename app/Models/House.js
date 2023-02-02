import { generateId } from "../Utils/generateId.js";

export class House {

  constructor(data) {
    this.id = data.id || generateId()
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqfeet = data.sqfeet
    this.price = data.price
    this.address = data.address
    this.imgUrl = data.imgUrl
    this.description = data.description
  }

  get HouseTemplate() {
    return `
        <div class="col-md-4 card elevation-2 my-3 job" 
        onclick="app.housesController.setActiveHouse('${this.id}')" 
        data-bs-toggle="modal" data-bs-target="#ListingModal">
            <img src="${this.imgUrl}" 
            alt="" class="rounded">
                <p><b>${this.bedrooms} bed ${this.bathrooms} bath - ${this.price}</b></p>
        </div>
        `
  }

  get HouseDetailsTemplate() {
    return /*html*/`
      <div>
        <h4>${this.sqfeet}sq.feet</h4>
        <p>${this.description}</p>
        <button class="btn btn-danger" data-bs-dismiss="modal" 
        onclick="app.housesController.deleteHouse('${this.id}')">DELETE HOUSE</button>
      </div>
    `
  }

  static HouseForm() {
    return /*html*/`
    <form onsubmit="app.housesController.handleFormSubmit()">

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="bedrooms" required>
          <label for="bedrooms">Bedrooms</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="bathrooms" required>
          <label for="bathrooms">Bathrooms</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="sqfeet" required >
          <label for="sqfeet">Square Feet</label>
        </div>

        <div class="form-floating mb-3">
          <input type="text" class="form-control" name="price" required>
          <label for="price">Price</label>
        </div>

          <div class="form-floating mb-3">
          <input type="text" class="form-control" name="address" required>
          <label for="address">Address</label>
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
