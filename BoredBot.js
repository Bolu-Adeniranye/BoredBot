function getActivity() {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = `You can ${data.activity}!!`
      document.getElementById("activity").classList.add("rainbow-text")
    })
}
