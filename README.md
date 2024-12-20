# Namaste React 💻
The repo containing the codes of the series

## First Episode-> Inception 🥇1️⃣
    --> Learnt the basic of the html, css, js
    --> how to inject react in html
    --> how to render component
    --> how to create nested structure in react
    --> Why jsx is needed


## Second Episode -> Ignite The App 🥈2️⃣
    --> Learnt npm
    --> npm is everything but not node pacakage manager
    --> npm initailization
    --> package.json files and its need
    --> package-lock.json importance
    --> Learnt BUNDLER
    --> Uses and function of BUNDLER
    --> How bundler makes the app faster
    --> Various optimazation made by the bundler
    --> .gitignore file and its content
    --> Transitive dependencies
    --> Browser List specification

## Third Episode -> Laying the Foundation 🥉3️⃣
    --> script for running the app
    --> Learnt JSX
    --> Basics of JSX
    --> JSX --> React.createElement (By Babel) --> ReactElement(js object)---> Html (render)
    --> Functional component
    --> difference between element and component in react
    --> calling components and elements
    --> <ReactComponent/> === <ReactComponent></ReactComponent> && {ReactComponent()}  all are same
    --> {}==> This always us to write js in the jsx
    --> {} injecting data via this can let XSS(Cross Site Scripting)
    --> But react takes care of this by escaping the character 
    --> ALso react treats the content injected in the DOM via jsx as pure string only

## Fourth Episode -> Talk is cheap, show me the code 4️⃣
    --> Tried to build swiggy, zomato like food ordering app
    --> First did the planning of the website
    --> List down the components that will be required
    --> Build the compoents one by one
    --> Passed arguments from one component to another 
    --> Received and process the prop in the another function
    --> Utilized the real time data of the swiggy
    --> Tried to optimized the code
    --> Basic Js conceps too like why key are important in .map method

## Fifth Episode -> Let's get Hooked 5️⃣
    --> Arranging the code in structure like src, components, utils
    --> Not keeping hardcoded value in components
    --> For hardcoded use utils
    --> Hooks in react : JS functions with can mutate state variables
    --> How the data and UI is changed with hooks
    --> Reconcilation Algo: The way react update the DOM in minimal steps based on the changes made
    --> Diffing Algo: The algo which compares the two vitual DOM trees and find out the difference
    --> Virtual DOM: The object which is return by the method React.createElement
    
## Sixth Episode --> Exploring the World 6️⃣
    --> Fetching the data from the api
    --> created own json server using the command 
            npx json-server --watch <filename> --port <port number>
    --> Created the search functionality
    --> Showed cafe according to the search result
    --> added enter key press functionality to the search
    --> Created the shimmer ui for the page to make better user experience


## Seventh Episode --> Finding the Path 7️⃣
    --> Set up the routing in the project
    --> Create a default error page
    --> fetched the data from the swiggy api
    --> Learnt Dynamic Routing 
    --> Showed the menu of the restuartants via the swiggy api

## Eight Episode --> Let's get classy 8️⃣
    --> Learnt about the class componnent
    --> Difference between the functional and clas components
    --> React Life cycle
        Parent constructor()
        Parent render()

            first Child constructor()
            first Child render()

            Second Child constructor()
            Second Child render()

            first Child componentDidMount()
            Second Child componentDidMount()
        Parent componentDidMount()

![image](https://github.com/Rahul1227/Namaste-React/blob/main/8%20episode/picture/React%20Life%20Cycle.png)

    --> What happens in each one 
        ------Mounting------
            constructor(dummy)
            render(dummy)
            componentDidMount(Api Call)

        ------Update---------
            render(API data)
            componentDidUpdate(make comparisions)

        -----Unmounting-------
            componentWillUnmount()



