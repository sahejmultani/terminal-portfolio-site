export const viewResume = () => {
  const fileURL =
    "https://drive.google.com/file/d/1BGLxRGDydQkaFaLh5IwdYwijp9dYhyEP/view";

  return (
    <span>
      Here's a link to my resume!{" "}
      <a href={fileURL} target="_blank" rel="noopener noreferrer">
        {fileURL}
      </a>
    </span>
  );
};

export default viewResume;