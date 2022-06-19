/*
[1]· Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.
*/
const downloadAvailable = () => {
    const tablebody = document.getElementById('table-elements');
    const allCheckBox = Array.from(tablebody.querySelectorAll('input[type="checkbox"]'));
    const selectedCheckbox = allCheckBox.filter(checkbox => {
        const status = checkbox.parentNode.parentNode.lastElementChild;
        return checkbox.checked && status.innerHTML === "Available"
    })

    /*
    [9]· Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.
    */

    const results = selectedCheckbox.map(checkbox => {
        const childrenOfCheckbox = checkbox.parentNode.parentNode.children;
        const devicePathInfo = {}
        for (let i = 0; i < childrenOfCheckbox.length; i++) {
            if (i === 2) {
                devicePathInfo.device = childrenOfCheckbox[i].innerText
            }
            if (i === 3) {
                devicePathInfo.path = childrenOfCheckbox[i].innerText
            }
        }
        return devicePathInfo;
    })
    alert("Currently available to be downloaded: " + JSON.stringify(results));

}

/* 
[2]· The select-all checkbox should be in an unselected state if no items are selected.
[3]· The select-all checkbox should be in a selected state if all items are selected.
[4]· The select-all checkbox should be in an indeterminate state if some but not all items are selected.
[5]· The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.
*/

const changeSelectedAllStatus = () => {
    const tablebody = document.getElementById('table-elements');
    const allCheckBox = Array.from(tablebody.querySelectorAll('input[type="checkbox"]'));
    const booleanCheckboxes = allCheckBox.map(checkbox => checkbox.checked);
    const count = booleanCheckboxes.filter(val => val === true).length;
    if (count > 0) {
        document.getElementById('selected').innerText = `Selected ${count}`
    } else {
        document.getElementById('selected').innerText = `None Selected`
    }
    const allEqual = booleanCheckboxes.every(val => val === booleanCheckboxes[0]);
    if (allEqual) {
        document.getElementById('select-all').indeterminate = false;
        document.getElementById('select-all').checked = booleanCheckboxes[0]
    } else {
        document.getElementById('select-all').indeterminate = true;

    }
}

/*[6]· Clicking the select-all checkbox should select all items if none or some are selected.

[7]· Clicking the select-all checkbox should de-select all items if all are currently selected.
*/


const selectAll = (selectAllCheckbox) => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (const checkbox of checkboxes) {
        checkbox.checked = selectAllCheckbox.checked
        changeColorRowOnSelected(checkbox)
    }
    changeSelectedAllStatus();
}

//[10]· Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover
function changeColorRowOnSelected(selectedCheckbox) {
    if (selectedCheckbox.checked) {
        selectedCheckbox.parentNode.parentNode.style.backgroundColor = "rgb(245, 245, 245, 255)";
    }
    else {
        selectedCheckbox.parentNode.parentNode.style.backgroundColor = "white";
    }
}

