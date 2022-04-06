import React, {useState} from 'react';
import {saveAs} from 'file-saver';
import {GlobalStyle, ImageContainer, Wrapper} from './styles';
import img from '../public/sejobasic-resume.jpg';
import Header from './components/Header';
import Footer from './components/Footer';
import ImgBox from './components/ImgBox';

const matrix = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [0, 5],
  [1, 5],
  [2, 5],
  [3, 5]
];

function App() {
  const [distance, setDistance] = useState(1);

  function easing(num) {
    return Math.pow(num, 3);
  }

  function calculateDistance([x, y]) {
    // Store an array that contains pixel position of center window
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    // Store the maximum possible value for the hypotenuse or the maximum distance of browser center
    const maxHypot = Math.hypot(center[0], center[1]);
    // Calculate how far away the cursor is from the center of the window
    const hypot = Math.hypot(center[0] - x, center[1] - y);
    // Calculate the distance as a percentage based off the current value and max value
    const distance = hypot / maxHypot;
    const easeDistance = easing(distance);
    setDistance(easeDistance);
  }

  function handleMove({clientX, clientY}) {
    calculateDistance([clientX, clientY]);
  }

  function handleTouch({touches}) {
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  }

  function downloadImage() {
    saveAs(img, 'sejobasic-resume.jpg'); // Put your image url here.
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Footer />
      <Wrapper
        onClick={downloadImage}
        onMouseMove={handleMove}
        onTouchMove={handleTouch}
      >
        <ImageContainer>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  );
}
export default App;
