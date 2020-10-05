# Floom Frontend Challenge

Great you're looking to get involved with Floom. Create  new private Github repo, push your solution and add us as a collaborator when you're ready. Add github handles `theostanton`, `bradlocking` and `ahnunn` as collaborators.

## Brief

We have a simple api, a lazy designer and some technically competent users. With this we're gonna make a clean and useful list of products and their details. With the three sources of info below, you should be able to put a single page site together, filling in gaps in information as you go.

## Design

The basic designs are over [here](https://whimsical.co/A8oN1FGgwZCfiZXvicER6A). The designer left the office muttering something about "32 point padding...". Make any assumptions you need to in her absence.

## Data

The list relies on `merchant` and `product` data. Start the api by first running `npm install` then `npm run api`. You'll now be able to access two key endpoints:

## Endpoints

`http://localhost:8888/merchants`

`http://localhost:8888/products`

## Models

A **Merchant** (Florist) has a name, a lat lng location and radius in meters that they can deliver to.

    {
     "id": 25123,
     "title": "Orchidya",
     "location": [
       51.520436,
       -0.1320937
     ],
     "radius_meters": 1500
    }

A **Product** (Bouquet) has a name, description, price, tags, a merchant and some locally stored images.

    {
      "id": 1342,
      "description": "A simple ...",
      "merchant_id": 25123,
      "title": "Passion",
      "price": 25.00,
      "currency": "GBP",
      "tags": [
        "red",
        "romance"
      ],
      "image_urls": [
        "images/passion_1",
        "images/passion_2",
        "images/passion_3",
        "images/passion_4"
      ]
    }

## Filtering

When the page loads we show all our products. The user can then filter down by delivery location and/or tags.

## Location

Our users are pretty smart, they know the latitude and longitude of their homes. To see if the merchant will deliver to their home, we'll compare their coordinates with the merchants coordinates and see if it fits within the merchants delivery radius, given in meters.

## Tags

Each product has some tags that describe it, such as it's color and style. We can offer these in a drop down.

## Deliverables

The single page must be built in React. Beyond that you're open to use any frameworks you wish or stay vanilla if you fancy it. We'll discuss your choices in our follow up meeting.

We don't wish for you to spend longer than two hours on this task. If you haven't time to complete all elements of the task that's fine, we can talk about them more in person.

When we look at your solution we'll mainly be looking at your approach to understanding the task, code structure, code style, how you handle styling, your design awareness, how you handle logic and data. So be sure to show these factors in your solution.
