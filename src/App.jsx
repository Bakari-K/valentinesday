import { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [accepted, setAccepted] = useState(false)
  const [noClicked, setNoClicked] = useState(false)

  const valentinesGifs = [
    'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXd2N2tzYTgxMGNzb3k0cHQ2cGlmOGNyNXg1bWVtaHhwNXR2bW1rayZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/Gpqk76tiVKjn2/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWNpcGEwOHczNWVheWpvcXBsaDA2bno5OHQxN2NlZ2lpbm00eHVpZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/tLcf4s4DK3tZmYUn6F/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NWNpcGEwOHczNWVheWpvcXBsaDA2bno5OHQxN2NlZ2lpbm00eHVpZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/U6f9NQ3YhFATmZgvFc/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OHA3aHJtaDhtcG9yeWhtcGw2b3l4NjVkMHN2cjFpaGQ3Y3lvcDIxYiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/RLG2ZFo3yBMHYXC36F/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OHA3aHJtaDhtcG9yeWhtcGw2b3l4NjVkMHN2cjFpaGQ3Y3lvcDIxYiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/9ZsHoKnjg4ykx3mzTR/giphy.gif',
    'https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3cWdvdHIzaWR2czRjeW91eGRnOTU3MmM5cXVtNXA5bjN3M3JiaXNpZSZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/B8FSK7h2ntK5ZtAo6z/giphy.gif',

  ]

  const baseHearts = useMemo(() => {
    return Array.from({ length: 24 }, (_, index) => {
      const size = 10 + Math.random() * 18
      const left = Math.random() * 100
      const delay = Math.random() * 8
      const duration = 8 + Math.random() * 8
      const colors = ['#ff4d6d', '#ff7aa2', '#ff9ecf', '#ff6b6b']

      return {
        id: `base-${index}`,
        size,
        left,
        delay,
        duration,
        color: colors[index % colors.length],
      }
    })
  }, [])

  const celebrationHearts = useMemo(() => {
    return Array.from({ length: 60 }, (_, index) => {
      const size = 12 + Math.random() * 26
      const left = Math.random() * 100
      const delay = Math.random() * 6
      const duration = 6 + Math.random() * 8
      const colors = ['#ff3b7a', '#ff2e93', '#ff88cc', '#ff5a5f', '#ff9a9e']

      return {
        id: `celebrate-${index}`,
        size,
        left,
        delay,
        duration,
        color: colors[index % colors.length],
      }
    })
  }, [])

  const handleNoClick = () => {
    if (noClicked) {
      setAccepted(true)
      return
    }

    setNoClicked(true)
  }

  return (
    <div className="page">
      <div className="glow" />
      <div className="floating-hearts" aria-hidden="true">
        {baseHearts.map((heart) => (
          <span
            key={heart.id}
            className="heart"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`,
              '--size': `${heart.size}px`,
              '--heart-color': heart.color,
            }}
          />
        ))}
      </div>

      <main className="content">
        <p className="moving-text">Hey ELi my pooooookie</p>
        <h1 className="title">Will you be my Valentine?</h1>
        <p className="subtitle">
          Even though we are far apart you'll always be in my heart.
        </p>

        {!accepted && (
          <div className="questionnaire">
            <div className="choices">
              <button className="btn yes" onClick={() => setAccepted(true)}>
                Yes
              </button>
              <button
                className={`btn no ${noClicked ? 'no-transformed' : ''}`}
                onClick={handleNoClick}
              >
                {noClicked ? 'Yes' : 'No'}
              </button>
            </div>
            {noClicked && (
              <p className="refuse">Nice try. You have to say yes lol.</p>
            )}
          </div>
        )}

        {accepted && (
          <section className="celebration">
            <h2 className="yippee">Yippeeeee</h2>
            <p className="subtitle">I am the happiest man eveeeerrrr</p>
            <div className="gif-grid">
              {valentinesGifs.map((gif, index) => (
                <img
                  key={gif}
                  src={gif}
                  alt={`Valentine gif ${index + 1}`}
                  className="valentine-gif"
                  loading="lazy"
                />
              ))}
            </div>
            <div className="overload" aria-hidden="true">
              {celebrationHearts.map((heart) => (
                <span
                  key={heart.id}
                  className="heart celebrate"
                  style={{
                    left: `${heart.left}%`,
                    animationDelay: `${heart.delay}s`,
                    animationDuration: `${heart.duration}s`,
                    '--size': `${heart.size}px`,
                    '--heart-color': heart.color,
                  }}
                />
              ))}
            </div>
            <div className="sparkles" aria-hidden="true">
              <span className="sparkle" />
              <span className="sparkle" />
              <span className="sparkle" />
              <span className="sparkle" />
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default App
