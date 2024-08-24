// RotatingTitle.js

const RotatingTitle = () => {
  const titles = [
    "Senior Data Scientist",
    "Petroleum Engineer (Specialist)",
    "Product Manager"
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 3000); // Change title every 3 seconds

    return () => clearInterval(intervalId);
  }, []);

  return React.createElement(
    'div',
    { className: 'rotating-title' },
    React.createElement(
      'h1',
      { className: 'text-xl font-bold transition-opacity duration-500 ease-in-out' },
      titles[currentTitleIndex]
    )
  );
};

// Render the RotatingTitle component
document.addEventListener('DOMContentLoaded', () => {
  const rotatingTitleContainer = document.getElementById('rotating-title');
  if (rotatingTitleContainer) {
    ReactDOM.render(React.createElement(RotatingTitle), rotatingTitleContainer);
  }
});