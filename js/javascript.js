var counter = 0;
var enter_task;
var task_skeleton;
const task_array = [];

function store_value() {
    var enter_task = document.getElementById('enter_task').value;
    var task_object = { task: enter_task };
    task_array.push(task_object);
    console.log(task_array);
    add_todys_task(task_object);
}

function add_todys_task(object) {
    counter++;
    enter_task = document.getElementById('enter_task').value;
    task_skeleton = `<div class="align-items-center border-bottom d-flex justify-content-between" id="task_${counter}">
                        <p class="mt-2 task"><span class="pr-2"><input type="checkbox" id='checke_${counter}'></span><b>${object.task}</b></p>
                        <span>
                            <i class="bg-secondary border fa-trash-alt fas px-3 py-2 ml-4 rounded text-light" id="delete_task_${counter}"></i>
                        </span>
                    </div>`;
    if (enter_task != '') {
        document.getElementById('todays_task').innerHTML += task_skeleton;
        document.getElementById('enter_task').value = '';
        console.log(task_skeleton);
    } else {
        alert('1st enter a task');
    }
    $(`#delete_task_${counter}`).click(function() {
        console.log(`task_${counter}`);
    });
    // console.log(task_skeleton);
    // var delete_task = document.getElementById(`delete_task_${counter}`);
    // console.log(delete_task);

    // delete_task.addEventListener('click', function() {
    // document.getElementById(`task_${counter}`).remove();
    //     counter--;
    // });
    console.log(counter);
    if (`#task_${counter}` !== '') {
        function task_done() {
            alert('your task is completed')
        }
    }
}