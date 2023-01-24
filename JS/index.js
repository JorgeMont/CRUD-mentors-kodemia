import getData from "./Helpers/getData.js";
import postData from "./Helpers/postData.js";

const apiURL = 'https://kodemiaprueba-default-rtdb.firebaseio.com/.json';
const mentorsContainer = document.querySelector('.mentorsContainer');

const parseInfo = (data) => {
    const asArray = Object.entries(data);
    const newDataArray = asArray.map((element)=>{
        const parsed = {
            id: element[0],
            ...element[1]
        };
        return parsed;
    });
    return newDataArray;
}

//Function that handles the data
const drawMentors = (data) => {
    const mentorsArray = parseInfo(data);
    console.log(mentorsArray);

    //Draw mentors
    mentorsArray.forEach((mentorData)=>{
        //Create DOM elements
        const card = document.createElement('article');
        const rowDiv = document.createElement('div');
        const rowDivLeft = document.createElement('div');
        const mentorIconImg = document.createElement('img');
        const mentorH2Name = document.createElement('h2');
        const rowDivRight = document.createElement('div');
        const editBtnImg = document.createElement('img');
        const delBtnImg = document.createElement('img');
        const rowDataDiv = document.createElement('div');
        const chipsDiv = document.createElement('div');
        const chipsDivAvg = document.createElement('div');
        const chipsAvgText = document.createElement('span');
        const chipsAvgImg = document.createElement('img');

        //Nesting elements
        card.appendChild(rowDiv);
        rowDiv.appendChild(rowDivLeft);
        rowDivLeft.appendChild(mentorIconImg);
        rowDivLeft.appendChild(mentorH2Name);


        rowDiv.appendChild(rowDivRight);
        rowDivRight.appendChild(editBtnImg);
        rowDivRight.appendChild(delBtnImg);

        card.appendChild(rowDataDiv);
        rowDataDiv.appendChild(chipsDiv);
        rowDataDiv.appendChild(chipsDivAvg);
        chipsDivAvg.appendChild(chipsAvgImg);        
        chipsDivAvg.appendChild(chipsAvgText);        
        
        //Add styles to elements
        card.classList.add('mentorCard');
        rowDiv.classList.add('row');
        rowDivLeft.classList.add('row__left');
        mentorIconImg.classList.add('mentorIcon');
        mentorIconImg.src = './Assets/Icons/user-regular.svg'
        mentorIconImg.alt = 'mentorIcon'
        mentorH2Name.classList.add('mentorName');
        rowDivRight.classList.add('row__right');
        editBtnImg.classList.add('btn');
        editBtnImg.classList.add('editBtn');
        editBtnImg.src = 'Assets/Icons/pen-to-square-solid.svg';
        editBtnImg.alt = 'icon';
        delBtnImg.classList.add('btn');
        delBtnImg.classList.add('deleteBtn');
        delBtnImg.src = 'Assets/Icons/trash-solid.svg';
        delBtnImg.alt = 'icon';
        rowDataDiv.classList.add('rowData');
        chipsDiv.classList.add('chips');
        chipsDivAvg.classList.add('mentorAvg');
        chipsDivAvg.classList.add('chips');
        chipsAvgImg.src = '/Assets/Icons/star-solid.svg';
        chipsAvgImg.alt = 'star icon';

        //Add content to DOM elements
        mentorH2Name.textContent = `${mentorData.name} ${mentorData.familyName}`;
        chipsDiv.textContent = mentorData.subject;
        chipsAvgText.textContent = mentorData.avg;
        mentorsContainer.appendChild(card);
    });



}

//Getting the data
getData(apiURL, drawMentors);

//Post data
// postData(apiURL, {name: 'Cinthia', familyName: 'Sanchez', subject: 'HTML', avg: 9.8});
// postData(apiURL, {name: 'Alison', familyName: 'Rangel', subject: 'CSS', avg: 9.9});
// postData(apiURL, {name: 'Daniel', familyName: 'Vazquez', subject: 'JS', avg: 9.7});
// postData(apiURL, {name: 'Zoy', familyName: 'Mendoza', subject: 'HTML', avg: 9.8});