import React, { Component } from 'react';
import './css/Todo.css';
import add from './img/sort-down.png'
import plus from './img/plus.png'

export default class Todo extends Todo {
  render() {
    return (
      <div class="center"> TODOLIST 
      <div class="flex-container">
        <div>Todo
          <div class="WhiteBox"> Learning create Function
            <button><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox" > Create Input List 
            <button><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox"> Learning DB
            <button><img className="pic-size" src={add} /></button>
          </div>
          <button class="WhiteBox">add card...</button>
        </div>
        <div>Doing
          <div class="WhiteBox">Create Function
            <button><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox" > Learning create Button 
            <button><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox"> Create Button Add list
            <button><img className="pic-size" src={add} /></button>
          </div>
          <button class="WhiteBox">add card...</button>
        </div>
        <div>Done
          <div class="WhiteBox">Learning Create Input
            <button ><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox" >Create Input Todolist Component 
            <button><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox"> Create knex.js
            <button><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox">Connect react native X DB
            <button><img className="pic-size" src={add} /></button>
          </div>
          <div class="WhiteBox">Create Header Text Component
            <button><img className="pic-size" src={add} /></button>
          </div>   
          <button class="WhiteBox">add card...</button>    
        </div>  
        <div>Add 
          <div><button class="WhiteBox"><img className="pic1-size" src={plus}/></button> </div>
        </div>
      </div>
      </div>
    )
  }
};


