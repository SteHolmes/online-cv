import Accordion from '@/components/Accordion/Accordion'
import LogoGrid from '@/components/LogoGrid/LogoGrid'
import BackButton from '@/components/Buttons/BackButton'
import AnimatedSection from '@/components/AnimatedSection/AnimatedSection'

export default function Experience() {

  const workExperience = [
    {
      id: 1,
      title: 'Front-end Developer',
      location: 'Qualsafe, Bradford (Remote)',
      dates: 'Nov 2021 to Present',
      content: 
      <div>
        <p>In my current role I work in a team developing and maintaining four web apps built in Vue JS, Nuxt and React. These projects have exposed me to the full app lifecycle, including the design phase and wireframing using Figma, building new features and apps from the ground up, carrying out upgrades, making incremental improvements based on analytics data, adhering to efficient Git branching strategies for releasing features, and organising deployments to multiple environments. I have also been instrumental in encouraging better accessibility standards and UX principles, constantly striving to improve the services we offer.</p>
        <h5>Experience Overview:</h5>
        <ul>
          <li>Vue 2/3 (Full rebuild of two apps and upgrade of a third to improve app performance and make use of Vue 3 features to improve dev efficiency)</li>
          <li>Nuxt 2 and Nuxt Bridge (worked on upgrade to secure vulnerabilities and reduce technical debt)</li>
          <li>React (Redesign and rebuild of a &lsquo;first-aid requirements calculator&rsquo; app re-written in React including Redux and Typescript)</li>
          <li>Vue CLI, Vite and Webpack</li>
          <li>Typescript (Use TS on any new or upgraded apps to create more robust code and reduce bugs)</li>
          <li>State management (Pinia, Redux, VueX)</li>
          <li>Unit testing - Jest, Vitest and Vue Test Utils</li>
          <li>Monitoring user behaviour with Google Analytics and Hotjar to inform improvements and updates.</li>
          <li>Axios, APIs and handling authentication with JWTs</li>
          <li>UI libraries (Element+, PrimeVue)</li>
          <li>Designing components, UI/UX and brand guidelines (Figma, Histoire and Inkscape)</li>
          <li>Accessibility standards / keyboard and screen-reader testing (to improve UX and increase potential for selling services to public sector organisations)</li>
          <li>Gitlab and basic experience with configuring deployment pipelines.</li>
          <li>Basic understanding of Docker</li>
        </ul>
      </div>
    },
    {
      id: 2,
      title: '.NET Front-end Developer',
      location: 'CTI Digital, Manchester',
      dates: 'July 2019 to November 2021',
      content: 
      <div>
        <p>This fast-paced role exposed me to a large variety of different projects and technologies including Vue, React and Umbraco development. I worked with several clients including Balfour Beatty Homes, Manx Telecom, London Transport Museum, Durham University, and took lead on the FE of a project for the Maritime and Coastguard Agency using Node.js/Express, and the GOV.UK design system.</p>
        <h5>Experience Overview:</h5>
        <ul>
          <li>HTML5, CSS3 &ndash; Extensive experience with modular approaches using SCSS (or Tailwind) to scope styles and using variables/mixins to encourage code re-use &ndash; also building responsive layouts with Flexbox, Grid and media queries and use of keyframe animation for interactive elements.</li>
          <li>Javascript, React and Vue</li>
          <li>js and Express (building REST API to access data and generate)</li>
          <li>Umbraco CMS development and templating engines (Sites built with Razor templates, or headless front-ends retrieving data via an API)</li>
          <li>Accessibility (implemented WCAG 2.2 AA standard for a GOV.UK web app)</li>
          <li>Authentication (integration with Microsoft Azure Authenticator)</li>
          <li>Atomic design principles, and DRY, re-usable code</li>
          <li>Browser compatibility testing (familiarity with Browserstack)</li>
          <li>Working from designs, prototypes and/or wireframes (use of inVision, Figma and basic image manipulation in Photoshop/Inkscape)</li>
          <li>Developing component libraries and site prototypes using Storybook or Patternlab</li>
          <li>Familiarity with Agile processes and working in sprints</li>
        </ul>
      </div>
    },
    {
      id: 3,
      title: 'Freelancing/Upskilling',
      dates: 'July 2018 to June 2019',
      content: 
      <div>
        <p>In July 2018 I took a break from employment to look after my 1-year old son and began studying online to gain additional skills required to focus on a career in web development. I took on some unpaid freelance projects to put this into practice and cement the knowledge gained through online courses.</p>
      </div>
    },
    {
      id: 4,
      title: 'Website Coordinator - The Christie NHS Foundation Trust',
      location: 'Manchester',
      dates: 'December 2014 to July 2018',
      content: 
      <div>
        <p>This role involved maintaining and creating content for two websites for The Christie NHS Foundation Trust and The Christie Charity, as well as building content and features for the staff intranet using HTML, CSS and basic Javascript.</p>
      </div>
    }
  ]

  const renderedWorkExperience = workExperience.map((item) => {
    const itemDetails = item.location ? `${item.location} - ${item.dates}` : item.dates
    
    return (
      <Accordion key={item.id} title={`${item.title}`} details={itemDetails}>
        {item.content}
      </Accordion>
    )
  })

  const trainingList = [
    "Intensive one-week Javascript course - StayAhead Training, London",
    "Colt Steele's Web Developer Bootcamp - Udemy",
    "Colt Steele's Advanced Web Developer Bootcamp (React Track) - Udemy",
    "Stephen Grider's Modern React with Redux - Udemy",
    "Vue Fundamentals - Pluralsight",
    "React Fundamentals - Pluralsight",
  ]

  const renderedTrainingItems = trainingList.map((item, index) => {
    return (
      <li key={index}>{ item }</li>
    )
  })

  return (
    <div className="pageTransition">
      <div className="pageContent">
        <BackButton />
        <h1>Experience</h1>
        <section>
          <div className="headingBadge"><h3>Work Experience</h3></div>
          <div className="contentCard">{ renderedWorkExperience }</div>
        </section>
  
        <AnimatedSection>
          <div className="headingBadge"><h3>Education</h3></div>
          <div className="contentCard">
            <p>BA (Hons) 2:1 in Graphic Design</p>
            <p>Sheffield Hallam University – Sheffield</p>
            <p>September 2005 to July 2008</p>
            <Accordion title="Further Training">
            <ul>
              { renderedTrainingItems }
            </ul>
            </Accordion>
          </div>
        </AnimatedSection>
        <AnimatedSection>
          <div className="headingBadge"><h3>Skills Overview</h3></div>
          <div className="contentCard"><LogoGrid /></div>
        </AnimatedSection>
      </div>
    </div>
  );
}