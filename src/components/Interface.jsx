import Terminal from 'terminal-in-react';
import Data from '../jokes.json';



export default function Interface() {
    const jokes = Data.map(joke => JSON.parse(joke));
    // const showLog = () => test
    // const showFiles = () => {
    //     return files
    // }

    // const downloads = files.map((file, index) => {
    //     return (
    //         <a key={index} href={`http://localhost:5000/files/${file}`} download>{file}</a>
    //     )
    // })

    const showJoke = () => {
        const print = `🃏: ${jokes[0].setup} 😜: ${jokes[0].punchline}`
        return print
    }

    const showJokes = () => {
        let prints = ''
        jokes.forEach(((joke, i) => {
            const print = `joke #${i + 1} 🃏: ${jokes[0].setup} 😜: ${jokes[0].punchline}`
            prints += print
        }))
        return prints
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                marginLeft: '3%',
                marginTop: '-4%'
            }}
        >
            <Terminal
                allowTabs={false}
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: 'bold', fontSize: '1.75em', width: '85%' }}

                commands={{
                    joke: showJoke,
                    jokes: showJokes,
                }}
                descriptions={{
                    color: false, show: false, clear: false,
                    joke: 'See a joke',
                    jokes: 'See all the jokes',
                }}
                msg={`To view all the jokes, type: jokes for one, type: joke`}
            />
        </div>
    );
}