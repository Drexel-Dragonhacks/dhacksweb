// Importing all sponsors logos from Assets
import taskade from "./Assets/sponsorsLogos/taskade.png";
import accenture from "./Assets/sponsorsLogos/accenture.svg";
import vanguard from "./Assets/sponsorsLogos/vanguard.svg";
import linode from "./Assets/sponsorsLogos/linode.svg";
import ece from "./Assets/sponsorsLogos/ece.png";
import echoAR from "./Assets/sponsorsLogos/echoAR.png";
import ieee from "./Assets/sponsorsLogos/ieee.png";
import pass from "./Assets/sponsorsLogos/1pass.png";
import studentlife from "./Assets/sponsorsLogos/studentlife.jpeg";
import sketch from "./Assets/sponsorsLogos/sketch.png";
//import sublime from "./Assets/sponsorsLogos/sublime.png";
import ballinger from "./Assets/sponsorsLogos/ballinger.jpg";
import honors from "./Assets/sponsorsLogos/drexelhonors.png";
import jetbrains from "./Assets/sponsorsLogos/jetbrains.png";
import logo from "./Assets/logo.png"
/** Put all your sponsors logo inside folder `sponsorLogos`
 * and import them in the above and update `src` in sponsorLogos
 * or you can provide a cloud link in src
 */

// Importing all Team members images  from Assets

/** Put all your Team member image inside folder `Team Images`
 * and import them like in the above and update src in TeamInfo
 * or you can provide a cloud link in src also
 */


const TOP_SECTION = {
  TITLE: "DragonHacks 2022",
  Typed_effect: ["24 hours of creation", "Win awesome prizes"],
  IMG_SRC: logo,
  SHORT_DESCRIPTION:
    "Join us on February 19th-20th, 2022 for 24 hours of creation, innovation, & fun.",
};

const SOCIALS = {
  instagram: "https://www.instagram.com/dragonhacks_ieee/",
  linkedin: "https://www.linkedin.com/company/dragonhacks/",
  twitter: "https://twitter.com/dragonhacksieee/",
  facebook: "https://www.facebook.com/DragonHacksIEEE/",
  email: "mailto:teamdragonhacks@gmail.com",
  mail: "teamdragonhacks@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "Who We Are",
  LONG_DESCRIPTION:
    "Welcome to DragonHacks 2022! DragonHacks is Drexel University's 24-hour hackathon which will be hosted by Drexel University IEEE in Winter 2022. The 2022 edition is bringing the brightest minds of the world's best schools to spend 24 hours creating groundbreaking new products from scratch! This year, we are planning for a digital-first hybrid hackathon experience which means that our hackathon will have both in-person and virtual events. Despite the impact of the pandemic, we are making efforts to make the event experience as close to the on-site hackathon as possible for virtual participants. There will be virtual meet-ups, team-building events, tech talks, and workshops, as well as a number of other fun events, all in the course of 24 hours.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUNFBQME44TzJZWDc2UFgwTUtLN0xDQVYyUi4u"
  },
  JOIN_TEAM: {
    required: true,
    src: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAN__jZdNhdUOUhEQkJSRk02OEU4SlBMTUdYOFIxOTNZSy4u"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

/*
 * Insert only 3 or less then 3 members per array in `TeamInfo`, you can
 * create as many arrays you want all team members will be rendered
 * in a group of 3.
 */


/*
 * Only put 3 logos per array inside `sponsorLogos`, you can
 * create as many arrays you want all logos will be rendered
 * in a group of 3.
 */

const sponsorLogos = [
  [{src: ieee}, {src: vanguard}, {src: echoAR}], //Array 1
  [{src: taskade}, {src: accenture}, {src: sketch}], //Array 2
  [{src: linode}, {src: jetbrains}, {src: ballinger}], //Array 3
  [{src: ece}, {src: honors}, {src: studentlife}] //Array 4
];

const frequentlyAskedQuestions  = [
  [
    [
      {
        label: "What is a hackathon?",
        content:
        'A hackathon is a 24 hour event where "hackers" all over the globe will collaborate on creating a functioning software and hardware by the end of the event.'      
      },
      {
        label: "Who can attend?",
        content: "DragonHacks is open to all university and high school students are welcome as well so long as they are 18 years of age or older. No prior hackathon or experience is necessary since the event will have workshops and plenty of learning opportunities. Unfortunately, due to Covid-19 school policies, only Drexel students will be able to attend the event in person. We encourage students from other schools to join us virtually on Gather.town!"
      },
      {
        label: "What if I don't have a team or idea?",
        content: "If you do not currently have a team or idea, do not fear! Many hackers come in without teams or ideas. There are a number of ways to find teammates, and trust us, hacking with a team is a lot more fun! You will be invited to the official DragonHacks 2022 Slack Workspace as soon as you register for the event, where we will have a team formation channel dedicated to team building and searching for teammates. We will also be holding a couple of team formation events before the kickoff and after the opening ceremony. As for an idea, check out the DragonHacks 2022 Devpost challenges for inspiration on what problems to tackle."
      },
      {
        label: "How many team members can I have?",
        content: "Each team can have a maximum of 4 members."
      },
      {
        label: "Do you provide any hardware?",
        content: "Traditionally, we have always had one of the best hardware labs across the list of hackathons. Unfortunately, since it is a hybrid event, we will only be able to provide hardware resources to in-person participants."
      },
    ],
    [
      {
        label: "How is the application process?",
        content: "Just register on the site! If space becomes limited, we will review applications. Registration is individual and teams can be formed the day of the event."
      },
      {
        label: "Are there prizes?",
        content: "There are plenty of prizes to be won at DragonHacks 2022! A unique element of DragonHacks is the jaw-dropping prize pool where the winner gets the first choice of prizes, down to the 2nd runner-up, with every member choosing one prize each. All projects must be submitted on Devpost in order to be eligible for judging. Apart from that, your project will be considered for every category/challenge you opt to participate in for a chance to win the specific categorical & sponsored prizes. To get an idea of the kind of prizes we have, check out the prize list for last year here: https://dragonhacks-2021.devpost.com/ "
      },
      {
        label: "How much will this cost me?",
        content: "Attendance is free. We will also be shipping merch and SWAG items directly to every participant after the event."
      },
      {
        label:"How do we submit our projects?",
        content: "All submissions will be due on Sunday at 1:00 PM EST on the DragonHacks 2022 Devpost site (coming live soon). We highly recommend you submit at 12:00 PM EST to give yourself some wiggle room for any last-minute technical issues. Team registrations on Devpost should be done by 10:00 PM EST on Saturday itself and all projects must be submitted on Devpost in order to be eligible for judging and prizes!"
      },
      {
        label: "When and where is it?",
        content: "The event starts at 12:00 PM (EST) on February 19th. This event will be hybrid. It will be held in-person, as well as virtually on a platform called Gather (https://gather.town). More details about the event will be emailed to you closer to the event date!"
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  sponsorLogos,
  frequentlyAskedQuestions
};
