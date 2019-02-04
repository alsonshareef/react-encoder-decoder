import React from 'react'
import TextareaAutosize from 'react-autosize-textarea';

export default function Output({output}) {
  return (
    <div>
      <TextareaAutosize
        className="textarea"
        placeholder="The encoded or decoded output will appear here."
        value={output} 
        readOnly
      />
    </div>
  )
}
