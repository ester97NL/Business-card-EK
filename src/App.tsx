import './App.css'
import CV from 'react-cv'

function App() {

  return (
    <>
      <CV
        personalData={{
          name: 'Ester Kouwenhoven',
          title: 'Software Developer',
          image: 'https://bulma.io/images/placeholders/128x128.png',
          contacts: [
            { type: 'email', value: 'esterkouwenhoven@hotmail.com' },
            { type: 'phone', value: '+31 (0)6 506 677 15' },
            { type: 'location', value: 'Den Hoorn' },
            { type: 'linkedin', value: 'linkedin.com/in/ester-kouwenhoven/' },
            { type: 'github', value: '' }
        ]}}
        sections= {[{
          type: 'text',
          title: 'Career Profile',
          content: `When I was a child, I always wanted to be a developer..then this hapened **You can use markdown here**`,
          icon: 'usertie'
        }]}
        branding={false} // or false to hide it.
      />
    </>
  )
}

export default App
