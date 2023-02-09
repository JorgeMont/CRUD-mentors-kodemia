import createCard from "./Helpers/createCard.js";
import getData from "./Helpers/getData.js";
import postData from "./Helpers/postData.js";

const apiURL = 'https://kodemiaprueba-default-rtdb.firebaseio.com/.json';
const mentorsContainer = document.querySelector('.mentorsContainer');
const mentorsForm = document.querySelector('.mentorsForm');
const nameInput = document.querySelector('#name');
const familyNameInput = document.querySelector('#familyNames');
const nameInput = document.querySelector('#name');
const nameInput = document.querySelector('#name');


mentorsForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('hi');
})

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
        const card = createCard(mentorData);
        mentorsContainer.appendChild(card)
    });



}

//Getting the data
getData(apiURL, drawMentors);

//Post data
// postData(apiURL, {name: 'Cinthia', familyName: 'Sanchez', subject: 'HTML', avg: 9.8});