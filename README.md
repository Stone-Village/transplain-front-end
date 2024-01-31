# Transplain

by Charlie Arriaga

### An educational website for transgender people looking to physically transition

### User Stories

#### Transitioner

"As a trans person planning to medically transitioning, I want information about medical transitioning so that I am prepared for what the outcome of transitioning will be."

Feature: Accurate articles about medical transitioning.

Acceptance test: Articles must be informative and properly sourced.

#### Time Saver

"As a trans person who needs information about transitioning but doesn't have a lot of time, I want to access only information that is relevant to my transitioning so that I don't have to waste time sorting through material that is not relevant to me."

Feature: Filter system

Acceptance test: the ability to input titles and/or tags and get a result of only articles that match them.

#### Re-reader

"As a trans person who likes to re-read articles to better absorb the information, I want a place to easily access my favorite articles so that I don't have to do the same search over and over again."

Feature: Bookmarks

Acceptance test: working links to bookmarked articles appear on the user's profile and their bookmarks page.

#### Learner

"As a trans person who wants to learn as much about certain topics as possible, I want to be able to follow if new articles about my subject of interest appear so that I am always on top of the latest information."

Feature: Saved tags

Acceptance test: working links to tag filters the user saved appear on the user's profile.

#### Questioner

"As a trans person with a lot of questions about transitioning that the currently available articles can't answer, I want to be able to ask the writers directly if they can make an article that answers my question so that I can know everything I need to in order to make informed decisions about my healthcare."

Feature: Suggestion box

Acceptance test: Text submitted in the suggestion box text box is sent as the body of an email to the email the developer provides.

## Domain Model and Wireframe

![domain model](/domain-model.png)

![wireframe](/wireframe.png)

## Planning

### Cooperation Plan

#### Key Strengths

Problem solving, planning, back end development.

#### How can you best utilizr these strengths in the execution of your project?

Take the time to plan ahead and anticipate any potential roadblocks. Create a solid layout of what code, modules, and pages will be needed in order to know how to move forward.

#### In which professional competency do you want to develop greater strength?

Business acumen and customer support.

#### Knowing each person in your team needs to understand all aspects of the project, how do you plan to approach the day-to-day work?

N/A

### Conflict Plan

N/A

### Communication Plan

#### Hours Available to Communicate

8 am - 6 pm PST

#### Platforms Used to Communicate

Slack

#### How often will you take breaks?

One thirty minute break at least every two hours and a one hour break for lunch and dinner.

#### What is your plan if you fall behind?

Lower the MVP or ask for more time to complete the project.

#### How will you communicate after hours and on the weekend?

I won't.

#### What is your strategy for ensuring everyone's voice is heard?

N/A

#### How will you ensure you are creating a safe environment where everyone feels comfortable?

N/A

### Work Plan

#### How will you identy tasks and manage work in general?

I will break down tasks before starting to code via wireframes and trello and use a trello board to keep track of my progress and work.

#### What kind of project management took will be used?

Trello.

### Git Process

#### What components of your project will live on GitHub?

Front-end and back-end code and repositories. Images and graphics.

#### How will you share the repository with your teammates?

N/A

#### What is you Git flow?

I will use a production branch and create branches off of that for every feature I create. Once a feature is created and tested with positive results, it will be merged back onto the production branch. After all production is complete, the production branch will be merged into main.

#### Will you be using a PR review workflow?

No.

## Database Schema

Two main items in the database: the User and the Article.

The User will contain multiple Bookmark items, which contain the link string, id integer, an array of tag objects, and title string of an article.

The User and Article items will contain Tag items, which contain an id integer and string name.

The Article will contain a title string, author string, post date string, body text string, and an array of tags objects.

The User will contain an id integer, user id integer, username string, an array of nookmark objects, and an array of tag objects.

![database diagram](/database-diagram.png)
