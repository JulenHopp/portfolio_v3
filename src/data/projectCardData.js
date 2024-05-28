import tareImage from '../assets/images/projects/tare.png';
import plantCareImage from '../assets/images/projects/plantCareProject.jpeg';
import magneticFieldImage from '../assets/images/projects/magneticFieldProject.png';
import calculatorImage from '../assets/images/projects/calculatorProject.png';
import financialAnalysisImage from '../assets/images/projects/financialAnalisisProject.png';
import f1SimulationImage from '../assets/images/projects/f1SimulationProject.png';

const projectCardData = [
  {
    id: 1,
    image: tareImage,
    title: 'TARE.STUDY',
    description: `Developed a smart platform to support teachers by visualizing 
                  classroom performance, generating personalized lesson plans, 
                  and managing student data. Utilized React for a responsive 
                  frontend, Node.js for backend operations, and integrated 
                  AI with OpenAI's GPT-3.5.`,
    tools: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI GPT-3.5'],
    links: [
      {
        name: 'Code',
        url: 'https://github.com/JulenHopp/tare.study.git'
      }
    ]    
  },
  {
    id: 2,
    image: plantCareImage,
    title: 'Automated Plant Care System',
    description: `Implemented an ESP32-based system with environmental 
                sensors, utilizing JavaScript, SQL, and C++. Automated 
                irrigation for optimal plant maintenance. Expertise in 
                circuit design and data analysis.`,
    tools: ['React', 'Node.js', 'SQL', 'C++'],
    links: [
      {
        name: 'Code',
        url: 'https://github.com/JulenHopp/PlantGPT.git'
      }
    ]    
  },
  {
    id: 3,
    image: magneticFieldImage,
    title: 'Magnetic Field Simulation',
    description: `Developed a MATLAB project for interactive 3D and 2D 
            visualization of a solenoid's magnetic field. Users can dynamically 
            adjust parameters for a real-time impact on the field. The tool serves 
            both professionals and students, offering an intuitive way to 
            understand electromagnetism.`,
    tools: ['MATLAB', 'Physics', 'Mathematics'],
    links: [
      {
        name: 'Code',
        url: 'https://github.com/JulenHopp/solenoid_electromagnetic_field_simulation.git'
      }
    ]
  },
  {
    id: 4,
    image: calculatorImage,
    title: 'Web Calculator',
    description: `Designed with HTML, CSS, and JavaScript, this web calculator 
                ensures precise calculations with a swift and reliable user 
                experience. Combining functionality with an intuitive interface, 
                it stands as a testament to efficient design in web development.`,
    tools: ['HTML', 'CSS', 'JavaScript'],
    links: [
      {
        name: 'Code',
        url: 'https://github.com/JulenHopp/calculator.git'
      }
    ]
  },
  {
    id: 5,
    image: financialAnalysisImage,
    title: 'Personal Financial Data Analysis & Linear Regression',
    description: `Conducted a comprehensive personal financial data analysis 
                project using Python, Pandas, Sklearn, and Numpy. Employed 
                for identify key financial patterns, and developed a Sklearn 
                linear regression model for predicting financial outcomes.`,
    tools: ['Python', 'scikit-learn', 'Pandas', 'Numpy'],
    links: [
      {
        name: 'Code',
        url: 'https://github.com/JulenHopp/personal-finance.git'
      }
    ]
  },
  {
    id: 6,
    image: f1SimulationImage,
    title: 'Personal Financial Data Analysis & Linear Regression',
    description: `Designed an intricate F1 racetrack simulation using 
                MATLAB, seamlessly integrating fundamental physics concepts. 
                Allows dynamic track creation, comprehensive track analysis, 
                and realistic car simulation with user-defined parameters.`,
    tools: ['MATLAB', 'Physics', 'Mathematics'],
    links: [
      {
        name: 'Code',
        url: 'https://github.com/JulenHopp/f1-simulation.git'
      }
    ]
  },
];

export default projectCardData;
