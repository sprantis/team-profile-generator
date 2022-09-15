const generateEmptyHTML = require('./generateEmptyHTML.js')

// Returns string literal of Engineer card populated with user input
function renderEngineer(engineerObj) {
return `
                <div class="card mx-2 my-2 card-width">
                    <div class="card-header blue-bg">
                        <h2 class="card-title white-text">${engineerObj.name}</h2>
                        <h3 class="card-title white-text"><i class="fas fa-glasses white-text"></i>${'  ' + engineerObj.role}</h3>
                    </div>
                    <div class="card-body grey-bg">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineerObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineerObj.email}">${engineerObj.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineerObj.github}" target="_blank">${engineerObj.github}</a></li>
                        </ul>
                    </div>
                </div>
`;
}

// Returns string literal of Intern card populated with user input
function renderIntern(internObj) {
return `
                <div class="card mx-2 my-2 card-width">
                    <div class="card-header blue-bg">
                        <h2 class="card-title white-text">${internObj.name}</h2>
                        <h3 class="card-title white-text"><i class="fas fa-user-graduate white-text"></i>${'  ' + internObj.role}</h3>
                    </div>
                    <div class="card-body grey-bg">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${internObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${internObj.email}">${internObj.email}</a></li>
                            <li class="list-group-item">School: ${internObj.school}</li>
                        </ul>
                    </div>
                </div>
`;
}

// Returns string literal of Manager card populated with user input
function renderManager(managerObj) {
return `
                <div class="card mx-2 my-2 card-width">
                    <div class="card-header blue-bg">
                        <h2 class="card-title white-text">${managerObj.name}</h2>
                        <h3 class="card-title white-text"><i class="fas fa-mug-hot white-text"></i>${'  ' + managerObj.role}</h3>
                    </div>
                    <div class="card-body grey-bg">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${managerObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${managerObj.email}">${managerObj.email}</a></li>
                            <li class="list-group-item">Office Number: ${managerObj.officeNumber}</li>
                        </ul>
                    </div>
                </div>
`;
}

// Call appropriate function based on role property of object
function checkRole(dataObj){
  if (dataObj.role == 'Engineer'){
    return renderEngineer(dataObj);
  } else if (dataObj.role == 'Intern'){
    return renderIntern(dataObj);
  } else if (dataObj.role == 'Manager'){
    return renderManager(dataObj);
  } else {
    console.log('Check role failed')
  };
}

// Loop through a given array
// For each array item, a related HTML string literal is added to the dataString
// dataString is returned once the loop is over
function renderTeamArr(dataArr){
  if (dataArr){
    let dataString = '';
    for (let i = 0; i < dataArr.length; i++){
       dataString += checkRole(dataArr[i]);
    }
    return dataString;
  } else {
    console.log('render team arr failed')
  }

}

// Populate a string representation of an "empty" HTML template
// Within the template, the line containing "// placeholder" is replaced the the data string from renderTeamArr()
// The new HTML string is returned
function renderTeamHTML(teamArr) {
  let populateData = renderTeamArr(teamArr);

  // Replace specific lines in a file: https://stackoverflow.com/questions/30711184/how-can-i-change-a-specific-line-in-a-file-with-node-js
  let populated = generateEmptyHTML().replace('// placeholder', populateData);
  return populated;
}

module.exports = renderTeamHTML;