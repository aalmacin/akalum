import React from 'react'
import twemoji from 'twemoji'

export const TwemojiExample: React.FC = () => {
    const textWithEmoji = twemoji.parse("Here is a text with emoji ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤")
    return <div>
        Twemoji Example
        <br></br>
        <span dangerouslySetInnerHTML={{__html: textWithEmoji}} />
    </div>
}