# Multi State Assigner

Multi State Assigner  is a tool designed to digitalize the assignment of  values. Allows you to assign different values to a numbered list. Meant to be used alongside a clicker and the website for visualization. Built originally off Danny's Binary Assigner (see forked project). Updated to include multiple states.

Sample website usage can be seen at 
https://binary-assigner-auqq.vercel.app and https://binary-assigner-auqq.vercel.app/view

# Features
This repository was originally developed to monitor wells on a well plate within a laboratory environment between two binary states. However, the applications extend beyond this and are useful for anything you need to track beyond binary states. As this was developed alongside a clicker, controls that are mentioned are assuming that you have the clicker (https://www.amazon.com/gp/product/B09X1G5DCC/ref=ox_sc_act_title_1?smid=A3JAW9CCBGOOEH&psc=1). Current features include:

- Export as a JSON file
- Set how many binary states you want to track through adjusting the dimensions of the array
- Exports the data in a JSON file
- Import JSON files to modify existing save states
- "<-" and "->" keys to cycle between wells
- "B" or "" to toggle the state of the well
- "B" (Keyboard) or "Action Button" (Clicker) to toggle the state of the well

# Installation
Prerequisites
Node.js >= 14.x
Installation can be done by cloning the github repoistory (git clone https://github.com/dannynotsmart/Binary-Assigner)

## Contributing
I welcome contributions! Please create a pull request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
