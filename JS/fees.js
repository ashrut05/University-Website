function showDiv(tableId, buttonId) {
	
    var selectedTable=document.getElementById(tableId);
    var buttonText=document.getElementById(buttonId);
	
    if (selectedTable.style.display==="table"){
        selectedTable.style.display="none";
        buttonText.value="+";
    } 
    else {
        selectedTable.style.display="table";
        buttonText.value="X";
    }
}