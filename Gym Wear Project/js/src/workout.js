function loadWorkouts() {
	var workoutsArr = JSON.parse(localStorage.getItem('routines'))[0].workouts;
	console.dir(workoutsArr)
	
	let renderWorkouts = []
	workoutsArr.forEach((data,index) => {
		let workoutTypeUnit = data.type === 'rep' ? 'reps' : 'secs' 
		let period = data.period || ''
		let workoutHtml = 
			`
			<li class="workouts-item">
				<div class="workouts-title">No. ${index+1}</div>
				<div class="workouts-item--wrapper">
					<div class="workouts-item-top">
						<div class="workouts-item-top-bodyPart">
							<div class="workouts-item-top-bodyPart-text">
								${data.body_area}
							</div>
						</div>
						<div class="workouts-item-top-rest">
							<div class="workouts-item-top-rest-time">
								${data.rest_time} secs
							</div>
						</div>
					</div>
					<div class="workouts-item-content">
						<div class="workouts-item-content-name">
							${data.name}	
						</div>
						<div class="workouts-item-content-secondaryInfo">
							<div class="workouts-item-content-secondaryInfo-sets">
								${data.set_count} sets
							</div>
							<div class="workouts-item-content-secondaryInfo-separator">.</div>
							<div class="workouts-item-content-secondaryInfo-type">
								${data.type_count} ${workoutTypeUnit}
							</div>
						</div>
					</div>
				</div>
			</li>
			`
		renderWorkouts.push(workoutHtml)
	})
	
	$('#workout-list').append(renderWorkouts);
}