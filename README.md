# Google-with-Michael
Building Google's page in dark mode with Albert Stoykov and Michael Harkins-Meloy

## Installation & Usage

### Installation

`cd ../server/` and run `npm install`

### Usage

`cd ../server/` and run `npm run start`

- Open your default browser and go to `http://localhost:3000/`
- Enter any search query you want and click search or ENTER on your keyboard
- Try out "I'm feeling lucky"

Do not worry about NSFW content as every search is in safe mode.

## Process
### Frontend

There were some issues initially with the Google logo appearing under the search bar as it is a background image but these were resolved to the best of our ability. All the links will take you to the corresponding real Google websites, such their terms of use.

Initially we were going to have a seperate client and server but decided to let the server serve up the files directly to the browser upon request.

This allowed us to develop the main page (index.html) and the search page (search.html) seperately. Instead of changing the `index.html` to look like the search page, the search page automatically runs the script `populateResults.js` which in turn makes a request to our backend API to recieve the search data in a JSON format. This JSON data is then used to populate the blank search results and even some other questions that are usually asked by other users on the given topic.

### Back

The backend was built to use real Google search results, at first it seemed that we could only access the direct Google Search API with our own live website but upon further research into the matter we found a 3rd party API provider, the API documentation can be found here: "https://serpapi.com/search-api"

Serp API returns with a JSON data structure, which a saved offline version can be found in `../server/data.js` (this was very useful for testing as the free package on Serp API only allows 100 searches per month).

The root API endpoint in `app.js` will return with the `index.html` file, when opened in a browser it will automatically display this. This is the same for the `/search` endpoint but the key difference is that the search query parameters are extracted from the browser window in the script file `populateResults.js` and sent to another endpoint `/requestResults`.

When you search something on the real Google website you can see this is done in a similar fashion, for example if I search 'coffee' in Google this is what is displayed in the browser HTTP search bar:

"https://www.google.com/search?q=coffee&source=hp&ei=Q8tGYqfuPMqhgQa445eIDQ&iflsig=AHkkrS4AAAAAYkbZVNIZ7JdATUbFqevRZPJG7Y08NdEw&ved=0ahUKEwjnm9nYy_L2AhXKUMAKHbjxBdEQ4dUDCAk&uact=5&oq=coffee&gs_lcp=Cgdnd3Mtd2l6EAMyCwgAEIAEELEDEMkDMgUIABCSAzIFCAAQkgMyCwguEIAEELEDENQCMggIABCABBCxAzIFCAAQgAQyEQguEIAEELEDEIMBEMcBEK8BMgUIABCABDIICAAQgAQQsQMyEQguEIAEELEDEIMBEMcBEK8BOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6CAguELEDEIMBOgQIABADOhEILhCABBCxAxCDARDHARDRAzoRCC4QgAQQsQMQgwEQxwEQowI6CAguEIAEELEDOgUILhCABDoLCC4QgAQQxwEQ0QM6CAgAELEDEIMBUABY2wdghQloAHAAeACAAUiIAeICkgEBNpgBAKABAQ&sclient=gws-wiz"

Now real Google takes more than just on parameter when you are searching but the key thing to take away is the very first parameter:

"https://www.google.com/search?q=coffee"

This is what we based the entire backend off of, the ability to even manually enter a search query into the search bar itself. Give it a go by running the server and then putting the following in your browser's search bar:

"http://localhost:3000/search?q=coffee"

## Bugs

* Problems changing colors of font awesome icons.
* Problems with flexbox while trying to structure the footer.
* Google Logo sometimes overlaps the search bar
* If you go directly to `http://localhost:3000/search/` the page will break, this is because no default query is given and the page will not populate
* Only a limited number of searches can be done per month due to the API (please do not use them all!)

## Wins & Challenges

### Wins

* Setting google img as background.
* Getting very close to the original google page.
* Backend linked to an actual Google search API

### Challenges

* Problems changing colors of font awesome icons.
* Problems with flexbox while trying to structure the footer.
* Google logo placement
* Adaptively populating the HTML with real data
