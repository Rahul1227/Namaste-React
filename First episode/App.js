// const heading =React.createElement('h1',
//     {
//         id:'heading'
//     },
//     "Hellow from react"
// );

/*
    How to print Nested strucute in react

    <div id="parent">
        <div id="child">
            <h1>This is h1 tag</h1>
            <h5>This is h5 tag</h5>
        </div>
    <div>
*/

const nested=React.createElement('div',{id:'parent'},
    React.createElement('div',{id:'child'},
        [
            React.createElement('h1',{},'This is the h1 tag'),
            React.createElement('h5',{},'This is the h5 tag')

        ]
    )
)


const root=ReactDOM.createRoot(document.querySelector('#root'));

root.render(nested)