# Oze Front end Test

## Table of Contents:
- [Design](#design)
- [Frameworks Used](#frameworks-used)
- [Setup](#setup)
- [Methodology](#methodology)
- [Current State](#current-state)

## Design
I created this app using the human interface design process. I first created the app and its design system according to a Persona I created. These designs were the guiding hand for implementation. The designs for this implementation can be found [here](https://www.figma.com/file/hdVOAHMFLUxv0AYGCkoEYt/Github-Profile-VIewer?node-id=11%3A3501&t=kmHLMDWNuTsly5tX-1).

## Frameworks Used
I used React, Axios, Typescript, React-Router-DOM V6, and Redux. Vanilla CSS was used.

## Setup
- Download or clone the repository
- Run `npm install`
- Enter the specified token in src\services\apiHandlers.ts to prevent rate limiting
- Run `npm start`

## Methodology
After completing the design, I wanted to mainly use `useSWR` to initiate the API calls. This is because SWR has inbuilt caching that would prevent placing unneeded calls to the Github API. After facing some challenges, I opted for Axios. I still believe that the best implementation of this would be completed with SWR.

## Current State
This project is fully functional.
