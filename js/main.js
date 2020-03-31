document.addEventListener('DOMContentLoaded', () => {
	// SELECT ELEMENTS
	let addBtn = document.querySelector('.add-btn');
	let closeBtn = document.querySelector('.close');
	let modal = document.querySelector('.modal');
	let input = document.querySelector('.task-input');
	let taskList = document.querySelector('.list-wrapper');
	let checkboxes = document.querySelectorAll('.checkbox');

	// SHOW MODAL WHEN addBtn CLICKED
	addBtn.addEventListener('click', () => {
		modal.style.display = 'flex';
		input.focus();

		anime({
			targets: '.modal-content',
			opacity: [0, 1],
			translateY: [200, 0],
			scale: [0, 1],
			duration: 500,
			easing: 'easeOutExpo',
		})

		anime({
			targets: modal,
			opacity: [0, 1],
			easing: 'easeOutExpo',
		})
	})

	// HIDE MODAL FUNCTION
	function hideModal() {
		anime({
			targets: '.modal-content',
			opacity: [1, 0],
			translateY: [0, 200],
			duration: 500,
			easing: 'easeOutExpo',
		})

		anime({
			targets: modal,
			opacity: [1, 0],
			easing: 'easeOutExpo',
			complete: (anim) => {
				modal.style.display = 'none';
			}
		})
	}

	// HIDE MODAL WHEN closeBtn CLICKED
	closeBtn.addEventListener('click', hideModal);

	// HIDE MODAL, RESET INPUT + ADD TASK WHEN ENTER IS PRESSED
	input.addEventListener('keypress', (event) => {
		if (event.code == 'Enter') {
			hideModal();
			taskList.insertAdjacentHTML('beforeend', `<div class="task-wrapper"><div class="checkbox-task-wrapper"><div class="checkbox"></div><h2 class="task">${input.value}</h2></div></div>`);
			input.value = '';
		}
	})

	//ATTACH EVENT LISTENER TO DYNAMIC OBEJECTS
	taskList.addEventListener('click', (event) => {
	  if (event.target.classList.contains('checkbox')) {
			anime({
				targets: event.target.parentNode.parentNode,
				translateX: 350,
				easing: 'easeOutExpo',
				complete: (anime) => {
 					event.target.parentNode.parentNode.remove();
				}
			})
		}
	})

	// - - - - ANIMATIONS - - - - //
	// TASKS
	anime({
		targets: '.task-wrapper, .task-date-wrapper',
		translateX: [-400, 0],
		opacity: [0, 1],
		easing: 'easeOutExpo',
		delay: (el, i, l) => {
      return i * 50;
    },
	})

	// ADD BUTTON
	anime({
		targets: addBtn,
		translateY: [200, 0],
		easing: 'easeOutExpo',
		delay: 500,
	})
})
