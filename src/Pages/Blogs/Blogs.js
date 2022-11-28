import React from 'react';

const Blogs = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <h2 className="max-w-lg mb-6 font-sans text-2xl md:text-3xl lg:text-4xl  font-bold leading-none tracking-tight md:mx-auto">
                        Welcome to The Blog Page
                    </h2>
                    <p className="text-base  md:text-lg">
                        Please read some blogs written by me. Hope it will help you.
                    </p>
                </div>
            </div>
            <div className="max-w-screen-xl sm:mx-auto">
                <div className="grid grid-cols-1 gap-16 row-gap-8">
                    <div className="space-y-8">
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What are the different ways to manage a state in a React application?
                            </p>
                            <p className="text-gray-600">
                                There are four main types of state we need to properly manage in your React apps:
                            </p>
                            <ul className='list-disc ml-8 text-gray-600'>
                                <li>Local state</li>
                                <li>Global state</li>
                                <li>Server state</li>
                                <li>URL state</li>
                            </ul>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                How does prototypical inheritance work?
                            </p>
                            <p className="text-gray-600">
                                The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                What is a unit test? Why should we write unit tests?
                            </p>
                            <p className="text-gray-600">
                                The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                            </p>
                        </div>
                        <div>
                            <p className="mb-4 text-xl font-medium">
                                React vs. Angular vs. Vue?
                            </p>
                            <p className="text-gray-600">
                                <span className='text-semibold'>Angular:</span> has a steep learning curve, considering it is a complete solution, and mastering Angular requires you to learn associated concepts like TypeScript and MVC. Even though it takes time to learn Angular, the investment pays dividends in terms of understanding how the front end works.<br />

                                <span className='text-semibold'>React:</span> offers a Getting Started guide that should help one set up React in about an hour. The documentation is thorough and complete, with solutions to common issues already present on Stack Overflow. React is not a complete framework and advanced features require the use of third-party libraries. This makes the learning curve of the core framework not so steep but depends on the path you take with additional functionality. However, learning to use React does not necessarily mean that you are using the best practices. <br />

                                <span className='text-semibold'>Vue:</span> provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option. However, simplicity and flexibility of Vue is a double-edged sword — it allows poor code, making it difficult to debug and test.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Blogs;