# UI-DEVELOPER-TEST

Requirements: 

[1]· Only those that have a status of "available" are currently able to be downloaded. Your implementation should manage this.✅

[2]· The select-all checkbox should be in an unselected state if no items are selected.✅

[3]· The select-all checkbox should be in a selected state if all items are selected.✅

[4]· The select-all checkbox should be in an indeterminate state if some but not all items are selected.✅

[5]· The "Selected 2" text should reflect the count of selected items and display "None Selected" when there are none selected.✅

[6]· Clicking the select-all checkbox should select all items if none or some are selected. ✅ 

[7]· Clicking the select-all checkbox should de-select all items if all are currently selected.✅

[8]· Status should be correctly formatted✅

[9]· Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.✅

[10]· Precise/exact HTML formatting/styling to match the mockup is not required however rows should change colour when selected and on hover.✅




------------------------------------------------------------------

This component displays a list of files which can be downloaded. It should be able to be given the following data:

[

{ name: 'smss.exe', device: 'Stark', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe', status: 'scheduled'},

{ name: 'netsh.exe', device: 'Targaryen', path: '\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe', status: 'available' },

{ name: 'uxtheme.dll', device: 'Lannister', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll', status: 'available' },

{ name: 'cryptbase.dll', device: 'Martell', path: '\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll', status: 'scheduled' },

{ name: '7za.exe', device: 'Baratheon', path: '\\Device\\HarddiskVolume1\\temp\\7za.exe', status: 'scheduled' }

]
![image001](https://user-images.githubusercontent.com/57401673/174489951-e2227ec7-fa10-45ff-9f3c-3627056b8ca5.png)

References: 

https://www.techiedelight.com/implement-select-all-check-box-html-javascript/

https://stackoverflow.com/questions/61824214/how-can-i-customize-the-style-of-a-checkbox-which-is-in-indeterminate-state