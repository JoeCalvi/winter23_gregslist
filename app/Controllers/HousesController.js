import { setHTML, setText } from "../Utils/Writer.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { appState } from "../AppState.js"
import { House } from "../Models/House.js"
import { housesService } from "../Services/HousesService.js"



function _drawHouses() {
  let template = ''
  appState.houses.forEach(h => template += h.HouseTemplate)
  setHTML('listings', template)
}

function _drawHouse() {
  setText('ListingModalLabel', `${appState.house.bedrooms} ${appState.house.bathrooms}`)
  setHTML('ListingModalBody', appState.house.HouseDetailsTemplate)

}

export class HousesController {


  constructor() {
    console.log('Hello this is the houses Controller')
    this.show()
    appState.on('houses', _drawHouses)
    appState.on('house', _drawHouse)
    _drawHouses()
  }


  show() {
    setText('add-listing-button', 'Add Listing')
    setText('listingFormLabel', 'Add New Home Listing')
    setHTML('the-actual-form', House.HouseForm())
    _drawHouses()
  }

  setActiveHouse(houseId) {
    try {
      housesService.setActiveHouse(houseId)
    } catch (error) {
      Pop.error(error)
    }
  }

  handleFormSubmit() {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      housesService.createHouse(formData)
      form.reset()
    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteHouse(houseId) {
    try {
      const yes = await Pop.confirm('Are you sure you want to delete this posting?')
      if (!yes) { return }
      housesService.deleteHouse(houseId)
    } catch (error) {
      Pop.error(error)
    }
  }

}
