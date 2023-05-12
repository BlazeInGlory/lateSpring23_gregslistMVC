import { appState } from "../AppState.js"
import { House } from "../Models/House.js";
import { setHTML } from "../Utils/Writer.js";
import { getFormData } from "../Utils/FormHandler.js";
import { housesService } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";


function _drawHouses() {
  console.log('drawing houses');
  let houses = appState.cars
  let template = ''
  houses.forEach(House => template += House.CardTemplate)
  setHTML('houses', template)
}

function _drawCreateHouseButton() {
  setHTML('createHouseButton', House.CreateHouseButton())
}

function _drawHouseActive() {
  console.log('drawing active');
  let house = appState.activeHouse
  setHTML('modal-guts', house.ActiveTemplate)

  export class HousesController {
    constructor() {
      _drawCreateHouseButton()
      appState.on('activeHouse', _drawHouseActive)
      appState.on('houses', _drawHouses)
      appState.on('userName', _drawCreateHouseButton)
    }
  }

  getHouses() {
    _drawHouses()
  }

  setActive(houseId) {
    housesService.setActive(houseId)
  }

  getHouseForm() {
    setHTML('modal-guts', House.HouseForm())
  }

  createHouse() {
    window.event.preventDefault()
    const formHTML = event.target
    const formData = getFormData(formHTML)
    formData.creatorName = appState.userName
    housesService.createHouse(formData)
    formHTML.reset()
    bootstrap.Modal.getOrCreateInstance('#modal').hide()
  }

  async deleteHouse(houseId) {
    if (await Pop.confirm("Are you sure about that?")) {
      housesService.deleteHouse(houseId)
    }
  }
}