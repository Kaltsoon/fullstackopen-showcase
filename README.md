# Full Stack open showcase

Share the projects you have made based on what you have learned in the [Full Stack open](https://fullstackopen.com/) course. The idea of the Full Stack open showcase is to show students all the cool they can do with the concepts they will learn during the course.

## How do I submit my repository?

There are a few requirements for the project repository:

1. The repository must be a _public GitHub repository_
2. The project needs to be at least partly implemented using _JavaScript_ or _TypeScript_. Using technologies introduced in the Full Stack open course, such as React, Express, and GraphQL is also highly appreciated

If your repository fills the requirements, open a pull request that adds an object in the following format at _the end_ of the array in the [repositories.json](https://github.com/Kaltsoon/fullstackopen-showcase/edit/master/data/repositories.json) file:

```json
[{ "url": "https://github.com/<MY_USERNAME>/<MY_REPOSITORY>" }]
```

Remember to include `,` at the end of the previous line so that the JSON format is valid. If there's an issue the test will fail and the test output will indicate what's wrong with your pull request.

At the moment only the latest 500 repositories are included in the showcase.
