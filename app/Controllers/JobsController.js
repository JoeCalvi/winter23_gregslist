import { setHTML, setText } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { jobsService } from "../Services/JobsService.js"



function _drawJobs() {
  let template = ''
  appState.jobs.forEach(j => template += j.JobTemplate)
  setHTML('listings', template)
}

function _drawJob() {


}


export class JobsController {

  constructor() {
    console.log('Hello this is the jobs Controller')
    this.show()
    _drawJobs()
  }


  show() {
    setText('add-listing-button', 'Add Listing')
    setText('listingFormLabel', 'Add New Job Listing')
    _drawJobs()
  }

  setActiveJob(jobId){
    try {
      jobsService.setActiveJob(jobId)
    } catch (error) {
      Pop.error(error)
    }
  }
}
