export const viewResume = () => {
  const fileURL = "https://drive.google.com/file/d/1saujzosrQ3xcldRgv5bayPz0h97jbPJC/view?usp=sharing"; // Ensure this path is correct

  // Open the URL in a new tab
  window.open(fileURL, "_blank");

  console.log("Attempting to open:", fileURL); // Debugging line
};
