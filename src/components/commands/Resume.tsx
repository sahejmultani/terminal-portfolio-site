export const viewResume = () => {
  const fileURL = "https://drive.google.com/file/d/1BGLxRGDydQkaFaLh5IwdYwijp9dYhyEP/view";

  console.log("Attempting to open:", fileURL);

  window.open(fileURL, "_blank", "noopener,noreferrer");

  return ("Resume Link: " + fileURL);
};
