import { appState } from "../AppState.js"
import { Job } from "../Models/Job.js"
import { saveState } from "../Utils/Store.js"


class JobsService { 

    setActiveJob(jobId){
        const job = appState.jobs.find(j => j.id == jobId)
        if (!job) {
            throw new Error ('there is no job with that id')
        }
        appState.job = job
        console.log(appState.job)
    }

    createJob(formData){
        let job = new Job(formData)
        appState.jobs.push(job)
        appState.emit('jobs')
        saveState('jobs', appState.jobs)
    }
}
export const jobsService = new JobsService()