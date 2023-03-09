import './App.css';
import { BsArrowDown, BsArrowUp } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

import sourav from './assets/saurav.jpg';
import ankita from './assets/ankita.jpg';
import saumya from './assets/saumya.jpg';
import keshav from './assets/keshav.jpg';
import prankur from './assets/prankur.jpg';


function App() {

  const [selected, setSelected] = useState(0);
  const [rotations, setRotations] = useState([200, 235, 270, 305, 340]);
  const bgColors = ['#c5f8c7', '#7abd87'];
  const primaryColor = ['#4caf50', '#609b6c'];
  const [color, setColor] = useState(0);

  const data = [
    {
      name : 'Prankur Gupta',
      title: 'SDE @Amazon',
      ratings: 4.9,
      roundedRatings: 4.5,
      imgUrl: prankur,
      bio: 'I am Prankur Gupta, I am working as a Software\nDevelopment Engineer at Amazon. I can guide\nyou throughout your preparation phase. Trust me\nwhen I tell you this I know the exact recipe to\ncrack the coding interview rounds Of top\ncompanies for the SDE role,'
    },
    {
      name: 'Sourav Pal',
      title: 'SDE-2 @Amazon',
      ratings: 5.0,
      roundedRatings: 5.0,
      imgUrl: sourav,
      bio: 'I am a Senior Software Developer American\nExpress. Have been passionately solving\nLeetcode, HackerRank, Codechef, Codeforces\nproblems, and enthusiastically solving\nproblems with the analysis of space.'
    },
    {
      name: 'Saumya Singh',
      title: 'Software Engineer @Red Hat',
      ratings: 5.0,
      roundedRatings: 5.0,
      imgUrl: saumya,
      bio: `Engineer @RedHat I Program Manager'20\n@GirIScript I GHCI Scholar I International Open\nSource Award finalist by Red Hat I Winner SIH,\n211.121 Award I Google connect Winneö19 1\nMentor GCI`
    },
    {
      name: 'Keshav Bathla',
      title: 'SDE-1 @Groww',
      ratings: 5.0,
      roundedRatings: 5.0,
      imgUrl: keshav,
      bio: `A curious learner, on a way to become a\nkickass developer who writes Python, Java,\nJavascript and Go I Software Engineer\n@Groww I Ex-SOftware Engineer @Grofers I\nTech Consultant I Freelancer I Open Source\nDeveloper I Coding Instructor`
    },
    {
      name: 'Ankita',
      title: 'ML Engineer @Firework',
      ratings: 5.0,
      roundedRatings: 5.0,
      imgUrl: ankita,
      bio: `Working my way to build the world's future\nproduct. Machine Learning Engineer, Data and\nTechnology Evangelist I breathe in developing\nsoftware with intelligence. I have been involved\nwith startups like DailyHunt, Firework Hq,\nMagilHub to build the A1 end of their products.`
    }
  ];


  const handleRevolveNextAnimation = () => {
    const mentor = document.querySelectorAll('.mentor');
    mentor.forEach((item, index) => {
      rotations[index] = rotations[index] + 35;
      if (rotations[index] >=360){
        rotations[index] = 200;
      }
      item.style.transform = `rotate(+${rotations[index]}deg) translateX(300px)`;
    });
  }

  const handleRevolvePrevAnimation = () => {
    const mentor = document.querySelectorAll('.mentor');
    mentor.forEach((item, index) => {
      rotations[index] = rotations[index] - 35;
      if (rotations[index] < 200){
        rotations[index] = 340;
      }
      item.style.transform = `rotate(+${rotations[index]}deg) translateX(300px)`;
    });
  }

  const mainImageAnimationNext = () => {
    const mainImage = document.querySelector('.circle-image');
    mainImage.style.transition = 'all 0.5s ease-in-out';
    mainImage.style.transform = 'translate(-50%, 50%) rotate(50deg) scale(0.7)';
    mainImage.classList.add('fade');
    setTimeout(() => {
      mainImage.style.transform = 'translate(-50%, 50%) rotate(0deg) scale(1)';
      mainImage.classList.remove('fade');
    },500);
  }

  const mainImageAnimationPrev = () => {
    const mainImage = document.querySelector('.circle-image');
    mainImage.style.transition = 'all 0.5s ease-in-out';
    mainImage.style.transform = 'translate(-50%, 50%) rotate(-50deg) scale(0.7)';
    mainImage.classList.add('fade');
    setTimeout(() => {
      mainImage.style.transform = 'translate(-50%, 50%) rotate(0deg) scale(1)';
      mainImage.classList.remove('fade');
    },500);
  }

  const slideNextAnimation = () => {
    const nameBox = document.querySelector('.name-container');
    nameBox.style.transition = 'all 0.5s ease-in-out';
    nameBox.style.transform = 'translate(-50%, 270%) translateX(100%)';
    nameBox.classList.add('fade');
    setTimeout(() => {
      nameBox.style.transform = 'translate(-50%, 270%) translateX(0%)';
      nameBox.classList.remove('fade');
    },500);
  }

  const slidePrevAnimation = () => {
    const nameBox = document.querySelector('.name-container');
    nameBox.style.transition = 'all 0.5s ease-in-out';
    nameBox.style.transform = 'translate(-50%, 270%) translateX(-100%)';
    nameBox.classList.add('fade');
    setTimeout(() => {
      nameBox.style.transform = 'translate(-50%, 270%) translateX(0%)';
      nameBox.classList.remove('fade');
    },500);
  }

  const handleDown = () => {
    handleRevolvePrevAnimation();
    mainImageAnimationPrev();
    slidePrevAnimation();
    setSelected((selected + 1) % data.length);
    setColor((color +1)%bgColors.length);
  }

  const handleUp = () => {
    handleRevolveNextAnimation();
    mainImageAnimationNext();
    slideNextAnimation();
    setSelected((selected - 1 + 5) % data.length);
    setColor((color +1)%bgColors.length);
  }



  return (
    <div className="App">
      <div className = 'details d-flex flex-column justify-content-center align-items-start'>
        <h2 className='ratings' style={{
          color: primaryColor[color]
        }}>{data[selected]?.ratings}</h2>
        <Rating
          name='mentor-rating'
          value={data[selected]?.roundedRatings}
          precision={0.5}
          readOnly
          style={{
            color: primaryColor[color]
          }}
        />
        <h4 className='mentor-name'>{data[selected]?.name}</h4>
        <h5 className='mentor-title'>{data[selected]?.title}</h5>
        <p className='mentor-bio'>{data[selected]?.bio}</p>
        <button className='book-session'
          style={{
            backgroundColor: primaryColor[color]
          }}
        >Book a session</button>
      </div>
      <div className = 'circle'
        style={{
          backgroundColor: bgColors[color]
        }}
      >
        <div className = 'circle-image d-flex flex-row justify-content-center align-items-center'>
          <img
            src={data[selected]?.imgUrl}
            alt={data[selected]?.name}
            className='selected-image'
          />
        </div>
        <div className = 'd-flex flex-row justify-content-center align-items-center name-container'>
          <h2 className='selected-mentor-name'>{data[selected]?.name}</h2>
        </div>
      </div>
      <div className = 'circle-overlay'
        style={{
          backgroundColor: bgColors[color]
        }}
      >
        <div className = 'circle-border'>
          <div className = 'mentor'>
            <img
              src={data[3].imgUrl}
              alt={data[3].name}
              className='mentor-image mimg-3'
            />
          </div>
          <div className = 'mentor'>
            <img
              src={data[4].imgUrl}
              alt={data[4].name}
              className='mentor-image mimg-4'
            />
          </div>
          <div className = 'mentor'>
            <img
              src={data[0].imgUrl}
              alt={data[0].name}
              className='mentor-image mimg-0'
            />
          </div>
          <div className = 'mentor'>
            <img
              src={data[1].imgUrl}
              alt={data[1].name}
              className='mentor-image mimg-1'
            />
          </div>
          <div className = 'mentor'>
            <img
              src={data[2].imgUrl}
              alt={data[2].name}
              className='mentor-image mimg-2'
            />
          </div>
        </div>
      </div>
      <div className = 'circle'>
        <div className = 'circle-border-overlay'>
          <div className = 'd-flex flex-row justify-content-center align-items-center  circle-border-inner-left' style={{
            backgroundColor: primaryColor[color]
          }} onClick={handleDown}>
            <BsArrowUp 
              style={{
                color: 'white',
                width: '50%',
                height: '50%',
              }}
            />
          </div>
          <div className = 'd-flex flex-row justify-content-center align-items-center circle-border-inner-right' style={{
            backgroundColor: primaryColor[color]
          }} onClick={handleUp}>
            <BsArrowDown
              style={{
                color: 'white',
                width: '50%',
                height: '50%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
