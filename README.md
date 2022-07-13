# The Sylph Road Backend

### Description:
Fictional social media website set in the world of Pokemon, where users take on the role of trainers to create their profiles where they can connect with other trainers in the Pokemon universe.

***

## Development Process
| DATE | PROGRESS | BLOCKERS | GOALS |
| :---: | ------- | -------- | ----- |
| 6/28/2022 | Created folder structure and database for project. Created Trainer schema model & create route and controller. | None | Create rest of CRUD for Trainers and Pokemon |
| 6/29/2022 | Finished rest of Trainer CRUD, plus login controller and route | None | Pokemon CRUD |
| 6/30/2022 | CRUD functionality for Pokemon | Deciding how to incorporate CRUD features for Trainer party pokemon with third party Pokemon API | Authentication |
| 7/1/2022 | User auth and Token Verification | None | See 6/30/2022 Blockers | 

***

## API Routes
#### Trainers
| METHOD | ROUTE | DESCRIPTION |
| :---: | --- | --- |
| POST | /api/v1/trainers/signup | Create a new account |
| POST | /api/v1/trainers/login | Log in to user account |
| GET | /api/v1/trainers/:id | Show user profile |
| PUT | /api/v1/trainers/:id | Update user profile |
| DEL | /api/v1/trainers/:id | Delete user account |

#### Pokemon
| METHOD | ROUTE | DESCRIPTION |
| :---: | --- | --- |
| POST | /api/v1/pokemon | Add pokemon to user's party |
| GET | /api/v1/pokemon/:id | Show specific pokemon in user's party |
| PUT | /api/v1/pokemon/:id | Edit information for specific party pokemon |
| DEL | /api/v1/pokemon/:id | Remove pokemon from party |

***

## Technologies
1. Express.js
2. Mongoose
3. Bcrypt
4. JSON Web Tokens

***

## Stretch Goals
- Add/Remove friend feature
- Pokedex
- Recent posts feed
- "Verified" Gym Leader and Elite Four profiles
- "Poke Market" feature
- ** If possible, integrate "game" system which rewards Pokemon in trainer's party with extra EXP points for level up