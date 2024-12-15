imp;
const nested = React.createElement('div', {
    id: 'parent'
}, React.createElement('div', {
    id: 'child'
}, [
    React.createElement('h1', {}, 'This is the h1 tag'),
    React.createElement('h5', {}, 'This is the h5 tag')
]));
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(nested);

//# sourceMappingURL=index.6bd02f5a.js.map
