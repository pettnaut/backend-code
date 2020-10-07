# Pettnaut backend
## Description
Pettnaut is open source and non profit project that aims to unify efforts to adopt pets in the city, it also has a pet profile where you can add characteristics of the pets that help to find your pet in case it gets lost.
In this repository we are working on the **backend side**.

## Api documentation
FIn the official documentation on: https://documenter.getpostman.com/view/12619023/TVCh1TPv#intro

## Technical details
We pretend to build a platform that allows you to create a pet’s profiles. For those purposes, we are going to have a web page and the backend. More details about the technologies used on the components are in the next graphic:
**![](https://lh3.googleusercontent.com/kLrJy5xZyN_N4m-neCZnu1CcTadQfEztCgj32fUjPgH5tg4kuI5E2XAlK4zKKCyD3kqt9ITqTRIlQvyFkVFTyYokNntKIeaQLcOoop4B-YM7bN3JdeYfootwVa5t)**
You can find our data base model at::
[https://drive.google.com/file/d/1TOyK8zlOPKYtEKFBQMjgC2gktrPB3oCx/view?usp=sharing](https://drive.google.com/file/d/1TOyK8zlOPKYtEKFBQMjgC2gktrPB3oCx/view?usp=sharing)

## Getting started
We are using heroku for development. So is easiest to test the code in your local enviroment.
#### Install the Heroku CLI

Download and install the  [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line).

If you haven't already, log in to your Heroku account and follow the prompts to create a new SSH public key.
```
$ heroku login
```
Clone the project 
```
$ git clone https://github.com/pettnaut/backend-code.git
```
Go to your project
```
$ cd backend-code
```
Create your own heroku project
```
$ heroku create
```
A random name for your project will be assigned. 
Now deploy your code:
```
$ git push heroku master
```
The application is now deployed. Ensure that at least one instance of the app is running:
```
$ heroku ps:scale web=1
```
Add a database 
```
$ heroku addons:create heroku-postgresql:hobby-dev
```
Now you have to populate this database with test entries. We have prepare a script that you can use. For do that, open the postgresql on heroku:
```
$ heroku pg:psql
```
Into the new terminal, copy an paste the content inside the `init.sql` at root directory.

That's it. You are done! You can access to your test api running this hands on command from heroku:
```
$ heroku open
```
It will open your browser and show you the url of your api!

