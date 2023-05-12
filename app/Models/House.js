import { appState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"


export class House {
  constructor(data) {
    this.id = data.id || generateId()
    this.creatorName = data.creatorName || ''
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }
}
