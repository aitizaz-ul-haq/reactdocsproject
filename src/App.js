
import IntroducingJSX from "./docs/main_concepts/introducing_jsx";
import RenderingElements from "./docs/main_concepts/rendering_elements";
import ComponentsAndProps from "./docs/main_concepts/components_and_props";
import HandlingEvents from "./docs/main_concepts/handling_events";
import ConditionalRendering from "./docs/main_concepts/conditional_rendering";
import ListandKeys from "./docs/main_concepts/lists_and_keys";
// import Forms from "./docs/main_concepts/forms";
import LiftingTheStateUp from "./docs/main_concepts/lifting_state_up";

const messages = ['React', 'Re: React', 'Re:Re: React'];

const userdata = [
  {
    "id": "1",
    "name": "aitaizaz",
    "profession": "webdeveloper"
  },
  {
    "id": "2",
    "name": "hamza",
    "profession": "webdeveloper"
  },
  {
    "id": "3",
    "name": "hasnain",
    "profession": "webdeveloper"
  },
  {
    "id": "4",
    "name": "samairali",
    "profession": "webdeveloper"
  },
  {
    "id": "5",
    "name": "usmanbugti",
    "profession": "webdeveloper"
  }
]

const numberset = [11, 12, 13, 14, 15];

const indexedData = [
  {
    "name": "qasim"
  },
  {
    "name": "asim"
  },
  {
    "name": "salim"
  },
  {
    "name": "nazim"
  }
];


const posts = [
  { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', content: 'You can install React from npm.' }
];

function App() {
  return (
    <>
      {/* <IntroducingJSX /> */}
      {/* <RenderingElements /> */}
      {/* <ComponentsAndProps arr={data} /> */}
      {/* <HandlingEvents /> */}
      {/* <ConditionalRendering unreadMessages={messages} /> */}
      {/* <ListandKeys data={posts} /> */}
      {/* <Forms /> */}
      <LiftingTheStateUp />
    </>
  );
}

export default App; 
