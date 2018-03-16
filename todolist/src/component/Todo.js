import React, { Component } from "react";

class Todo extends Component {
  render() {
    return (
      <div class="center">
        {" "}
        TODOLIST
        <Router>
          <div class="flex-container">
            <div>
              Todo
              <div class="WhiteBox">
                {" "}
                Learning create Function
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                {" "}
                Create Input List
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                {" "}
                Learning DB
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <Link to="/Addtodo">
                <button class="WhiteBox"> add card...</button>
              </Link>
            </div>
            <div>
              Doing
              <div class="WhiteBox">
                Create Function
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                {" "}
                Learning create Button
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                {" "}
                Create Button Add list
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <Link to="/Addtodo">
                <button class="WhiteBox"> add card...</button>
              </Link>
            </div>
            <div>
              Done
              <div class="WhiteBox">
                Learning Create Input
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                Create Input Todolist Component
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                {" "}
                Create knex.js
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                Connect react native X DB
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <div class="WhiteBox">
                Create Header Text Component
                <button>
                  <img className="pic-size" src={add} />
                </button>
              </div>
              <Link to="/Addtodo">
                <button class="WhiteBox"> add card...</button>
              </Link>
            </div>
            <div>
              Add
              <div>
                <button class="WhiteBox">
                  <img className="pic1-size" src={plus} />
                </button>{" "}
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default Todo;
