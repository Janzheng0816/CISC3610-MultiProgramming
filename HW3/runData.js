var zone = ["DISTRICT 01","DISTRICT 02","DISTRICT 03","DISTRICT 04","DISTRICT 05","DISTRICT 06","DISTRICT 07","DISTRICT 08","DISTRICT 09","DISTRICT 10"];
var number = [12367, 60823, 21962, 14252, 13170, 25733, 19717, 31625, 34518, 56757];
var color = ["red", "yellow", "green", "brown", "blue", "purple", "black", "indigo", "violet", "cyan"];
function create_Bar() {
new Chart(document.getElementById("bar_chart"), {
    type: 'bar',
    data: {
      labels:zone,
      datasets: [
        {
          backgroundColor: color,
          data: number
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: '2010-2011 School Enrollment Statistics by District'
      }
    }
});
}

function create_Pie(){
    new Chart(document.getElementById("pie_chart"), {
    type: 'pie',
    data: {
		labels:zone,
      datasets: [
        {
          backgroundColor: color,
          data: number
        }
      ]
    },
    options: {
      legend: { display: true,
				pisition: "right"},
      title: {
        display: true,
        text: '2010-2011 School Enrollment Statistics by District'
      }
    }
});
}



document.addEventListener('DOMContentLoaded',create_Bar);
document.addEventListener('DOMContentLoaded',create_Pie);