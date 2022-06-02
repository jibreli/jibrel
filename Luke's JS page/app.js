
const btn = document.getElementById('btn');
btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const userName = document.getElementById('nameField');

    console.log(userName.value);
    let nameText = userName.value;
    document.getElementById('uName').innerHTML = nameText;

    //clearing input field
    userName.value = '';

});


const btn_1 = document.getElementById('btn_1');
btn_1.addEventListener('click', function handleClick(event) {
    event.preventDefault();

    const thought = document.getElementById('thoughtField');

    console.log(thought.value);
    let text = thought.value;
    let thoughts = [];
    if (text.length > 0) {
        thoughts.push(text);
    } else {
        alert("No thoughts?!?!");
    }

    //clearing the input field
    thought.value = '';



    const btn_2 = document.getElementById('btn_2');
    btn_2.addEventListener('click', function handleClick2(event2) {
        event2.preventDefault()


        for (const element of thoughts) {
            document.getElementById('blog').innerHTML += element + " ";
        }

        //clearing the array
        while (thoughts.length !== 0) {
            thoughts.pop();
        }

    });

});

const moreAlert = document.getElementById('btn_2');
moreAlert.addEventListener('click', function handleClick3(event3) {
    event3.preventDefault();
    alert("You've got thoughts! Add more?");

    const d = new Date();
    document.getElementById("date").innerHTML = d;

    document.getElementById('blog').innerHTML += "\n";
});