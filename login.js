// prject 1
// let  btn = document.querySelector('#new-quote');
// let quote = document.querySelector('.quote');
// let person = document.querySelector('.person');

// const quotes = [{
//     quote: '"repellat hic consequuntur impedit, rerum assumenda, veniam deserunt ut beatae accusantium nam neque fugit? Nihil "',
//     person: 'Mathias Graham'
// },
// {
//     quote: '"reprehenderit animi provident cum eius est? Delectus voluptatum explicabo sapiente, molestias earum soluta sit obcaecati omnis ducimus quidem recusandae v"',
//     person: 'Dallas Smith'
// },
// {
//     quote: '"suscipit ipsa rerum consequatur sint sequi. Alias neque tempore beatae consectetur? Perspiciatis voluptatibus neque velit pariatur eum nulla porro commodi,"',
//     person: 'Ekwe Tom'
// },
// {
//     quote: '"minima officia magnam, ullam, mollitia saepe sed quisquam incidunt quasi laboriosam voluptate explicabo repellendus perspiciatis molestiae dignissimos magni velit hic iusto corrupti odio?"',
//     person: 'Godsent Mary'
// },
// {
//     quote: '"Asperiores quam ipsa quod omnis odit at, expedita sit autem fugit tempora odio voluptatum consectetur aliquid fugiat doloribus doloremque dolores"',
//     person: 'Westly Job'
// },
// {
//     quote: '"exercitationem autem aperiam obcaecati quisquam ducimus, nulla rerum id quibusdam illum repellat, in amet voluptatum iste asperiores quaerat aspernatur perspiciatis dolor?"',
//     person: 'Genesis Caton'
// },
// {
//     quote: '"impedit nam, non tempora autem beatae ipsa. Eligendi sunt possimus minus quibusdam rerum quod cumque qui o iure placeat ducimus vel "',
//     person: 'Maguire Jackson'
// },
// {
//     quote: '"corporis atque tenetur ratione beatae facilis provident enim adipisci, perferendis repellat exercitationem rem impedit soluta itaque perspiciatis asperiores nulla iure?"',
//     person: 'Perry Colin'
// },
// {
//     quote: '"necessitatibus magnam. Error, sapiente vitae assumenda provident laudantium explicabo beatae pariatur vero ducimus doloremque repellendus corrupti facilis repellat sint architecto nulla aut tempore et atque."',
//     person: 'Dickson Jocarly'
// },
// {
//     quote: '"Repudiandae accusamus amet fugiat dolor, dolores inventore quibusdam quam quasi rem eius, molestias sapiente sunt totam deleniti cumque quia optio culpa praesentium consequatur facere assumenda."',
//     person: 'Rob Mattwal'
// },
// ]

// btn.addEventListener('click', function(){
// let random = Math.floor(Math.random()*quotes.length);
// quote.innerText = quotes[random].quote;
// person.innerText = quotes[random].person;
// });

// project 2

// let openBtn = document.getElementById('open-btn');
// let modalContainer = document.getElementById('modal-container');
// let closeBtn = document.getElementById('close-btn');

// openBtn.addEventListener('click', function(){
//     modalContainer.style.display = 'block';
// });

// closeBtn.addEventListener('click', function(){
//     modalContainer.style.display = 'none';

// })

// window.addEventListener('click', function(e){
//     if(e.target === modalContainer){
//     modalContainer.style.display = 'none';
// }
// })

// project 3

// const accordion = document.getElementsByClassName('content-container');

// for(i=0; i< accordion.length; i++){

//     accordion[i].addEventListener('click', function(){
//         this.classList.toggle('active');
//     });

// };

// project 4

// const startStopBtn = document.querySelector('#startStopBtn');
// const resetBtn = document.querySelector('#resetBtn');

// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// // variables for leaading zero

// let leadingSeconds = 0;
// let leadingMinutes = 0;
// let leadingHours = 0;

// let timerInterval = null;
// let timerStatus = "stopped";

// function StopWatch(){
//     seconds++

//     if(seconds/60 === 1){
//         seconds = 0;
//         minutes++;
//         if(minutes/60 === 1){
//             minutes = 0;
//             hours++
//         }
//     }

//     if(seconds < 10) {
//         leadingSeconds = "0" + seconds.toString();
//     } else{
//         leadingSeconds = seconds;
//     }

//     if(minutes < 10) {
//         leadingMinutes = "0" + minutes.toString();
//     } else{
//         leadingMinutes = minutes;
//     }
//     if(hours < 10) {
//         leadingHours = "0" + hours.toString();
//     } else{
//         leadingHours = hours;
//     }

//     let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
//     }

//     startStopBtn.addEventListener('click', function(){

//         if(timerStatus === "stopped"){
//             timerInterval = window.setInterval(StopWatch, 1000);
//             document.getElementById('startStopBtn').innerHTML =  `<i class="fa-solid fa-pause" id="pause"></i>`;
//             timerStatus = "Started";
//         } else{
//             window.clearInterval(timerInterval);
//             document.getElementById('startStopBtn').innerHTML =  `<i class="fa-solid fa-play" id="play"></i>`;
//             timerStatus = "Stopped";
//         }
//     });

//     resetBtn.addEventListener('click', function(){
//         window.clearInterval(timerInterval);
//         seconds = 0;
//         minutes = 0;
//         hours = 0;
//         document.getElementById('timer'). innerHTML = "00:00:00";
//     });

// project 5

// variables
const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

// Event Listener for Add button
addTask.addEventListener('click', function(){
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkButton = document.createElement("button");
    checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
    checkButton.classList.add('checkTask');
    task.appendChild(checkButton);


    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
    deleteButton.classList.add('deleteTask');
    task.appendChild(deleteButton);

    if(inputTask.value === ""){
        alert('please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    };

    inputTask.value = "";

    checkButton.addEventListener('click', function(){
        checkButton.parentElement.style.textDecoration="line-through";
    });

    deleteButton.addEventListener('click', function(e){
        let target = e.target;
        // target.parentElement.parentElement.remove();
        target.parentElement.parentElement.remove();
    });
});