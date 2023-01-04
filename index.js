function APP() {
    
    const [quotes, setQuotes] = React.useState([]);
    const [randomQuote, setRandomQuote] = React.useState('');
    const [color, setColor] = React.useState('');
    
    const colors= [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
        ];
    
    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch('https://type.fit/api/quotes');
            const data = await response.json();

            setQuotes(data);
            let randomIndex = Math.floor(Math.random() * data.length);
            setRandomQuote(data[randomIndex]);
            
            let colorIndex = Math.floor(Math.random() * colors.length);
            setColor(colors[colorIndex]);
        }
        fetchData();
    }, []);

    const getNewQuote = () => {
       

        let randomIndex = Math.floor(Math.random() * quotes.length);
        let colorIndex = Math.floor(Math.random() * colors.length);

        setRandomQuote(quotes[randomIndex]);
        setColor(colors[colorIndex]);
        
    };
    
    return (
        <div style={{backgroundColor: color, color: color, height: '100vh', display: 'flex', justifyContent: 'center',
        alignItems: 'center', width: '100vw'}}>
            <div className="wrapper">
                <div className="bg-white p-5 rounded" id="quote-box">
                    <div className="" id="quote-text">
                        <i className="fa fa-quote-left fs-3"/>
                        <span className="fs-3 text-center" id="text">{randomQuote ? randomQuote.text : "Loading"}</span>
                    </div>
                    <div className="text-end mt-4" id="quote-author">
                        <cite id="author">- {randomQuote.author ? randomQuote.author : "No author"}</cite>
                    </div>
                    <div className="d-flex mt-4" id="buttons">
                        <a style={{backgroundColor: color, color: 'white'}} className="btn" id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a style={{backgroundColor: color, color: 'white'}} className="btn" id="tumblr-quote" target="_blank"><i className="fab fa-tumblr"></i></a>
                        <button style={{backgroundColor: color, color: 'white'}} onClick={getNewQuote} className="btn ms-auto" id="new-quote">New quote</button>
                    </div>
                </div>  
                <div className="mt-1 text-white" id="footer">
                    <p className="text-center">by Peiqin</p>
                </div>
            </div>
        </div>
    )
}






ReactDOM.render(<APP/>, document.getElementById("app"))