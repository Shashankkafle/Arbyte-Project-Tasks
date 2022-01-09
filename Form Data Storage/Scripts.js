function submit(){
    let name = document.getElementById('name'), email=document.getElementById('email')
    localStorage.setItem(name.value,email.value)
}
function generateTable(){
    var body = document.getElementsByTagName("body")[0]
    var tbl = document.createElement("table")
    var tblBody = document.createElement("tbody")

    var rowHead = document.createElement("tr")

    var keyRowHeadCell = document.createElement("th")  
    var keyRowHeadCellText = document.createTextNode("key") 
    keyRowHeadCell.appendChild(keyRowHeadCellText)
    rowHead.appendChild(keyRowHeadCell)
    tblBody.appendChild(rowHead)

    var valueRowHeadCell = document.createElement("th") 
    var valueRowHeadCellText = document.createTextNode("value") 
    valueRowHeadCell.appendChild(valueRowHeadCellText)
    rowHead.appendChild(valueRowHeadCell)
    tblBody.appendChild(rowHead)
    const items = { ...localStorage }
    Object.entries(items).forEach(item => {
        var row = document.createElement('tr')

        var rowKeyCell = document.createElement('td')
        var rowKeyCellText = document.createTextNode(item[0])
        rowKeyCell.appendChild(rowKeyCellText)
        row.appendChild(rowKeyCell)

        var rowValueCell = document.createElement('td')
        var rowValueCellText = document.createTextNode(item[1])
        rowValueCell.appendChild(rowValueCellText)
        row.appendChild(rowValueCell)
        tblBody.appendChild(row)

    })
    

    tbl.appendChild(tblBody)
    body.appendChild(tbl)
    tbl.setAttribute("border", "2")

}