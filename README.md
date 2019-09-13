# Banner Gallery

> Project description

## Related Projects

  - https://github.com/feastfinder/Banner-Gallery
  - https://github.com/feastfinder/Menu
  - https://github.com/feastfinder/Reservations
  - https://github.com/feastfinder/Reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

### Seeding database

```sh
npm run create
npm run seed
```

### Starting webpack and run server

```sh
npm run build
npm run start
```

### RESTful CRUD API
```sh
POST '/api/restaurants/:id/photos'
  Adds new photos to photo gallery
  Example Input:
  [
    {
        "url": "https://llaminati-images.s3-us-west-1.amazonaws.com/14.jpg",
        "description": "quidem repellat magni",
        "user_submit": 0,
        "date": "2019-04-15T07:00:00.000Z",
        "unrelated_flag": 0,
        "inappropriate_flag": 0,
        "dislike_flag": 0,
        "listing_id": 1,
        "image_id": 14
    }
  ]

GET 'api/restaurants/:id/photos'
  Returns photos for current listing
  Example Output:
  [
    {
        "id": 34,
        "url": "https://llaminati-images.s3-us-west-1.amazonaws.com/14.jpg",
        "description": "quidem repellat magni",
        "user_submit": 0,
        "date": "2019-04-15T07:00:00.000Z",
        "unrelated_flag": 0,
        "inappropriate_flag": 0,
        "dislike_flag": 0,
        "listing_id": 1,
        "image_id": 14
    }
  ]

PUT 'api/photos/img_id'
  Updates photo description
  Example input:
  [
    {
        "id": 34,
        "url": "https://llaminati-images.s3-us-west-1.amazonaws.com/14.jpg",
        "description": "quidem repellat magni",
        "user_submit": 0,
        "date": "2019-04-15T07:00:00.000Z",
        "unrelated_flag": 0,
        "inappropriate_flag": 0,
        "dislike_flag": 0,
        "listing_id": 1,
        "image_id": 14
    }
  ]

DELETE 'api/photos/img_id'
  Deletes photo
```