import { setHTML, setText } from "../Utils/Writer.js"

export class HousesController {


  constructor() {
    console.log('Hello this is the houses Controller')
  }

  show() {
    setText('add-listing-button', 'Add Listing')
    setText('listingFormLabel', 'Add New Home Listing')
    setHTML('listings', 'YOUR JOB STARTS HERE....')
    setHTML('the-actual-form', 'Do your job lazy students')
  }

}
