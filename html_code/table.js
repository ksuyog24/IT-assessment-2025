// Array of travel data
const travelData = [
  { destination: "Jarsingpauwa", month: "Feb", year: "2025", remarks: "Beautiful hike!" },
  { destination: "Bajura", month: "February", year: "2024", remarks: "Remote and peaceful." },
  { destination: "Kalinchowk", month: "March", year: "2024", remarks: "Snow and fun!" },
  { destination: "Ghandruk", month: "Dec", year: "2023", remarks: "Great views of Annapurna!" },
  { destination: "Dodhara", month: "Oct", year: "2024", remarks: "Longest bridge in Nepal!" },
  { destination: "Bardiya National Park", month: "November", year: "2024", remarks: "Jungle safari and wildlife." },
  { destination: "Kathmandu", month: "December", year: "2023", remarks: "Beautiful scenery of hills and mountains." }
];

// Reference to the table body
const tableBody = document.querySelector(".travel-table tbody");

// Iterate over each entry in the travelData array
travelData.forEach(entry => {
  // Create a new row for the table
  const row = document.createElement("tr");

  // Create and populate the destination cell
  const destinationCell = document.createElement("td");
  destinationCell.classList.add("destination"); // Apply the 'destination' class for styling
  destinationCell.textContent = entry.destination;

  // Create and populate the month cell
  const monthCell = document.createElement("td");
  monthCell.textContent = entry.month;

  // Create and populate the year cell
  const yearCell = document.createElement("td");
  yearCell.textContent = entry.year;

  // Create and populate the remarks cell
  const remarksCell = document.createElement("td");
  remarksCell.textContent = entry.remarks;

  // Append all cells to the row
  row.appendChild(destinationCell);
  row.appendChild(monthCell);
  row.appendChild(yearCell);
  row.appendChild(remarksCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});
