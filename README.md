# Clip Assessment

This is my example of one way to solve the Clip Assessment. There are step by step instructions on what I was thinking while writing this code.

## Getting Started

* Fork and clone this repository.
* cd into the project directory.
* Run npm i to download the included dependencies.
* Run npm start to spin up the development server.

### Prerequisites

There are no prerequisites for this project.

## What To Do

This web app is created to allow you to click on any item on the list displayed to delete that item. There is a button at the bottom that will reset the list to its default state. If there are no more items in the list, you will see a message that tells you there are no more items in the list. Have fun clicking around!

## Section One

An h2 tag displays the instructions on what to do with the displayed list.

## Section Two

I declared a variable called displaySports inside the render method but outside of the return statement. In that variable, I am mapping over the items in state and returning an h4 tag displaying the index plus one, to get a dynamic number next to it, and the name for each element. I am wrapping my displaySports variable in the React CSS Transition Group addon that allows me to add animations to the list. In the return statement I am using a ternary statement to check if there is anything in state. If there is information, the list will render the information, if not then it will display the empty string message that is saved in state.

## Section Three

A button from the UI Library of Semantic UI has an onclick event listener that will reset state to its initial state. I did that by setting base state equal to this.state in the constructor function.

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Semantic UI React](https://react.semantic-ui.com/introduction) - UI Library for button

## Authors

* **Kekoa Wilson** (https://github.com/kekoawilson)

## Acknowledgments

* Clip for the opportunity to code this.
