# Banner Gallery

> Project description

## Related Projects

  - https://github.com/llaminati/Banner-Gallery
  - https://github.com/llaminati/Menu
  - https://github.com/llaminati/Reservations
  - https://github.com/llaminati/Reviews

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
For creation: app.post('api/:listing/banner')
  Adds new photos to photo gallery
  Example Input:
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
  Returns status 201 if successful

For reading: app.get('api/:listing/banner')
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
  Successful get requests return status 200

For updates: app.put('api/:listing/banner')
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
  Successful put returns status 200

For deletion: app.delete('api/:listing/banner')
  Deletes photo
  Successful delete requests return status 204
```