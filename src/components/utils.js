// filterTask: string (request, process, done, todos)
export function returnFilterDatas(datas, filterTask) {
  let returnDatas = []
  const posibleDatas = ["Requested", "In Process", "Done"]
  if (posibleDatas.includes(filterTask)) {
    datas.forEach((item) => {
      if (item.state === filterTask) returnDatas.push(item)
    })
  } else {
    returnDatas = datas
  }
  return returnDatas
}

export function returnSearchDatas(datas, searchTask) {
  let searchDatas = []

  if (searchTask) {
    datas.forEach((item) => {
      const title = item.title
      if (title.toUpperCase().indexOf(searchTask.toUpperCase()) !== -1)
        searchDatas.push(item)
    })
  } else {
    searchDatas = datas
  }
  return searchDatas
}
