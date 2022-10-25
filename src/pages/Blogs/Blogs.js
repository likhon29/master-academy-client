import React from "react";
import "./Blogs.css";
import RR from "../../assets/images/react-router.png";
import Hooks from "../../assets/images/hook.png";
import Context from "../../assets/images/context-api.png";
import { Button, Card } from "react-bootstrap";
const Blogs = () => {
  return (
    <div className="container ">
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src={RR} />
        <Card.Body>
          <Card.Title className="text-primary">What is the purpose of React-Router-Dom?</Card.Title>
          <Card.Text>
            <p>
              React Router DOM is an npm package that enables you to implement
              dynamic routing in a web app. It allows you to display pages and
              allow users to navigate them. It is a fully-featured client and
              server-side routing library for React.
            </p>
            <p>
              React Router Dom is used to build single-page applications i.e.
              applications that have many pages or components but the page is
              never refreshed instead the content is dynamically fetched based
              on the URL. This process is called Routing and it is made possible
              with the help of React Router Dom.
            </p>
            <p>
              React Router Dom is used also for load data from api or other
              resources and also used it for use those resources or data in
              different components and route.
            </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src={Context} />
        <Card.Body>
          <Card.Title className="text-primary">How does Context Api works?</Card.Title>
          <Card.Text>
            <p>
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux.
            </p>
            <img
              src="https://uploads.toptal.io/blog/image/129071/toptal-blog-image-1549323314875-d6bc9c753a4c9ac2911e8af17732023d.png"
              width="50%"
              alt=""
            />
            <p>
              1. Initialize the Context First, we need to create the context,
              which we can later use to create providers and consumers.
            </p>
            <p>
              2. Create the Provider Once that’s done, we can import the context
              and use it to create our provider, which we’re calling MyProvider.
              In it, we initialize a state with some values, which you can share
              via value prop our provider component. In our example, we’re
              sharing this.state.cars along with a couple of methods that
              manipulate the state. Think of these methods as reducers in Redux.
            </p>
            <p>
              3. Create the Consumer We’ll need to import the context again and
              wrap our component with it which injects the context argument in
              the component. Afterward, it’s pretty straight forward. You use
              context, the same way you would use props. It holds all the values
              we’ve shared in MyProducer, we just need to use it!
            </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
      <Card className="mx-auto w-75">
        <Card.Img variant="top" src={Hooks} />
        <Card.Body>
          <Card.Title className="text-primary">What is the useRef hook?</Card.Title>
          <Card.Text>
            <p>
              The useRef hook is the new addition in React 16.8. Before
              proceeding to this article there is a prerequisite to know about
              the ref in react. The useRef is a hook that allows to directly
              create a reference to the DOM element in the functional component.
              <p>Syntax: const refContainer = useRef(initialValue);</p>
            </p>
            <p>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component. </p>
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
