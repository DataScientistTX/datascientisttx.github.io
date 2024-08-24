// RotatingTitle.js

const RotatingTitle = () => {
  const titles = [
    "Senior Data Scientist",
    "Engineering Specialist",
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
    'span',
    { className: 'home__rotating-title' },
    titles[currentTitleIndex]
  );
};

// Render the RotatingTitle component
document.addEventListener('DOMContentLoaded', () => {
  const rotatingTitleContainer = document.getElementById('rotating-title');
  if (rotatingTitleContainer) {
    ReactDOM.render(React.createElement(RotatingTitle), rotatingTitleContainer);
  }
});