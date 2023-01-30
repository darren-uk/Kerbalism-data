async function fetchData() {
	// Get json file
	let response = await fetch("./json/data.json");
	let data = await response.json();

	function scienceTemplate(science) {
		let situationList = "";
		for (let i = 0; i < science.situations.length; i++) {
			let situation = `<p>${science.situations[i]}</p>`;
			situationList += situation;
		}

		let infoList = "";
		for (let i = 0; i < science.information.length; i++) {
			let info = `<p>${science.information[i]}</p>`;
			infoList += info;
		}

		let partList = "";
		for (let i = 0; i < science.part_needed.length; i++) {
			let part = `<p>${science.part_needed[i]}</p>`;
			partList += part;
		}

		return `<button class="accordion">${science.name}</button>
        <div class="panel card">
            <div class="line">
                <div class="item"><i class="fa-solid fa-database"></i>Data size</div>
                <div class="value">${science.data_size}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-gauge-simple-high"></i>Data rate</div>
                <div class="value">${science.data_rate}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-vial"></i>Sample size</div>
                <div class="value">${science.sample_size}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-weight-hanging"></i>Sample mass</div>
                <div class="value">${science.sample_mass}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-regular fa-clock"></i>Duration</div>
                <div class="value">${science.duration}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-arrows-to-circle"></i>Situations</div>
                <div class="value">${situationList}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-bolt"></i>Electricity required</div>
                <div class="value">${science.electricity_required}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-user"></i>Operation</div>
                <div class="value">${science.operation}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-puzzle-piece"></i>Part needed</div>
                <div class="value">${partList}</div>
            </div>
            <div class="line">
                <div class="item"><i class="fa-solid fa-info"></i>Information</div>
                <div class="value">${infoList}</div>
            </div>
        </div>`;
	}

	document.getElementById("science-list").innerHTML = `
    ${data.experiments.map(scienceTemplate).join("")}
    `;

	// Expands accordian on click
	let acc = document.getElementsByClassName("accordion");

	for (let i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	}
} // END ASYNC

//Back to top button

let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
}
