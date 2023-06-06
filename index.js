let productiveActivities = [
  {
    label: "Reading Time",
    id: "book",
    rate: 50,
  },
  {
    label: "Learning Coding Skill",
    id: "coding",
    rate: 150,
  },
  {
    label: "Investment Planning",
    id: "investment",
    rate: 200,
  },
  {
    label: "Gym Timing",
    id: "gym",
    rate: 50,
  },
];

const activitiesHTML = productiveActivities
  .map(
    (activity) => `
  <div class="element">
    <label for="${activity.id}">${activity.label}: </label>
    <input type="number" id="${activity.id}">
  </div>
`
  )
  .join("");

document.getElementById("form").innerHTML =
  activitiesHTML +
  `
  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
`;

function handleSubmit(e) {
  e.preventDefault();
  let activityTime = 0;
  for (let i = 0; i < productiveActivities.length; i++) {
    const activity = productiveActivities[i];
    if (document.getElementById(activity.id).value != "") {
      let time = parseInt(document.getElementById(activity.id).value);
      console.log(time);
      activityTime += time * activity.rate;
    }
  }
  console.log(activityTime);
  const currentScore = parseInt(document.getElementById("score").textContent);
  const totalTime = currentScore + activityTime;
  document.getElementById("score").textContent = totalTime;

  // Store the totalTime in localStorage
  localStorage.setItem("score", totalTime);
}

function resetScore() {
  if (
    confirm(`
    Are you sure you want to reset your score to 0?
     - Purchase the same amount of liquid fund
     - Then Press ok
  `)
  ) {
    localStorage.setItem("score", 0);
    location.reload();
  }
}

function loadData() {
  let score = localStorage.getItem("score");
  if (score) {
    document.getElementById("score").innerHTML = score;
  } else {
    document.getElementById("score").innerHTML = 0;
  }
}

loadData();
