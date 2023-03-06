import React from 'react'
import { useEffect, useState } from 'react'

function GitHubCard() {
    let [gitHubName, setGitHubName] = useState('')
    useEffect(() => {
        fetch('https://api.github.com/users/bg560581')
        .then(res => res.json())
        .then(data => {
          setGitHubName(data.login)
        })
      }, [])
      return (
        <div className="App">
          <h1>Github Profile Info:</h1>
          <h2>{gitHubName}</h2>
        </div>
      );
    }
export default GitHubCard