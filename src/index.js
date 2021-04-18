const logMessage = "ES6, Stimulus & Turbolinks with Jekyll on Webpack";
console.log(logMessage)

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

import Turbolinks from "turbolinks"
Turbolinks.start();

import './main.css';
