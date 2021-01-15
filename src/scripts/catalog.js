export const catalog = (harvestArr) => {
  const contentElement = document.querySelector(".plantTable")

  let catalogHTMLRepresentation = ""
  let plantCounter = {}
  harvestArr.sort((a, b) => (a.type > b.type) ? 1 : -1)

  for (const plant of harvestArr) {
    plant.type in plantCounter ? plantCounter[plant.type] += 1 : plantCounter[plant.type] = 1
  }

  for (const key of Object.keys(plantCounter)) {
    catalogHTMLRepresentation += `<tr><td>${key}</td><td>${plantCounter[key]}</td></tr>`
  }

  contentElement.innerHTML += `
      ${catalogHTMLRepresentation}
  `
}