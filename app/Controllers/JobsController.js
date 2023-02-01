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
  setText('ListingModalLabel', `${appState.job.company} ${appState.job.location}`)
  setHTML('ListingModalBody', appState.job.JobDetailsTemplate)

}


export class JobsController {

  constructor() {
    console.log('Hello this is the jobs Controller')
    this.show()
    appState.on('jobs', _drawJobs)
    appState.on('job', _drawJob)
    _drawJobs()
  }


  show() {
    setText('add-listing-button', 'Add Listing')
    setText('listingFormLabel', 'Add New Job Listing')
    setHTML('the-actual-form', Job.JobForm())
    _drawJobs()
  }

  setActiveJob(jobId) {
    try {
      jobsService.setActiveJob(jobId)
    } catch (error) {
      Pop.error(error)
    }
  }

  handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      jobsService.createJob(formData)
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteJob(jobId) {
    try {
      const yes = await Pop.confirm('Are you sure you want to delete this posting?')
      if (!yes) { return }
      jobsService.deleteJob(jobId)
    } catch (error) {
      Pop.error(error)
    }
  }
}
