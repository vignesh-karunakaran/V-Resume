import CV from 'react-cv';
import './App.css';

function App() {
  return (
    <CV personalData={{
        name: 'Vignesh K',
        title: 'Front-end Developer',
        image: 'https://iamvignesh.dev/_next/image?url=%2Fme.jpg&w=256&q=75',
        contacts: [
          { type: 'email', value: 'official2vignesh@gmail.com' },
            { type: 'phone', value: '+91 9840051399' },
            { type: 'location', value: 'India' },
            { type: 'website', value: 'iamvignesh.dev/' },
            { type: 'linkedin', value: 'linkedin.com/in/vignesh-karunakaran-4730039b/' },
            { type: 'twitter', value: 'twitter.com/Vk3y3' },
            { type: 'github', value: 'github.com/vignesh-karunakaran' }
        ]
      }}
      sections= {[{
        type: 'text',
        title: 'Career Profile',
        content: `Experienced Front-end Developer with a demonstrated history of working in the information technology and services industry. Skilled in <b>Javascript</b>, <b>React</b>, <b>Ember</b>, <b>Node</b>, <b>Express</b>, <b>Java</b>, <b>Gulp</b>, <b>HTML</b>, Information Security, and Linux. Strong engineering professional with a Bachelor's Degree focused in Computer Science.`,
        icon: 'usertie'
      }]}

      branding={false}
      />
  );
}

export default App;
