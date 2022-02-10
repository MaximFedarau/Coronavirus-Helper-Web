import React from 'react'

export default function TestComponent() {
    const [language,setLanguage] = React.useState('en')

    function changeLanguage() {
    if (language === "en") {
      setLanguage("ru")
      localStorage.setItem('language', "ru")
    }
    else if (language === "ru") {
      setLanguage("en")
      localStorage.setItem('language', "en")
    }
    console.log(localStorage.getItem('language'))
  }

    React.useEffect(() => {
    setLanguage(localStorage.getItem("language"))
    console.log(localStorage.getItem('language'))
  },[])

    return (
        <div>
            <h1>{language}</h1>
            <button onClick={changeLanguage}>Click</button>
        </div>
    )
}