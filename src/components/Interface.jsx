import Terminal from 'terminal-in-react';

export default function Interface() {
    // const showLog = () => test
    // const showFiles = () => {
    //     return files
    // }

    // const downloads = files.map((file, index) => {
    //     return (
    //         <a key={index} href={`http://localhost:5000/files/${file}`} download>{file}</a>
    //     )
    // })

    const showJokes = () => {
        return 'joke, ha ha, lol!'
    }

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                marginLeft: '3%',
                marginTop: '2%',
            }}
        >
            <Terminal
                allowTabs={false}
                color='white'
                backgroundColor='black'
                barColor='black'
                style={{ fontWeight: 'bold', fontSize: '1.75em' }}

                commands={{
                    jokes: showJokes,
                }}
                descriptions={{
                    color: false, show: false, clear: false,
                    jokes: 'See all the jokes',
                }}
                msg={`To view all the jokes, type: jokes`}
            />
        </div>
    );
}