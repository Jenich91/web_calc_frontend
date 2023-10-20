const xValues = [];
const yValues = [];

new Chart('Graph', {
  type: 'line',
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        pointRadius: 2,
        borderColor: 'rgba(255,0,0,0.5)',
        data: yValues,
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Graph function',
      fontSize: 16,
    },
  },
});
