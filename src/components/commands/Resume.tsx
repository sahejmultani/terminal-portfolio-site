export const viewResume = () => {
  const fileURL = "https://drive.google.com/file/d/1BGLxRGDydQkaFaLh5IwdYwijp9dYhyEP/view"; // Ensure this path is correct

  // Open the URL in a new tab
  window.open(fileURL, "_blank");

  console.log("Attempting to open:", fileURL); // Debugging line
};
