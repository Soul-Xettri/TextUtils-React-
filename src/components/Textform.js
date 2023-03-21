import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convert to upperCase", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // const speak = () => {
  //     let msg = new SpeechSynthesisUtterance();
  //     msg.text = text;
  //     window.speechSynthesis.speak(msg);
  //   }
  //   const handlefindChange = (event) => {
  //     findWord(event.target.value);
  //   };
  // const handleReplaceChange = (event) => {
  //   console.log(replaceWord(event.target.value)) ;
  //   };
  //   const handleReplaceClick = () => {
  //       let newText = text.replaceAll(fWord,rWord);
  //       setText(newText);
  //     };
  //     const handleReverse = (event) => {
  //       /* Convert string to array*/
  //       let strArr = text.split("");
  //       /* Reverse array*/
  //       strArr = strArr.reverse();
  //       /* Convert array to string*/
  //       let newText = strArr.join("");
  //       setText(newText);
  //     };
  //     const handleCapitalize = () => {
  //       let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
  //       setText(newText);
  //  }
  const handleExtraSpaces = () => {
    let words = text.split(" ");
    let joinedWords = "";
    // console.log(words);
    words.forEach((elem) => {
      if (elem[0] !== undefined) {
        joinedWords += elem + " ";
        console.log(joinedWords);
      }
    });
    setText(joinedWords);
  };
  // const downloadTxtFile = () => {
  //     const element = document.createElement("a");
  //     const file = new Blob([text], {
  //       type: "text/plain"
  //     });
  //     element.href = URL.createObjectURL(file);
  //     element.download = "myFile.txt";
  //     element.click();
  // }
  const clearText = () => {
    const newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");
  // const [fWord, findWord] = useState("");
  // const [rWord, replaceWord] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          {/* <textarea className="form-control" value={fWord} onChange={handlefindChange} id="myBox" rows="8"></textarea>
        <textarea className="form-control" value={rWord} onChange={handleReplaceChange} id="myBox" rows="8"></textarea> */}
        </div>
        <button
          button
          // disabled={false}
          className="btn btn-warning mx-2 my-3"
          onClick={handleUpClick}
        >
          Convert To UPPERCASE
        </button>
        <button
          button
          // disabled={false}
          className="btn btn-warning mx-2 my-3"
          onClick={handleLowClick}
        >
          Convert To Lowercase
        </button>
        <button
          button
          // disabled={false}
          type="submit"
          onClick={handleExtraSpaces}
          className="btn btn-warning mx-2 my-3"
        >
          Remove Extra Space
        </button>
        <button
          type="submit"
          // disabled={false}
          onClick={clearText}
          className="btn btn-warning mx-2 my-3"
        >
          Clear Text
        </button>
        {/* <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    <button type="submit" onClick={handleReplaceClick} className="btn btn-warning mx-2 my-2">Replace word</button>
    <button type="submit" onClick={handleReverse} className="btn btn-warning mx-2 my-2">Reverse</button>
    <button type="submit" onClick={handleCapitalize} className="btn btn-warning mx-2 my-2">Capitalized</button> */}
        {/* <button type="submit" onClick={downloadTxtFile} className="btn btn-warning mx-2 my-2">Download Text</button> */}
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          Your can read the words in{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter Some Text Above to preview your text"}
        </p>
      </div>
    </>
  );
}
