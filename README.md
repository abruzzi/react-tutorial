### A `real` React.js demo application

[React](http://facebook.github.io/react) is a JavaScript library for building user interfaces. It's developed and maintained by facebook team.

This is a small but `full-funciton` application based on top of `react` and `sinatra`. It's based on the tutorial from `React` [official homepage](http://facebook.github.io/react/docs/tutorial.html).

What I added here as a tutorial are:

	1.	Sinatra as server side
	2.	Save/retrive data from database by using ActiveRecord
	3.	Make it looks nice by adding some CSS

#### Get started with this tutorial

Simply clone the repo, and do the following steps

```sh
$ cd react-tutorial #I assume you are clone this repo to folder `react-tutorial`
$ bundle install
$ ruby app.rb -p 9999
```

Then open you browser, and go to page like `http://localhost:9999/`, you should see something similar with this:

![How it looks like](https://github.com/abruzzi/react-tutorial/blob/master/react-comments-resized.png)