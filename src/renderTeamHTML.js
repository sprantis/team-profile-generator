import generateEmptyHTML from "./generateEmptyHTML.js";

function renderEngineer(engineerObj) {
return `
                <div class="card">
                    <div class="card-header blue-bg">
                        <h2 class="card-title">${engineerObj.name}</h2>
                        <h3 class="card-title"><i class="fas fa-glasses"></i>${engineerObj.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${engineerObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineerObj.email}">${engineerObj.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${engineerObj.github}" target="_blank">${engineerObj.github}</a></li>
                        </ul>
                    </div>
                </div>
`;
}

function renderIntern(internObj) {
return `
                <div class="card">
                    <div class="card-header blue-bg">
                        <h2 class="card-title">${internObj.name}</h2>
                        <h3 class="card-title"><i class="fas fa-user-graduate"></i>${internObj.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${internObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${internObj.email}">${internObj.email}</a></li>
                            <li class="list-group-item">School: ${internObj.school}</li>
                        </ul>
                    </div>
                </div>
`;
}

function renderManager(managerObj) {
return `
                <div class="card">
                    <div class="card-header blue-bg">
                        <h2 class="card-title">${managerObj.name}</h2>
                        <h3 class="card-title"><i class="fas fa-mug-hot"></i>${managerObj.role}</h3>
                    </div>
                    <div class="card-body">
                        <ul class="list-group">
                            <li class="list-group-item">ID: ${managerObj.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${managerObj.email}">${managerObj.email}</a></li>
                            <li class="list-group-item">Office Number: ${managerObj.officeNumber}</li>
                        </ul>
                    </div>
                </div>
`;
}

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

function renderTeamHTML(teamArr) {
  let populateData = renderTeamArr(teamArr);
  let populated = generateEmptyHTML().replace('// placeholder', populateData);
  return populated;
}

export default renderTeamHTML;