// Initialize counters for waste recycling
let recycledWaste = 0;
let landfillWaste = 0;
let compostedWaste = 0;

// Function to sort waste and provide feedback
function sortWaste() {
    const wasteType = document.getElementById('waste-type').value;
    const resultMessage = document.getElementById('result-message');
    const recycled = document.getElementById('recycled');
    const landfill = document.getElementById('landfill');
    const composted = document.getElementById('composted');

    // Update sorting result based on waste type
    if (wasteType === 'plastic') {
        resultMessage.textContent = 'Plastic goes to the Recycling Bin!';
        recycledWaste += 1;
    } else if (wasteType === 'paper') {
        resultMessage.textContent = 'Paper goes to the Recycling Bin!';
        recycledWaste += 1;
    } else if (wasteType === 'food-scraps') {
        resultMessage.textContent = 'Food Scraps go to the Compost Bin!';
        compostedWaste += 1;
    } else if (wasteType === 'glass') {
        resultMessage.textContent = 'Glass goes to the Recycling Bin!';
        recycledWaste += 1;
    } else if (wasteType === 'metal') {
        resultMessage.textContent = 'Metal goes to the Recycling Bin!';
        recycledWaste += 1;
    }

    // Update feedback
    recycled.textContent = `${recycledWaste} kg`;
    landfill.textContent = `${landfillWaste} kg`;
    composted.textContent = `${compostedWaste} kg`;

    // Update the chart
    updateChart();
}

// Initialize the chart for waste management visualization
let ctx = document.getElementById('wasteChart').getContext('2d');
let wasteChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Recycled', 'Landfilled', 'Composted'],
        datasets: [{
            label: 'Waste Distribution',
            data: [recycledWaste, landfillWaste, compostedWaste],
            backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
            borderColor: ['#28a745', '#dc3545', '#ffc107'],
            borderWidth: 1
        }]
    },
});

// Function to update the chart based on waste stats
function updateChart() {
    wasteChart.data.datasets[0].data = [recycledWaste, landfillWaste, compostedWaste];
    wasteChart.update();
}