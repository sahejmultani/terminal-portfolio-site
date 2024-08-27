export const viewResume = () => {
    const link = document.createElement("a");
    const fileURL = "https://drive.google.com/file/d/1saujzosrQ3xcldRgv5bayPz0h97jbPJC/view?usp=sharing"; // Ensure this path is correct
    window.open(fileURL, "_blank");

    console.log("Attempting to download from:", link.href); // Debugging line
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

  
  };
