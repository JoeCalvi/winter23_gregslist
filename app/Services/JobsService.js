import { appState } from "../AppState.js"


class JobsService { 

    setActiveJob(jobId){
        const job = appState.jobs.find(j => j.id == jobId)
        if (!job) {
            throw new Error ('there is no job with that id')
        }
        appState.job = job
        console.log(appState.job)
    }
}
export const jobsService = new JobsService()