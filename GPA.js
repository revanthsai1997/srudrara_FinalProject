var $ = function (id) {
	return document.getElementById(id);
};

function calculateGPA() {
	const h1 = parseInt($("h1").value);
	const g1 = $("g1").value.toUpperCase().trim();
	if (h1 < 0 || h1 > 100) {
		alert("Credit Hours must be between 0 and 100");
		return false;
	}
	if (g1 != 'A' && g1 != 'B' && g1 != 'C' && g1 != 'D' && g1 != 'F') {
		alert("Grades must be between A, B, C, D, E.");
		return false;
	}

	const h2 = parseInt($("h2").value);
	const g2 = $("g2").value.toUpperCase().trim();
	if (h2 < 0 || h2 > 100) {
		alert("Credit Hours must be between 0 and 100");
		return false;
	}
	if (g2 != 'A' && g2 != 'B' && g2 != 'C' && g2 != 'D' && g2 != 'F') {
		alert("Grades must be between A, B, C, D, E.");
		return false;
	}

	const h3 = parseInt($("h3").value);
	const g3 = $("g3").value.toUpperCase().trim();
	if (h3 < 0 || h3 > 100) {
		alert("Credit Hours must be between 0 and 100");
		return false;
	}
	if (g3 != 'A' && g3 != 'B' && g3 != 'C' && g3 != 'D' && g3 != 'F') {
		alert("Grades must be between A, B, C, D, E.");
		return false;
	}

	let h4 = parseInt($("h4").value);
	const g4 = $("g4").value.toUpperCase().trim();
	if (g4 !='' && g4 != 'A' && g4 != 'B' && g4 != 'C' && g4 != 'D' && g4 != 'F') {
		alert("Grades must be between A, B, C, D, E.");
		return false;
	}
	let h5 = parseInt($("h5").value);
	const g5 = $("g5").value.toUpperCase().trim();
	if (g5 !='' && g5 != 'A' && g5 != 'B' && g5 != 'C' && g5 != 'D' && g5 != 'F') {
		alert("Grades must be between A, B, C, D, E.");
		return false;
	}

	if (isNaN(h4) || g4 == "") {
		h4 = 0;
	}
	if (isNaN(h5) || g5 == "") {
		h5 = 0;
	}

	const gradeValues = { A: 4.0, B: 3.0, C: 2.0, D: 1.0, F: 0.0 };

	const gp1 = gradeValues[g1];
	const gp2 = gradeValues[g2];
	const gp3 = gradeValues[g3];
	const gp4 = g4 == ''?0:gradeValues[g4];
	const gp5 = g4 == ''?0:gradeValues[g5];

	const gpa = ((h1 * gp1) + (h2 * gp2) + (h3 * gp3) + (h4 * gp4) + (h5 * gp5)) / (h1 + h2 + h3 + h4 + h5);

	$("avgGPA").value = gpa.toFixed(2);
}